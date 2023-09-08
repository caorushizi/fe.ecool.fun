---
title: 【Promise第20题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 8df28ca0061aa697b26a44005a5daa56
description: "```jsPromise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)```"
difficulty: 3.5
questionNumber: 158
source: >-
  https://fe.ecool.fun/topic-answer/7a27cdc8-5f66-4cea-8350-c20d0bd2836b?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
```
