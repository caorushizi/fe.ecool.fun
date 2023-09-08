---
title: 【Promise第39题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 5b79ed48f55e41666741ef27dd21c2d6
description: >-
  ```jsconstasync1=async()=>{console.log('async1');setTimeout(()=>{console.log('timer1')},2000)awaitne
difficulty: 4
questionNumber: 140
source: >-
  https://fe.ecool.fun/topic-answer/41c2b7e0-3ab2-4a94-8017-1804b0ddf868?orderBy=updateTime&order=desc&tagId=10
---

```js
const async1 = async () => {
  console.log("async1");
  setTimeout(() => {
    console.log("timer1");
  }, 2000);
  await new Promise(resolve => {
    console.log("promise1");
  });
  console.log("async1 end");
  return "async1 success";
};
console.log("script start");
async1().then(res => console.log(res));
console.log("script end");
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res => console.log(res));
setTimeout(() => {
  console.log("timer2");
}, 1000);
```
