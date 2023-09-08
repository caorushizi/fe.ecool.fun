---
title: 【Promise第15题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3f08a73ec69d5b0f63807c7e6338eebb
description: >-
  ```jsPromise.resolve(1).then(res=>{console.log(res);return2;}).catch(err=>{return3;}).then(res=>{con
difficulty: 3
questionNumber: 163
source: >-
  https://fe.ecool.fun/topic-answer/1b41e9cc-194a-4e0c-8bc5-17a83af9abad?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
```
