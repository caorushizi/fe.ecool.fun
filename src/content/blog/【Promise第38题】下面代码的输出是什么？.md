---
title: 【Promise第38题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: edfb2f88c5b7450d210f85b16e03684f
description: >-
  ```jsconstfirst=()=>(newPromise((resolve,reject)=>{console.log(3);letp=newPromise((resolve,reject)=>
difficulty: 4
questionNumber: 141
source: >-
  https://fe.ecool.fun/topic-answer/570eed0a-2340-4c59-a6c0-967db6a7dc48?orderBy=updateTime&order=desc&tagId=10
---

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
        console.log(p);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then(arg => {
      console.log(arg);
    });
  });
first().then(arg => {
  console.log(arg);
});
console.log(4);
```
