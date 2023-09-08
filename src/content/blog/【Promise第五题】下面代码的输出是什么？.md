---
title: 【Promise第五题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: b0be2d1cb2b1267ec41c657687068d79
description: >-
  ```jsconstfn=()=>(newPromise((resolve,reject)=>{console.log(1);resolve('success')}))fn().then(res=>{
difficulty: 1
questionNumber: 174
source: >-
  https://fe.ecool.fun/topic-answer/c363d879-8557-486c-89ef-2a0e02d2164e?orderBy=updateTime&order=desc&tagId=10
---

```js
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
fn().then(res => {
  console.log(res);
});
console.log("start");
```
