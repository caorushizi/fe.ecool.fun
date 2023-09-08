---
title: 【Promise第17题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: a2625611ff8ec0bd73907e26d81c35d4
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{setTimeout(()=>{console.log('timer')resolve('success
difficulty: 3
questionNumber: 161
source: >-
  https://fe.ecool.fun/topic-answer/30dd1b36-496d-4a65-a3e7-75be59b36570?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("timer");
    resolve("success");
  }, 1000);
});
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start);
});
promise.then(res => {
  console.log(res, Date.now() - start);
});
```
