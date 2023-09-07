---
title: mobx 和 redux 有什么区别？
pubDatetime: 2022-01-16T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 18b8e0b25fa597c94bb798b023231772
description: >-
  共同点---*为了解决状态管理混乱、无法有效同步的问题，统一维护管理应用状态*某一状态只有一个可信数据来源（通常命名为store，指状态容器）*操作更新状态方式统一，并且可控（通常以action方式提
difficulty: 2.5
questionNumber: 47
source: >-
  https://fe.ecool.fun/topic-answer/453b0ac6-f8a2-44ed-af3f-eda8eaa0a70d?orderBy=updateTime&order=desc&tagId=13
---

## 共同点

- 为了解决状态管理混乱、无法有效同步的问题，统一维护管理应用状态
- 某一状态只有一个可信数据来源（通常命名为 store，指状态容器）
- 操作更新状态方式统一，并且可控（通常以 action 方式提供更新状态的途径）
- 支持将 store 与 React 组件连接，如`react-redux`，`mobx-react`

## 区别

Redux 更多的是遵循 Flux 模式的一种实现，是一个 JavaScript 库，它关注点主要是以下几方面 ∶

- Action∶ 一个 JavaScript 对象，描述动作相关信息，主要包含 type 属性和 payload 属性 ∶
- Reducer∶ 定义应用状态如何响应不同动作（action），如何更新状态;
- Store∶ 管理 action 和 reducer 及其关系的对象，主要提供以下功能 ∶
  - 维护应用状态并支持访问状态(getState());
  - 支持监听 action 的分发，更新状态(dispatch(action));
  - 支持订阅 store 的变更(subscribe(listener));
- 异步流 ∶ 由于 Redux 所有对 store 状态的变更，都应该通过 action 触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入 React 组件中，就需要使用其他框架配合管理异步任务流程，如 redux-thunk，redux-saga 等;

Mobx 是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩 ∶

- Action∶ 定义改变状态的动作函数，包括如何变更状态;
- Store∶ 集中管理模块状态（State）和动作(action)
- Derivation（衍生）∶ 从应用状态中派生而出，且没有任何其他影响的数据

## 对比总结

- redux 将数据保存在单一的 store 中，mobx 将数据保存在分散的多个 store 中
- redux 使用`plain object`保存数据，需要手动处理变化后的操作;mobx 适用`observable`保存数据，数据变化后自动处理响应的操作
- redux 使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx 中的状态是可变的，可以直接对其进行修改
- mobx 相对来说比较简单，在其中有很多的抽象，mobx 更多的使用面向对象的编程思维;redux 会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
- mobx 中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而 redux 提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易
