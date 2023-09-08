---
title: 使用ts实现一个判断入参是否是数组类型的方法？
pubDatetime: 2021-08-22T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: d308671100b2dfe8c3ec218a26c3b46b
description: >-
  unknown用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，入参总归会有个值，根据这个值的类型进行不同的处理，这里使用unknown替代any则会更加类型安全。```tsfuncti
difficulty: 2
questionNumber: 23
source: >-
  https://fe.ecool.fun/topic-answer/01797b51-cfe0-483c-a937-b8e430d78cee?orderBy=updateTime&order=desc&tagId=19
---

unknown 用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，入参总归会有个值，根据这个值的类型进行不同的处理，这里使用 unknown 替代 any 则会更加类型安全。

```ts
function isArray(x: unknown): boolean {
  if (Array.isArray(x)) {
    return true;
  }
  return false;
}
```
