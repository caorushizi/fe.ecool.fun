---
title: 输出是什么？
pubDatetime: 2024-09-09T15:55:42.000Z
author: caorushizi
tags:
  - 选择题
postSlug: cb23ddfc-db2e-4d2a-b859-9238d30daed9
description: >-
  class Counter { #number = 10 increment() { this.#number++ } getNum() { return
  this.#number } } const counter = new Counter() counter.increment()
  console.log(counter.#number) 在 ES2020 中，通过 # 我们可以给 clas
difficulty: 1
questionNumber: 144
source: https://fe.ecool.fun/topic/cb23ddfc-db2e-4d2a-b859-9238d30daed9
---

```javascript
class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);
```

---

在 ES2020 中，通过 `#` 我们可以给 class 添加私有变量。在 class 的外部我们无法获取该值。当我们尝试输出 `counter.#number`，语法错误被抛出：我们无法在 class `Counter` 外部获取它!

## 注意

有同学反馈，上面的代码在 Chrome console里，是可以打印出 `11` 这个值的，测试之后确实能看到，这一点在MDN上也有明确说明（**只在Chrome的console控制台里，才能够访问到私有属性，这是为了开发调试的便利**）：

> Note: Code run in the Chrome console can access private properties outside the class. This is a DevTools-only relaxation of the JavaScript syntax restriction.

MDN链接：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#description
