---
title: async/await 怎么进行错误处理？
pubDatetime: 2022-05-15T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 876f937588fca9251d2c3abda1ec99da
description: >-
  一般情况下async/await在错误处理方面，主要使用try/catch，像这样```typescriptundefined```这么看，感觉倒是没什么问题，如果是这样呢？有多个异步操作，需要对每个
difficulty: 2
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/deb034d1-2a96-45b4-8576-132f2af9c797?orderBy=updateTime&order=desc&tagId=24
---

一般情况下 async/await 在错误处理方面，主要使用 try/catch，像这样

```typescript
undefined;
```

这么看，感觉倒是没什么问题，如果是这样呢？有多个异步操作，需要对每个异步返回的 error 错误状态进行不同的处理，以下是示例代码

```typescript
undefined;
```

这样写代码里充斥着 try/catch，有代码洁癖的你能忍受的了吗？这时可能会想到只用一个 try/catch。

```typescript
undefined;
```

如果是这样写只会增加编码的复杂度，而且要多写代码，这个时候就应该想想怎么优雅的解决，async/await 本质就是 promise 的语法糖，既然是 promise 那么就可以使用 then 函数了

```typescript
undefined;
```

在上面写法中，如果 fetchData 返回 resolve 正确结果时，data 是我们要的结果，如果是 reject 了，发生错误了，那么 data 是错误结果，这显然是行不通的，再对其完善。

```typescript
undefined;
```

这样是不是好很多了呢，但是问题又来了，不能每个 await 都写这么长，写着也不方便也不优雅，再优化一下

```typescript
undefined;
```

将对 await 处理的方法抽离成公共的方法，在使用 await 调用 awaitWrap 这样的方法是不是更优雅了呢。如果使用 typescript 实现大概是这个样子

```typescript
undefined;
```
