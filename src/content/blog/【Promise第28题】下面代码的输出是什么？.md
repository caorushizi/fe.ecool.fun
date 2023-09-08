---
title: 【Promise第28题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 267f7848ab4c630c93eca0cf9cac546c
description: >-
  ```jsasyncfunctionasync1(){console.log("async1start");awaitasync2();console.log("async1end");}asyncf
difficulty: 3
questionNumber: 151
source: >-
  https://fe.ecool.fun/topic-answer/2b7bc012-86d2-405a-8a26-778f5f1b6dfe?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log("start");
```
