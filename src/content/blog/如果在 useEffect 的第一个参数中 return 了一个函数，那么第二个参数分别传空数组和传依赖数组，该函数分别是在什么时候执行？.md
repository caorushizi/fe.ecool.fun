---
title: 如果在 useEffect 的第一个参数中 return 了一个函数，那么第二个参数分别传空数组和传依赖数组，该函数分别是在什么时候执行？
pubDatetime: 2023-05-29T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: f2db1aaf13c898d55477babc252f0bbf
description: >-
  在React中，当useEffect第一个参数中返回一个函数时，这个函数会在组件卸载时执行。当传递空数组\[\]时，useEffect只会在组件挂载和卸载时调用一次，因此返回的函数也只会在组件卸载时执
difficulty: 1
questionNumber: 5
source: >-
  https://fe.ecool.fun/topic-answer/9917e299-4991-4ceb-bc54-693533bd9659?orderBy=updateTime&order=desc&tagId=13
---

在 React 中，当 useEffect 第一个参数中返回一个函数时，这个函数会在组件卸载时执行。当传递空数组 \[\] 时，useEffect 只会在组件挂载和卸载时调用一次，因此返回的函数也只会在组件卸载时执行一次。

```typescript
undefined;
```

当传递依赖数组时，useEffect 会在组件挂载和依赖项更新时调用，因此返回的函数也会随着组件更新而执行。每次组件重新渲染时都会检查依赖项列表是否有变化，如果有变化则重新执行 useEffect，并在执行新的 useEffect 前先执行上一个 useEffect 返回的函数（如果存在）。

```typescript
undefined;
```

需要注意，这个函数的作用通常是清除 effect 留下的副作用，例如取消定时器、取消订阅等等。在函数中应该清理掉之前设置的任何 effect，在组件卸载时避免不必要的内存泄漏和资源浪费。
