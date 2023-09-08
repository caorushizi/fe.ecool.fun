---
title: 【Promise第32题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 9c4a0dfbc92d44e0816f8fa0281c1ff4
description: >-
  ```jsasyncfunctionasync1(){console.log('async1start');awaitnewPromise(resolve=>{console.log('promise
difficulty: 2.5
questionNumber: 147
source: >-
  https://fe.ecool.fun/topic-answer/52ba6f44-41dd-44cb-a2f4-2dc1589fb02b?orderBy=updateTime&order=desc&tagId=10
---

```js
async function async1() {
  console.log("async1 start");
  await new Promise(resolve => {
    console.log("promise1");
  });
  console.log("async1 success");
  return "async1 end";
}
console.log("srcipt start");
async1().then(res => console.log(res));
console.log("srcipt end");
```
