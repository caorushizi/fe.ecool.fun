---
title: 【Promise第25题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 5871b1aa7a9fb8942e94110220f99ae3
description: >-
  ```jsfunctionrunAsync(x){constp=newPromise(r=>setTimeout(()=>r(x,console.log(x)),1000))returnp}Promi
difficulty: 1.5
questionNumber: 154
source: >-
  https://fe.ecool.fun/topic-answer/3489b960-4172-47f8-9ae2-93616d85009f?orderBy=updateTime&order=desc&tagId=10
---

```js
function runAsync(x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res =>
  console.log(res)
);
```
