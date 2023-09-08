---
title: 如何将unknown类型指定为一个更具体的类型？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 29aae8df59fc8dc24348b4560fe7bbe5
description: >-
  *使用typeof进行类型判断（这些缩小类型范围的技术都有助于TS基于控制流程下的类型分析）```tsfunctionunknownToString(value:unknown):string{if(
difficulty: 2
questionNumber: 20
source: >-
  https://fe.ecool.fun/topic-answer/01c20a11-d5c8-4e32-bbb2-a8d3a5da1961?orderBy=updateTime&order=desc&tagId=19
---

- 使用 typeof 进行类型判断（这些缩小类型范围的技术都有助于 TS 基于控制流程下的类型分析）

```ts
function unknownToString(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  return String(value);
}
```

- 对 unknown 类型使用类型断言

要强制编译器信任类型为 unknown 的值为给定类型，则可以使用类型断言：

```ts
const value: unknown = "Hello World";
const foo: string = value; // Error
const bar: string = value as string; // OK
```

断言错了时语法能通过检测，但是运行的时候就会报错了！

```ts
const value: unknown = "Hello World";

const bar: number = value as number; // runtime Error
```
