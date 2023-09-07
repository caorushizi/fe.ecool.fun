---
title: 在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState 会发生什么？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 5fdebdc91b3c5e19191fb254abbc983d
description: >-
  当调用setState的时候，实际上会将新的state合并到状态更新队列中，并对partialState以及\_pendingStateQueue更新队列进行合并操作。最终通过enqueueUpdat
difficulty: 2
questionNumber: 84
source: >-
  https://fe.ecool.fun/topic-answer/e203426f-23a1-4872-8ff7-1d0d27e57a81?orderBy=updateTime&order=desc&tagId=13
---

当调用 setState 的时候，实际上会将新的 state 合并到状态更新队列中，并对 partialState 以及 \_pendingStateQueue 更新队列进行合并操作。最终通过 enqueueUpdate 执行 state 更新。

如果在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState，会使得 state 队列（\_pendingStateQueue）不为 null，从而调用 updateComponent 方法，updateComponent 中会继续调用 shouldComponentUpdate 和 componentWillUpdate，因此造成死循环。
