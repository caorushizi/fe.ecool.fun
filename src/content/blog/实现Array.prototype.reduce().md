---
title: 实现Array.prototype.reduce()
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: d7037f1c610caf48ec952edecea878de
description: >-
  ```jsArray.prototype.reduce=function(callback,initialValue){if(this==undefined){thrownewTypeError('t
difficulty: 1
questionNumber: 94
source: >-
  https://fe.ecool.fun/topic-answer/b66b6742-6ef1-4359-82ae-c69e2a041549?orderBy=updateTime&order=desc&tagId=26
---

```js
Array.prototype.reduce = function (callback, initialValue) {
  if (this == undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callbackfn + " is not a function");
  }
  const O = Object(this);
  const len = this.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  // 如果第二个参数为undefined的情况下
  // 则数组的第一个有效值作为累加器的初始值
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k++;
    }
    // 如果超出数组界限还没有找到累加器的初始值，则TypeError
    if (k >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = O[k++];
  }
  while (k < len) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    k++;
  }
  return accumulator;
};
```
