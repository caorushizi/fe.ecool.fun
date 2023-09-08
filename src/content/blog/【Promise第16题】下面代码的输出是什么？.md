---
title: 【Promise第16题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 9f1fd978e0a3f4082385b8d320833e1b
description: >-
  ```jsPromise.reject(1).then(res=>{console.log(res);return2;}).catch(err=>{console.log(err);return3})
difficulty: 3
questionNumber: 162
source: >-
  https://fe.ecool.fun/topic-answer/58350841-57d6-4b0a-9e31-57f5f0e16357?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
```
