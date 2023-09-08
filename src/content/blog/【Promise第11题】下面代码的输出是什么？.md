---
title: 【Promise第11题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 6dd1c095dcc5c001045691317909f172
description: >-
  ```jsconstpromise1=newPromise((resolve,reject)=>{setTimeout(()=>{resolve('success')},1000)})constpro
difficulty: 3
questionNumber: 167
source: >-
  https://fe.ecool.fun/topic-answer/d9a36bb7-972c-4afb-abb6-fcbaa30612cf?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);
```
