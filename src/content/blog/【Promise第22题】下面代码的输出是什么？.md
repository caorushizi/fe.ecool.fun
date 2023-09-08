---
title: 【Promise第22题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 0a30badc07402a544311f6c4d371be9f
description: >-
  ```jsPromise.resolve().then(functionsuccess(res){thrownewError('error!!!')},functionfail1(err){conso
difficulty: 2
questionNumber: 157
source: >-
  https://fe.ecool.fun/topic-answer/9656ede7-6815-4a00-9df3-60c0219e4383?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve()
  .then(
    function success(res) {
      throw new Error("error!!!");
    },
    function fail1(err) {
      console.log("fail1", err);
    }
  )
  .catch(function fail2(err) {
    console.log("fail2", err);
  });
```
