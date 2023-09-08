---
title: 【Promise第七题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: b97fd39f36095f7f59d48d6530ab7a62
description: >-
  ```jsconsole.log('start')setTimeout(()=>{console.log('time')})Promise.resolve().then(()=>{console.lo
difficulty: 2
questionNumber: 171
source: >-
  https://fe.ecool.fun/topic-answer/c3d12ae7-e074-4072-a07a-aad43ec87e94?orderBy=updateTime&order=desc&tagId=10
---

```js
console.log("start");
setTimeout(() => {
  console.log("time");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");
```
