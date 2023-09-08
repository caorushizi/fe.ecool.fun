---
title: 【Promise第三题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: f43d873d81882f5766e42571cc0d8d33
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{console.log(1);console.log(2);});promise.then(()=>{c
difficulty: 1.5
questionNumber: 176
source: >-
  https://fe.ecool.fun/topic-answer/214b0a32-c111-4c6c-aad6-4ecc14bd904a?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
```
