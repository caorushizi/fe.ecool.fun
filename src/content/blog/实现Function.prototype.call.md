---
title: 实现Function.prototype.call
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 520ebaa0b6372cb8719ac670c600cae5
description: >-
  ```jsFunction.prototype.call=function(context=window,...args){if(typeofthis!=='function'){thrownewTy
difficulty: 2
questionNumber: 92
source: >-
  https://fe.ecool.fun/topic-answer/827a8f47-1144-4ab1-9d6c-b7d3b3d6aebf?orderBy=updateTime&order=desc&tagId=26
---

```js
Function.prototype.call = function (context = window, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};
```
