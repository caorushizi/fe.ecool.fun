---
title: generator是怎么做到中断和恢复的？
pubDatetime: 2023-05-30T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d6371f1a3a91280d7b83a9d061e5f79c
description: >-
  Generator是一种特殊的函数类型，可以在函数执行过程中暂停和恢复执行。它通过使用yield表达式来实现中断和恢复执行的功能。当Generator函数被调用时，它并不会立即执行，而是返回一个迭代器
difficulty: 3
questionNumber: 16
source: >-
  https://fe.ecool.fun/topic-answer/231bf96d-c071-4e8e-9db8-cd0fa0763fc5?orderBy=updateTime&order=desc&tagId=10
---

Generator 是一种特殊的函数类型，可以在函数执行过程中暂停和恢复执行。它通过使用 yield 表达式来实现中断和恢复执行的功能。

当 Generator 函数被调用时，它并不会立即执行，而是返回一个迭代器对象。每次调用迭代器对象的 next() 方法时，Generator 函数会从上一次执行的位置继续执行，直到遇到下一个 yield 表达式或函数结束。此时，Generator 函数将返回一个包含当前值和执行状态的对象，其中 value 属性表示 yield 表达式的结果，done 属性表示是否执行完毕。

例如，下面是一个简单的 Generator 函数示例：

    function* myGenerator() {
      console.log('Step 1');
      yield;
      console.log('Step 2');
      yield;
      console.log('Step 3');
    }

    const gen = myGenerator();
    gen.next(); // 输出 Step 1
    gen.next(); // 输出 Step 2
    gen.next(); // 输出 Step 3

在这个示例中，myGenerator() 函数包含三个 yield 表达式，每次调用迭代器对象的 next() 方法都会从上一次执行的位置继续执行，直到遇到下一个 yield 表达式或函数结束。

当执行第一个 gen.next() 方法时，输出 Step 1，并暂停执行，将控制权交回给调用者。当再次调用 gen.next() 方法时，继续执行后面的代码，输出 Step 2，并再次暂停执行。最后，再次调用 gen.next() 方法时，完成函数的执行，输出 Step 3，并返回一个包含 value 和 done 属性的对象。

通过使用 yield 表达式和迭代器对象，Generator 函数可以实现中断和恢复执行的功能，从而提供更灵活、更高效的 JavaScript 编程方式。
