---
title: bind()连续调用多次，this的绑定值是什么呢？
pubDatetime: 2021-08-14T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d00fe12e63458203058b2ec9b7736af5
description: >-
  ```javascriptvarbar=function(){console.log(this.x);}varfoo={x:3}varsed={x:4}varfunc=bar.bind(foo).bi
difficulty: 3
questionNumber: 228
source: >-
  https://fe.ecool.fun/topic-answer/e253151b-a880-448b-9cd1-d869971a63e4?orderBy=updateTime&order=desc&tagId=10
---

```javascript
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
