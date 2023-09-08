---
title: 【Promise第10题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 5e8e807a13fc1e01629759abdcbcb50d
description: >-
  ```jsPromise.resolve().then(()=>{console.log('promise1');consttimer2=setTimeout(()=>{console.log('ti
difficulty: 2.5
questionNumber: 168
source: >-
  https://fe.ecool.fun/topic-answer/fa6c1ad8-274c-4830-aee9-6799d6a7fdc1?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");
```
