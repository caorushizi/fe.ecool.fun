---
title: Redux中的connect有什么作用？
pubDatetime: 2022-01-16T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 2f4d4aa2d3181c2b97976cfedd4e05f5
description: >-
  connect负责连接React和Redux获取state-------connect通过context获取Provider中的store，通过store.getState()获取整个storetre
difficulty: 3
questionNumber: 52
source: >-
  https://fe.ecool.fun/topic-answer/2476ee50-e484-4416-88a7-4c506f84de9a?orderBy=updateTime&order=desc&tagId=13
---

connect 负责连接 React 和 Redux

## 获取 state

connect 通过 context 获取 Provider 中的 store，通过 store.getState() 获取整个 store tree 上所有 state

## 包装原组件

将 state 和 action 通过 props 的方式传入到原组件内部 `wrapWithConnect` 返回—个 `ReactComponent` 对象 Connect，Connect 重新 render 外部传入的原组件 `WrappedComponent` ，并把 connect 中传入的 `mapStateToProps`，`mapDispatchToProps`与组件上原有的 props 合并后，通过属性的方式传给 `WrappedComponent`

## 监听 store tree 变化

connect 缓存了`store tree`中 state 的状态，通过当前 state 状态 和变更前 state 状态进行比较，从而确定是否调用 `this.setState()`方法触发 Connect 及其子组件的重新渲染
