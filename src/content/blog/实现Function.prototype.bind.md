---
title: 实现Function.prototype.bind
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 638352f5ca0b0952eb3393103c94573b
description: >-
  ```jsFunction.prototype.bind=function(context,...args){if(typeofthis!=='function'){thrownewError("Ty
difficulty: 2.5
questionNumber: 91
source: >-
  https://fe.ecool.fun/topic-answer/c6c4c722-bd37-41dd-b736-e836260b7863?orderBy=updateTime&order=desc&tagId=26
---

```js
Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Type Error");
  }
  // 保存this的值
  var self = this;

  return function F() {
    // 考虑new的情况
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  };
};
```
