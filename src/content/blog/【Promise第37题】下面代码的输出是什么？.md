---
title: 【Promise第37题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 6eaa9aece930fdf362e16dd7b2658bfd
description: >-
  ```jsasyncfunctionasync1(){try{awaitPromise.reject('error!!!')}catch(e){console.log(e)}console.log('
difficulty: 3
questionNumber: 142
source: >-
  https://fe.ecool.fun/topic-answer/59b71384-0a0a-4d2e-a63a-f4fb75650b60?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  try {
    await Promise.reject("error!!!");
  } catch (e) {
    console.log(e);
  }
  console.log("async1");
  return Promise.resolve("async1 success");
}
async1().then(res => console.log(res));
console.log("script start");
```
