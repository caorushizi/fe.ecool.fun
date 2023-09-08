---
title: 【Promise第六题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3aa835838ed13fbc48b6e9427658e68e
description: >-
  ```jsconstfn=()=>newPromise((resolve,reject)=>{console.log(1);resolve("success");});console.log("sta
difficulty: 2
questionNumber: 172
source: >-
  https://fe.ecool.fun/topic-answer/1b7efa22-c54d-4dc9-a54e-7faa69f5b821?orderBy=updateTime&order=desc&tagId=10
---

```js
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});
```
