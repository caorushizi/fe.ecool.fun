---
title: 使用TS实现一个判断传入参数是否是数组类型的方法
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 7adc691afb12dc4449ada4328c16e5cf
description: >-
  unknown用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，参数总归会有个值，根据这个值的类型进行不同的处理，这里使用unknown替代any则会更加类型安全。```typescri
difficulty: 2
questionNumber: 22
source: >-
  https://fe.ecool.fun/topic-answer/2e0cedc6-3c76-438a-8677-27b8ea9c0e61?orderBy=updateTime&order=desc&tagId=26
---

unknown 用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，参数总归会有个值，根据这个值的类型进行不同的处理，这里使用 unknown 替代 any 则会更加类型安全。

```typescript
function isArray(x: unknown): boolean {
  return Array.isArray(x);
}
```
