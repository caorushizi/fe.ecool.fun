---
title: 【Promise第八题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 4b1ba46042a9f2796efd75f3a35801e6
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{console.log(1);setTimeout(()=>{console.log("timerSta
difficulty: 2
questionNumber: 170
source: >-
  https://fe.ecool.fun/topic-answer/a7ccbacc-5415-4c3f-b168-5fcc4d7792ee?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then(res => {
  console.log(res);
});
console.log(4);
```
