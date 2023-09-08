---
title: 【Promise第14题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: ad8fef713f48a64598b5f5978c3b65e1
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{reject("error");resolve("success2");});promise.then(
difficulty: 2.5
questionNumber: 164
source: >-
  https://fe.ecool.fun/topic-answer/31621982-633a-4254-a1a4-b518f734c674?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
  .then(res => {
    console.log("then1: ", res);
  })
  .then(res => {
    console.log("then2: ", res);
  })
  .catch(err => {
    console.log("catch: ", err);
  })
  .then(res => {
    console.log("then3: ", res);
  });
```
