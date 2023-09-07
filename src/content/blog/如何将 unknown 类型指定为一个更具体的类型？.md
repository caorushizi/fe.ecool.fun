---
title: 如何将 unknown 类型指定为一个更具体的类型？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: f3e4ec67a66f92dc4844df7ccb904f79
description: >-
  *使用typeof进行类型判断（这些缩小类型范围的技术都有助于TS基于控制流程下的类型分析）```typescriptundefined```*对unknown类型使用类型断言要强制编译器信任类型为u
difficulty: 2
questionNumber: 20
source: >-
  https://fe.ecool.fun/topic-answer/01c20a11-d5c8-4e32-bbb2-a8d3a5da1961?orderBy=updateTime&order=desc&tagId=19
---

- 使用 typeof 进行类型判断（这些缩小类型范围的技术都有助于 TS 基于控制流程下的类型分析）

```typescript
undefined;
```

- 对 unknown 类型使用类型断言

要强制编译器信任类型为 unknown 的值为给定类型，则可以使用类型断言：

```typescript
undefined;
```

断言错了时语法能通过检测，但是运行的时候就会报错了！

```typescript
undefined;
```
