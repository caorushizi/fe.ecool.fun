---
title: 【Promise第12题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 5d632ff5723bcb3b9b90250dddbb113a
description: >-
  ```jsconstpromise1=newPromise((resolve,reject)=>{setTimeout(()=>{resolve("success");console.log("tim
difficulty: 3
questionNumber: 166
source: >-
  https://fe.ecool.fun/topic-answer/37a4ad10-3819-4ab3-bb5f-26a6bf1ca07a?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);
```
