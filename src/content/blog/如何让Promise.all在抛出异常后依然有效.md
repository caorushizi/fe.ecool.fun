---
title: 如何让Promise.all在抛出异常后依然有效
pubDatetime: 2022-08-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 2077cd67cc9206c31e314703beed481f
description: >-
  在处理多个并发请求时，我们一般会用`Promise.all()`方法。该方法指当所有在可迭代参数中的`promises`已完成，或者第一个传递的promise（指reject）失败时，返回promis
difficulty: 3
questionNumber: 87
source: >-
  https://fe.ecool.fun/topic-answer/3526fff1-d92d-4568-b6dd-549bc6c2a92e?orderBy=updateTime&order=desc&tagId=10
---

在处理多个并发请求时，我们一般会用`Promise.all()`方法。

该方法指当所有在可迭代参数中的 `promises` 已完成，或者第一个传递的 promise（指 reject）失败时，返回 promise。

但是当其中任何一个被拒绝的话。`Promise.all([..])`就会立即被拒绝，并丢弃来自其他所有 promis 的全部结果。

也就是说，`promise.all` 中任何一个 `promise` 出现错误的时候都会执行 reject，导致其它正常返回的数据也无法使用。

如何让 Promise.all 在抛出异常后依然有效呢？

# 方案一

在 promise.all 队列中，使用 map 每一个过滤每一个 promise 任务，其中任意一个报错后，return 一个返回值，确保 promise 能正常执行走到.then 中。

```typescript
undefined;
```

# 方案二

使用 `Promise.allSettled` 替代 `Promise.all()`。

> `Promise.allSettled()`方法返回一个 promise，该 promise 在所有给定的 promise 已被解析或被拒绝后解析，并且每个对象都描述每个 promise 的结果。
