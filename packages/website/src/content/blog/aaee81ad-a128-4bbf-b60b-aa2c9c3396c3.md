---
title: " Promise中，resolve后面的语句是否还会执行？"
pubDatetime: 2024-08-10T17:05:25.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: aaee81ad-a128-4bbf-b60b-aa2c9c3396c3
description: >-
  在 JavaScript 中，当调用 Promise.resolve(value) 后，Promise
  会立即变成已解决状态（fulfilled），value 会作为结果传递。但resolve 后面的语句会继续执行，因为 resolve 只是将 Promise
  的状态更改为已解决，它不会中断或停止代码的执行。 以下是一个例子： new Promise((resolve, reject) => {
difficulty: 3
questionNumber: 499
source: https://fe.ecool.fun/topic/aaee81ad-a128-4bbf-b60b-aa2c9c3396c3
---

在 JavaScript 中，当调用 `Promise.resolve(value)` 后，Promise 会立即变成已解决状态（fulfilled），`value` 会作为结果传递。但`resolve` 后面的语句会继续执行，因为 `resolve` 只是将 Promise 的状态更改为已解决，它不会中断或停止代码的执行。

以下是一个例子：

```javascript
new Promise((resolve, reject) => {
  console.log("Promise started");
  resolve("Resolved value");
  console.log("After resolve");
}).then((value) => {
  console.log(value);
});
```

输出是：

```
Promise started
After resolve
Resolved value
```

这表明 `resolve` 后面的 `console.log("After resolve")` 语句确实会被执行。
