---
title: 连续bind()多次，输出的值是什么？
pubDatetime: 2022-06-05T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: adb65aeeaaa82d121a0aef2f9c3c2882
description: >-
  ```jsvarbar=function(){console.log(this.x);}varfoo={x:3}varsed={x:4}varfunc=bar.bind(foo).bind(sed);
difficulty: 2
questionNumber: 100
source: >-
  https://fe.ecool.fun/topic-answer/b9bab51e-ab87-400a-9284-b996e853ecec?orderBy=updateTime&order=desc&tagId=10
---

```js
var bar = function () {
  console.log(this.x);
};
var foo = {
  x: 3,
};
var sed = {
  x: 4,
};
var func = bar.bind(foo).bind(sed);
func(); //?

var fiv = {
  x: 5,
};
var func = bar.bind(foo).bind(sed).bind(fiv);
func(); //?
```
