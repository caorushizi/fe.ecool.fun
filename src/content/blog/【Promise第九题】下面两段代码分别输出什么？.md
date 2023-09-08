---
title: 【Promise第九题】下面两段代码分别输出什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 07836d112d7ecdfca6e28227c279a18d
description: >-
  代码一：```jssetTimeout(()=>{console.log('timer1');setTimeout(()=>{console.log('timer3')},0)},0)setTimeo
difficulty: 3
questionNumber: 169
source: >-
  https://fe.ecool.fun/topic-answer/a2c0b41f-1a7e-478b-9e0f-eba7e31a0b2c?orderBy=updateTime&order=desc&tagId=10
---

代码一：

```js
setTimeout(() => {
  console.log("timer1");
  setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");
```

代码二：

```js
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");
```
