---
title: Promise 的 finally 怎么实现的？
pubDatetime: 2023-05-31T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 82bb1ac3cdbe78e4095bebfe53ad657b
description: >-
  Promise.prototype.finally方法是ES2018引入的一个方法，用于在Promise执行结束后无论成功与否都会执行的操作。在实际应用中，finally方法通常用于释放资源、清理代码
difficulty: 3.5
questionNumber: 13
source: >-
  https://fe.ecool.fun/topic-answer/7b82de7c-5c47-4e5a-9630-df2721d17edb?orderBy=updateTime&order=desc&tagId=26
---

Promise.prototype.finally 方法是 ES2018 引入的一个方法，用于在 Promise 执行结束后无论成功与否都会执行的操作。在实际应用中，finally 方法通常用于释放资源、清理代码或更新 UI 界面等操作。

以下是一个简单的实现方式：

```typescript
undefined;
```

我们定义了一个名为 finally 的函数，它使用了 Promise 原型链的方式实现了 finally 方法。该函数接收一个回调函数作为参数，并返回一个新的 Promise 对象。如果原始 Promise 成功，则会先调用 callback 函数，然后将结果传递给下一个 Promise；如果失败，则会先调用 callback 函数，然后将错误信息抛出。

可以看到，在实现中，我们首先通过 this.constructor 获取当前 Promise 实例的构造函数，然后分别处理 Promise 的 resolved 和 rejected 状态的情况。在 resolved 状态时，我们先调用 callback 函数，然后将结果传递给新创建的 Promise 对象；在 rejected 状态时，我们也是先调用 callback 函数，然后将错误信息抛出。

这样，我们就完成了 Promise.prototype.finally 方法的实现。
