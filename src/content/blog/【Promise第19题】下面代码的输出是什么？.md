---
title: 【Promise第19题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: e3ff5ff05b1cb6cbc2c335e6f913664d
description: >-
  ```jsconstpromise=Promise.resolve().then(()=>{returnpromise;})promise.catch(console.err)```
difficulty: 3
questionNumber: 159
source: >-
  https://fe.ecool.fun/topic-answer/090868ab-fef9-4759-8b81-20708a165fa1?orderBy=updateTime&order=desc&tagId=10
---

```js
const promise = Promise.resolve().then(() => {
  return promise;
});
promise.catch(console.err);
```
