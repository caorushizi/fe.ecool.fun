---
title: 【Promise第27题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 50c88bf2cad2e04430ce1d0921eb0b47
description: >-
  ```jsfunctionrunAsync(x){constp=newPromise(r=>setTimeout(()=>r(x,console.log(x)),1000));returnp;}fun
difficulty: 2
questionNumber: 152
source: >-
  https://fe.ecool.fun/topic-answer/44b5f8c5-1d8c-4294-b668-7f7f096cd44c?orderBy=updateTime&order=desc&tagId=10
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
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log("result: ", res))
  .catch(err => console.log(err));
```
