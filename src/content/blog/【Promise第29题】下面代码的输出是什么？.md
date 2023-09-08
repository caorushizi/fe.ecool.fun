---
title: 【Promise第29题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: be7920b4d9bd9c788ea505b40cad061f
description: >-
  ```jsasyncfunctionasync1(){console.log("async1start");awaitasync2();console.log("async1end");}asyncf
difficulty: 3
questionNumber: 150
source: >-
  https://fe.ecool.fun/topic-answer/96feb2bc-cdd7-4b16-be8a-e9d5af64a27b?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log("timer");
  }, 0);
  console.log("async2");
}
async1();
console.log("start");
```
