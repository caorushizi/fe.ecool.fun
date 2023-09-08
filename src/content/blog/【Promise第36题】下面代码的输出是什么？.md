---
title: 【Promise第36题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 99ae3b0055be1aba76aea658a699b821
description: >-
  ```jsasyncfunctionasync1(){awaitasync2();console.log('async1');return'async1success'}asyncfunctionas
difficulty: 3
questionNumber: 143
source: >-
  https://fe.ecool.fun/topic-answer/32b06302-58e6-44df-acb7-6c975dcc2957?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  await async2();
  console.log("async1");
  return "async1 success";
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log("async2");
    reject("error");
  });
}
async1().then(res => console.log(res));
```
