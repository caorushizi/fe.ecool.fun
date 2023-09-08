---
title: 【Promise第21题】下面代码的输出是什么？
pubDatetime: 2023-03-25T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 6d7bffbfa18c73f9998a4ce0cfb059e4
description: >-
  ```jsPromise.reject('err!!!').then((res)=>{console.log('success',res)},(err)=>{console.log('error',e
difficulty: 3
questionNumber: 39
source: >-
  https://fe.ecool.fun/topic-answer/023f27d0-f90b-446d-bd6c-293e95f9c9b8?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.reject("err!!!")
  .then(
    res => {
      console.log("success", res);
    },
    err => {
      console.log("error", err);
    }
  )
  .catch(err => {
    console.log("catch", err);
  });
```
