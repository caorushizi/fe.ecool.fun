---
title: ReactHooks带来了什么便利？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: a8bc0cdacb2132c371db6483f94ac41a
description: >-
  在没有hooks之前，我们使用函数定义的组件中，不能使用React的state、各种生命周期钩子类组件的特性。在React16.8之后，推出了新功能：Hooks，通过hooks我们可以再函数定义的组件
difficulty: 3
questionNumber: 80
source: >-
  https://fe.ecool.fun/topic-answer/37ab3a5b-b59d-433c-8db9-b6a7444337c3?orderBy=updateTime&order=desc&tagId=13
---

在没有 hooks 之前，我们使用函数定义的组件中，不能使用 React 的 state、各种生命周期钩子类组件的特性。在 React 16.8 之后，推出了新功能： Hooks，通过 hooks 我们可以再函数定义的组件中使用类组件的特性。

好处:

- 跨组件复用: 其实 render props / HOC 也是为了复用，相比于它们，Hooks 作为官方的底层 API，最为轻量，而且改造成本小，不会影响原来的组件层次结构和传说中的嵌套地狱；
- 相比而言，类组件的实现更为复杂
  - 不同的生命周期会使逻辑变得分散且混乱，不易维护和管理；
  - 时刻需要关注 this 的指向问题；
  - 代码复用代价高，高阶组件的使用经常会使整个组件树变得臃肿；
- 状态与 UI 隔离: 正是由于 Hooks 的特性，状态逻辑会变成更小的粒度，并且极容易被抽象成一个自定义 Hooks，组件中的状态和 UI 变得更为清晰和隔离。

**注意**:

- 避免在 循环/条件判断/嵌套函数 中调用 hooks，保证调用顺序的稳定；
- 不能在 useEffect 中使用 useState，React 会报错提示；
- 类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存
