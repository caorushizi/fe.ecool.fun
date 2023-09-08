---
title: Redux和Vuex有什么区别，它们有什么共同思想吗？
pubDatetime: 2022-02-27T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 5a1c2115979e5123014c2b66fff04d90
description: >-
  Redux和Vuex区别--------------###相同点*state共享数据*流程一致：定义全局state，触发，修改state*原理相似，通过全局注入store。###不同点*从实现原理上来
difficulty: 2.5
questionNumber: 45
source: >-
  https://fe.ecool.fun/topic-answer/48ea6174-729d-4d41-ab63-eeaa3781068b?orderBy=updateTime&order=desc&tagId=13
---

## Redux 和 Vuex 区别

### 相同点

- state 共享数据
- 流程一致：定义全局 state，触发，修改 state
- 原理相似，通过全局注入 store。

### 不同点

- 从实现原理上来说：
  - Redux 使用的是不可变数据，而 Vuex 的数据是可变的。Redux 每次都是用新的 state 替换旧的 state，而 Vuex 是直接修改
  - Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而 Vuex 其实和 Vue 的原理一样，是通过 getter/setter 来比较的
- 从表现层来说：
  - vuex 定义了 state、getter、mutation、action 四个对象；redux 定义了 state、reducer、action。
  - vuex 中 state 统一存放，方便理解；reduxstate 依赖所有 reducer 的初始值
  - vuex 有 getter,目的是快捷得到 state；redux 没有这层，react-redux mapStateToProps 参数做了这个工作。
  - vuex 中 mutation 只是单纯赋值(很浅的一层)；redux 中 reducer 只是单纯设置新 state(很浅的一层)。他俩作用类似，但书写方式不同
  - vuex 中 action 有较为复杂的异步 ajax 请求；redux 中 action 中可简单可复杂,简单就直接发送数据对象（{type:xxx, your-data}）,复杂需要调用异步 ajax（依赖 redux-thunk 插件）。
  - vuex 触发方式有两种 commit 同步和 dispatch 异步；redux 同步和异步都使用 dispatch

通俗点理解就是，vuex 弱化 dispatch，通过 commit 进行 store 状态的一次更变；取消了 action 概念，不必传入特定的 action 形式进行指定变更；弱化 reducer，基于 commit 参数直接对数据进行转变，使得框架更加简易;

## 共同思想

- 单一的数据源
- 变化可以预测

本质上 ∶ redux 与 vuex 都是对 mvvm 思想的服务，将数据从视图中抽离的一种方案。
