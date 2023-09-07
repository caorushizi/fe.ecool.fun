---
title: 遍历一个任意长度的list中的元素并依次创建异步任务，如何获取所有任务的执行结果？
pubDatetime: 2022-10-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 9871cb70385c616b9e1078315a696af9
description: >-
  看到这个题目，大家首先想到的是`Promise.all`或者`Promise.allSettled`。*`Promise.all``Promise.all`需要传入一个数组，数组中的元素都是`Prom
difficulty: 1
questionNumber: 79
source: >-
  https://fe.ecool.fun/topic-answer/1e753e43-2b36-405f-8267-f00afc7656c1?orderBy=updateTime&order=desc&tagId=10
---

看到这个题目，大家首先想到的是 `Promise.all` 或者 `Promise.allSettled`。

- `Promise.all`

`Promise.all` 需要传入一个数组，数组中的元素都是 `Promise` 对象。当这些对象都执行成功时，则 all 对应的 promise 也成功，且执行 then 中的成功回调。如果有一个失败了，则 all 对应的 `promise` 失败，且失败时只能获得第一个失败 `Promise` 的数据。

```typescript
undefined;
```

- `Promise.allSettled`

`Promise.allSettled()` 可用于并行执行独立的异步操作，并收集这些操作的结果。

`Promise.allSettled()` 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

```typescript
undefined;
```
