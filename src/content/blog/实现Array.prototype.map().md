---
title: 实现Array.prototype.map()
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 1f72a5ae9617bf5f851a3703c3bbaf4c
description: >-
  ```jsArray.prototype.map=function(callback,thisArg){if(this==undefined){thrownewTypeError('thisisnul
difficulty: 1
questionNumber: 96
source: >-
  https://fe.ecool.fun/topic-answer/d86ffa19-714c-45a6-a7e0-81ebe2248972?orderBy=updateTime&order=desc&tagId=26
---

```js
Array.prototype.map = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const res = [];
  // 同理
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      // 调用回调函数并传入新数组
      res[i] = callback.call(thisArg, O[i], i, this);
    }
  }
  return res;
};
```
