---
title: 【Promise第四题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 37f14328162931a5f7079195d3037086
description: >-
  ```javascriptconstpromise1=newPromise((resolve,reject)=>{console.log('promise1')resolve('resolve1')}
difficulty: 2
questionNumber: 175
source: >-
  https://fe.ecool.fun/topic-answer/db6857d7-1559-4abe-816d-545b9be4e05e?orderBy=updateTime&order=desc&tagId=10
---

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve("resolve1");
});
const promise2 = promise1.then(res => {
  console.log(res);
});
console.log("1", promise1);
console.log("2", promise2);
```
