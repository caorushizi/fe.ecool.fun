---
title: react 的虚拟dom是怎么实现的？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 9da6ec0f84090cf6bc98e7a82aceaf96
description: >-
  React是把真实的DOM树转换为JS对象树，也就是VirtualDOM。每次数据更新后，重新计算VM，并和上一次生成的VM树进行对比，对发生变化的部分进行批量更新。除了性能之外，VM的实现最大的好处
difficulty: 3
questionNumber: 83
source: >-
  https://fe.ecool.fun/topic-answer/b19c5c77-658d-4004-a9c5-028fd81b3a9e?orderBy=updateTime&order=desc&tagId=13
---

React 是把真实的 DOM 树转换为 JS 对象树，也就是 Virtual DOM。每次数据更新后，重新计算 VM，并和上一次生成的 VM 树进行对比，对发生变化的部分进行批量更新。除了性能之外，VM 的实现最大的好处在于和其他平台的集成。

比如我们一个真是的 DOM 是这样的

```typescript
undefined;
```

那么在转化为 VM 之后就是这样的

```typescript
undefined;
```
