---
title: 虚拟DOM一定更快吗？
pubDatetime: 2021-08-08T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 801c4e4343a5fe59431cd2d79b8a44e7
description: >-
  虚拟DOM／domDiff-------------我们常说的虚拟DOM是通过JS对象模拟出来的DOM节点,domDiff是通过特定算法计算出来一次操作所带来的DOM变化。react和vue中都使用了
difficulty: 3
questionNumber: 35
source: >-
  https://fe.ecool.fun/topic-answer/a19c5526-dc2d-43ac-bda7-c4b2948839a4?orderBy=updateTime&order=desc&tagId=14
---

## 虚拟 DOM／domDiff

我们常说的虚拟 DOM 是通过 JS 对象模拟出来的 DOM 节点,domDiff 是通过特定算法计算出来一次操作所带来的 DOM 变化。react 和 vue 中都使用了虚拟 DOM，我们借着 react 聊聊虚拟 DOM。

react 中涉及到虚拟 DOM 的代码主要分为以下三部分，其中核心是第二步的 domDiff 算法：

- 把 render 中的 JSX(或者 createElement 这个 API)转化成虚拟 DOM
- 状态或属性改变后重新计算虚拟 DOM 并生成一个补丁对象(domDiff)
- 通过这个补丁对象更新视图中的 DOM 节点

## 虚拟 DOM 不一定更快

干前端的都知道 DOM 操作是性能杀手，因为操作 DOM 会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少 DOM 的操作要划算的多。

但是，“使用虚拟 DOM 会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作 DOM 更快。使用虚拟 DOM 无非白白增加了计算量和代码量。即使是复杂情况，浏览器也会对我们的 DOM 操作进行优化，大部分浏览器会根据我们操作的时间和次数进行批量处理，所以直接操作 DOM 也未必很慢。

那么为什么现在的框架都使用虚拟 DOM 呢？因为使用虚拟 DOM 可以提高代码的性能下限，并极大的优化大量操作 DOM 时产生的性能损耗。同时这些框架也保证了，即使在少数虚拟 DOM 不太给力的场景下，性能也在我们接受的范围内。

而且，我们之所以喜欢 react、vue 等使用了虚拟 DOM 框架，不光是因为他们快，还有很多其他更重要的原因。例如 react 对函数式编程的友好，vue 优秀的开发体验等，目前社区也有好多比较这两个框架并打口水战的，我觉着还是在两个都懂的情况下多探究一下原理更有意义一些。
