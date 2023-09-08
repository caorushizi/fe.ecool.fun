---
title: 【Promise第24题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: aa3c1b89ece8314303dc6798263c1c7c
description: >-
  ```jsfunctionpromise1(){letp=newPromise((resolve)=>{console.log('promise1');resolve('1')})returnp;}f
difficulty: 4
questionNumber: 155
source: >-
  https://fe.ecool.fun/topic-answer/fa9e9946-de5b-4998-a224-8d512d3ccac2?orderBy=updateTime&order=desc&tagId=10
---

```js
function promise1() {
  let p = new Promise(resolve => {
    console.log("promise1");
    resolve("1");
  });
  return p;
}
function promise2() {
  return new Promise((resolve, reject) => {
    reject("error");
  });
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("finally1"));

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("finally2"));
```
