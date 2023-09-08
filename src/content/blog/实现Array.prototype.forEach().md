---
title: 实现Array.prototype.forEach()
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: e7672a7de687ebced1fdda74a32aa18c
description: >-
  ```jsArray.prototype.forEach=function(callback,thisArg){if(this==null){thrownewTypeError('thisisnull
difficulty: 2
questionNumber: 95
source: >-
  https://fe.ecool.fun/topic-answer/f1974383-8f98-4cd9-8a8e-f0c51e61b275?orderBy=updateTime&order=desc&tagId=26
---

```js
Array.prototype.forEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
};
```
