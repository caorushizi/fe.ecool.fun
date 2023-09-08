---
title: 实现useUpdate方法，调用时强制组件重新渲染
pubDatetime: 2023-05-02T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: cd744433055b042f7cec31d4fb4aac50
description: >-
  可以利用`useReducer`每次调用`updateReducer`方法，来达到强制组件重新渲染的目的。```jsimport{useReducer}from'react';constupdateR
difficulty: 2
questionNumber: 10
source: >-
  https://fe.ecool.fun/topic-answer/bc3c6285-2523-4d07-94c4-9dc539b63ece?orderBy=updateTime&order=desc&tagId=13
---

可以利用 `useReducer` 每次调用 `updateReducer` 方法，来达到强制组件重新渲染的目的。

```js
import { useReducer } from "react";

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export default function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0);

  return update;
}
```
