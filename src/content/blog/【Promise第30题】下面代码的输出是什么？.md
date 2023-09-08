---
title: 【Promise第30题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: dd7ad5dcedc00a288b95fea23faa64f8
description: >-
  ```jsasyncfunctionasync1(){console.log("async1start");awaitasync2();console.log("async1end");setTime
difficulty: 2
questionNumber: 149
source: >-
  https://fe.ecool.fun/topic-answer/2c14e603-0e2b-4a05-89b7-d5c45804527a?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log("timer1");
  }, 0);
}
async function async2() {
  setTimeout(() => {
    console.log("timer2");
  }, 0);
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log("timer3");
}, 0);
console.log("start");
```
