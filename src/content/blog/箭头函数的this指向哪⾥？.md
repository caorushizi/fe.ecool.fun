---
title: 箭头函数的this指向哪⾥？
pubDatetime: 2021-08-22T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: f1401f47b50a3fd6cd11c829a216cfb3
description: >-
  箭头函数不同于传统JavaScript中的函数，箭头函数并没有属于⾃⼰的this，它所谓的this是捕获其所在上下⽂的this值，作为⾃⼰的this值，并且由于没有属于⾃⼰的this，所以是不会被ne
difficulty: 3
questionNumber: 14
source: >-
  https://fe.ecool.fun/topic-answer/33363940-179b-4ae3-9cd3-7bf0a5619df9?orderBy=updateTime&order=desc&tagId=24
---

箭头函数不同于传统 JavaScript 中的函数，箭头函数并没有属于⾃⼰的 this，它所谓的 this 是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的 this，所以是不会被 new 调⽤的，这个所谓的 this 也不会被改变。

可以⽤ Babel 理解⼀下箭头函数:

```js
// ES6
const obj = {
  getArrow() {
    return () => {
      console.log(this === obj);
    };
  },
};
```

转化后：

```js
// ES5，由 Babel 转译
var obj = {
  getArrow: function getArrow() {
    var _this = this;
    return function () {
      console.log(_this === obj);
    };
  },
};
```
