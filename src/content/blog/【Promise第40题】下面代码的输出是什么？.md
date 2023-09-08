---
title: 【Promise第40题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 2719b9c94ae9b1e0b351574ce1ff78c6
description: >-
  ```jsconstp1=newPromise((resolve)=>{setTimeout(()=>{resolve('resolve3');console.log('timer1')},0)res
difficulty: 4
questionNumber: 139
source: >-
  https://fe.ecool.fun/topic-answer/dec780c4-3610-4673-b12f-add388ceec10?orderBy=updateTime&order=desc&tagId=10
---

```js
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("resolve3");
    console.log("timer1");
  }, 0);
  resolve("resovle1");
  resolve("resolve2");
})
  .then(res => {
    console.log(res);
    setTimeout(() => {
      console.log(p1);
    }, 1000);
  })
  .finally(res => {
    console.log("finally", res);
  });
```
