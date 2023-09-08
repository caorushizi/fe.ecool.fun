---
title: Promise中的值穿透是什么？
pubDatetime: 2021-08-14T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 4ea0ae64ff8051583f50038a16e8f806
description: >-
  解释：.then或者.catch的参数期望是函数，传入非函数则会发生值穿透。当then中传入的不是函数，则这个then返回的promise的data，将会保存上一个的promise.data。这就是发
difficulty: 3.5
questionNumber: 226
source: >-
  https://fe.ecool.fun/topic-answer/154d4288-8195-4fd4-87bb-2844cb22a4e5?orderBy=updateTime&order=desc&tagId=10
---

解释：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。

当 then 中传入的不是函数，则这个 then 返回的 promise 的 data，将会保存上一个的 promise.data。这就是发生值穿透的原因。而且每一个无效的 then 所返回的 promise 的状态都为 resolved。

```javascript
Promise.resolve(1)
  .then(2) // 注意这里
  .then(Promise.resolve(3))
  .then(console.log);
```

上面代码的输出是 `1`
