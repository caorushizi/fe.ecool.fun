---
title: 输出什么？
pubDatetime: 2021-07-03T22:33:30.000Z
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
