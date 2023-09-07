---
title: useEffect 与 useLayoutEffect 有什么区别？
pubDatetime: 2022-01-16T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 371ae91ad7192eb11a54bbba2261cd02
description: >-
  共同点---*运用效果：useEffect与useLayoutEffect两者都是用于处理副作用，这些副作用包括改变DOM、设置订阅、操作定时器等。在函数组件内部操作副作用是不被允许的，所以需要使用这
difficulty: 2.5
questionNumber: 49
source: >-
  https://fe.ecool.fun/topic-answer/8d97f05b-37a5-4a58-8dff-0574918ccd67?orderBy=updateTime&order=desc&tagId=13
---

## 共同点

- 运用效果： useEffect 与 useLayoutEffect 两者都是用于处理副作用，这些副作用包括改变 DOM、设置订阅、操作定时器等。在函数组件内部操作副作用是不被允许的，所以需要使用这两个函数去处理。
- 使用方式： useEffect 与 useLayoutEffect 两者底层的函数签名是完全一致的，都是调用的 mountEffectImpl 方法，在使用上也没什么差异，基本可以直接替换。

## 不同点

- 使用场景： useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景；而 useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。也正因为是同步处理，所以需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。
- 使用效果： useEffect 是按照顺序执行代码的，改变屏幕像素之后执行（先渲染，后改变 DOM），当改变屏幕内容时可能会产生闪烁；useLayoutEffect 是改变屏幕像素之前就执行了（会推迟页面显示的事件，先改变 DOM 后渲染），不会产生闪烁。useLayoutEffect 总是比 useEffect 先执行。

在未来的趋势上，两个 API 是会长期共存的，暂时没有删减合并的计划，需要开发者根据场景去自行选择。React 团队的建议非常实用，如果实在分不清，先用 useEffect，一般问题不大；如果页面有异常，再直接替换为 useLayoutEffect 即可。
