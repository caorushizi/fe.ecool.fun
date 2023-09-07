---
title: >-
  使用 useState （const [test, setTest] = useState([])）时，为什么连续调用 setTest({...test,
  newValue}) 会出现值的丢失？
pubDatetime: 2023-03-25T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: ee1c8a035bb8437e51fbefb63cc1abd3
description: >-
  useState是异步执行的，也就是执行setTest后，不会立即更新test的结果，多次调用时，出现了值覆盖的情况。如果本次的状态更新依赖于上一次最近的状态更新，那么我们可以给setTest传递一个
difficulty: 3
questionNumber: 19
source: >-
  https://fe.ecool.fun/topic-answer/32a7006f-143a-4490-baf1-c903f98d826b?orderBy=updateTime&order=desc&tagId=13
---

useState 是异步执行的，也就是执行 setTest 后，不会立即更新 test 的结果，多次调用时，出现了值覆盖的情况。

如果本次的状态更新依赖于上一次最近的状态更新，那么我们可以给 setTest 传递一个函数进去，函数的参数即为最后一次更新的状态的值：

```typescript
undefined;
```
