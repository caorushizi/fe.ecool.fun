---
title: React 的事件代理机制和原生事件绑定混用会有什么问题？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 050e96fa4f27300a1ead1ca4a3742780
description: >-
  我们在平时的开发中应该尽可能的避免React的事件代理机制和原生事件绑定混用。React的合成事件层，并没有将事件直接绑定到DOM元素上，所以使用e.stopPropagation()来阻止原生DOM
difficulty: 2
questionNumber: 88
source: >-
  https://fe.ecool.fun/topic-answer/a9a357ca-9ee4-404d-a48a-49ba46f78166?orderBy=updateTime&order=desc&tagId=13
---

我们在平时的开发中应该尽可能的避免 React 的事件代理机制和原生事件绑定混用。

React 的合成事件层，并没有将事件直接绑定到 DOM 元素上，所以使用 e.stopPropagation()  来阻止原生 DOM 的冒泡的行为是不行的。阻止 React 事件冒泡的行为只能用于 React 合成事件系统，但是 在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播。
