---
title: 【Promise第13题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 191f54e0da22bd59c64b639bd6351ee3
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{resolve("success1");reject("error");resolve("success
difficulty: 3
questionNumber: 165
source: >-
  https://fe.ecool.fun/topic-answer/f6f14b00-ae3f-43a9-9085-12333dd0cb8c?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then(res => {
    console.log("then: ", res);
  })
  .catch(err => {
    console.log("catch: ", err);
  });
```
