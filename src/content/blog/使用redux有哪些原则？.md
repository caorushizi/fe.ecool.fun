---
title: 使用redux有哪些原则？
pubDatetime: 2023-02-18T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: dcb3b04cf2d25b68b5d69e33d26318c0
description: >-
  ###核心描述*单一数据源：整个应用的全局state被存储在一棵objecttree中，并且这个objecttree只存在于唯一一个store中。*State是只读的：唯一改变state的方法就是触发
difficulty: 3
questionNumber: 23
source: >-
  https://fe.ecool.fun/topic-answer/c00d61b8-2609-40b9-8deb-a4fdb686e7c7?orderBy=updateTime&order=desc&tagId=13
---

### 核心描述

- 单一数据源：整个应用的全局 state 被存储在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
- State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事情的普通对象。
- 使用纯函数来执行修改：为了描述 action 如何改变 state tree，你需要编写纯的 reducers。

### 知识拓展

- 什么时候应该使用 redux：
  - 在应用的大量地方，都存在大量的状态
  - 应用状态会随着时间的推移而频繁更新
  - 更新该状态的逻辑可能很复杂
  - 中型和大型代码量的应用，很多人协同开发
- reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。reducer 必须符合以下规则：
  - 仅使用 state 和 action 参数计算新的状态值
  - 禁止直接修改 state。必须通过复制现有的 state 并对复制的值进行更改的方式来做不可变更新
  - 禁止任何异步逻辑、依赖随机值或导致其他副作用代码
- reducer 遵守上述规则的原因：
  - redux 的目标之一是使代码可预测。当函数的输出仅根据输入参数计算时，更容易理解该代码的工作原理并对其进行测试
  - 如果一个函数依赖于自身之外的变量，或者随机行为，你永远不知道运行它时会发生什么
  - 如果一个函数 mutate 了其他对象，比如它的参数，这可能会意外地改变应用程序的工作方式。这可能是错误的常见来源
- 不可变更新（Immutability），不能在 Redux 中更改 state 的原因：
  - 会导致 bug，例如 UI 未正确更新以显示最新值
  - 更难理解状态更新的原因和方式
  - 编写测试变的困难
  - 打破了正确使用“时间旅行调试”的能力
  - 违背了 Redux 的预期精神和使用模式
