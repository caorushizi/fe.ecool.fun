---
title: 【Promise第18题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 10ee9979c19d6e82340bbcb087ee6dab
description: >-
  ```jsPromise.resolve().then(()=>{returnnewError('error!!!')}).then(res=>{console.log("then:",res)}).
difficulty: 3
questionNumber: 160
source: >-
  https://fe.ecool.fun/topic-answer/e0e3dbcd-2e8a-4756-9241-bbb23af9c2e8?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then(res => {
    console.log("then: ", res);
  })
  .catch(err => {
    console.log("catch: ", err);
  });
```
