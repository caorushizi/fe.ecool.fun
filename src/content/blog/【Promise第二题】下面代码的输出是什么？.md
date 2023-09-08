---
title: 【Promise第二题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 1289a6789ae9820a56ebfd7514144187
description: >-
  ```jsconstpromise=newPromise((resolve,reject)=>{console.log(1);resolve('success')console.log(2);});p
difficulty: 1.5
questionNumber: 173
source: >-
  https://fe.ecool.fun/topic-answer/3c969c35-6d25-4932-977e-d9ba31000ccd?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success");
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
```
