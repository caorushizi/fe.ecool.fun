---
title: 列举几个常见的Hook?
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: c3234e46b781d77fcfad07f6e4736467
description: >-
  *状态钩子(useState):用于定义组件的State，类似类定义中this.state的功能*生命周期钩子(useEffect):类定义中有许多生命周期函数，而在ReactHooks中也提供了一个
difficulty: 2
questionNumber: 79
source: >-
  https://fe.ecool.fun/topic-answer/74f0cb29-9b52-40e7-adba-571d398fa6ad?orderBy=updateTime&order=desc&tagId=13
---

- 状态钩子 (useState): 用于定义组件的 State，类似类定义中 this.state 的功能
- 生命周期钩子 (useEffect): 类定义中有许多生命周期函数，而在 React Hooks 中也提供了一个相应的函数 (useEffect)，这里可以看做 componentDidMount、componentDidUpdate 和 componentWillUnmount 的结合。
- useContext: 获取 context 对象
- useCallback: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；
- useMemo: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；
- useRef: 获取组件的真实节点；
