---
title: 【Promise第34题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3a4f4e987f16f4a8a55dd6b00390178a
description: >-
  ```jsasyncfunctionasync1(){console.log("async1start");awaitasync2();console.log("async1end");}asyncf
difficulty: 4
questionNumber: 145
source: >-
  https://fe.ecool.fun/topic-answer/7fdc5ee0-1c5f-483b-927b-140536ea83f2?orderBy=updateTime&order=desc&tagId=10
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

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```
