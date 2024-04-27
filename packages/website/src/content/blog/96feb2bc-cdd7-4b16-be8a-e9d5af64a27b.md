---
title: 【Promise第29题】下面代码的输出是什么？
pubDatetime: 2022-01-09T23:15:10.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 96feb2bc-cdd7-4b16-be8a-e9d5af64a27b
description: >-
  async function async1() { console.log("async1 start"); await async2();
  console.log("async1 end"); } async function async2() { setTimeout(() => {
  console.log('timer') }, 0) console.log("async2"); } asy
difficulty: 3
questionNumber: 1621
source: https://fe.ecool.fun/topic/96feb2bc-cdd7-4b16-be8a-e9d5af64a27b
---

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log("timer");
  }, 0);
  console.log("async2");
}
async1();
console.log("start");
```

---

## 解析

定时器始终还是最后执行的，它被放到下一条宏任务的延迟队列中。

## 结果

```
'async1 start'
'async2'
'start'
'async1 end'
'timer'
```
