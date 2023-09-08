---
title: 【Promise第26题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 92a8fcaf7f16e0cf3c66e9f27339fba8
description: >-
  ```jsfunctionrunAsync(x){constp=newPromise(r=>setTimeout(()=>r(x,console.log(x)),1000))returnp}funct
difficulty: 2
questionNumber: 153
source: >-
  https://fe.ecool.fun/topic-answer/613e333e-ffca-45ff-a13a-debd8053d913?orderBy=updateTime&order=desc&tagId=10
---

```js
function runAsync(x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```
