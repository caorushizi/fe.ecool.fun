---
title: 【Promise第35题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d859f6c98f58e1c54d135f8c9aaa733a
description: >-
  ```jsasyncfunctiontestSometing(){console.log("执行testSometing");return"testSometing";}asyncfunctionte
difficulty: 3
questionNumber: 144
source: >-
  https://fe.ecool.fun/topic-answer/26bf47fe-07e4-4014-b3ea-8a745f70d718?orderBy=updateTime&order=desc&tagId=10
---

```js
async function testSometing() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
  console.log("promise start...");
  resolve("promise");
});
promise.then(val => console.log(val));

console.log("test end...");
```
