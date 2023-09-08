---
title: 【Promise第33题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: bc83ef56554c82d3e5876416d43de8ba
description: >-
  ```jsasyncfunctionasync1(){console.log('async1start');awaitnewPromise(resolve=>{console.log('promise
difficulty: 2.5
questionNumber: 146
source: >-
  https://fe.ecool.fun/topic-answer/a1902422-cbf4-4551-9f88-891eb1777e8d?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  console.log("async1 start");
  await new Promise(resolve => {
    console.log("promise1");
    resolve("promise resolve");
  });
  console.log("async1 success");
  return "async1 end";
}
console.log("srcipt start");
async1().then(res => {
  console.log(res);
});
new Promise(resolve => {
  console.log("promise2");
  setTimeout(() => {
    console.log("timer");
  });
});
```
