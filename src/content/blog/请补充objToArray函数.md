---
title: 请补充objToArray函数
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 5acd8035214356c573cbee93aa8650b1
description: >-
  ```typescript/***@fileobjToArray**将对象按照要求转为数组*注意console示例运行结果*/typeObj=Record<string,string>;interfa
difficulty: 1
questionNumber: 20
source: >-
  https://fe.ecool.fun/topic-answer/6cfd4286-3c93-45a3-9b63-a67ab7ddd6e6?orderBy=updateTime&order=desc&tagId=26
---

```typescript
/**
 * @file objToArray
 *
 * 将对象按照要求转为数组
 * 注意console示例运行结果
 */
type Obj = Record<string, string>;
interface FormatItem {
  key: string;
  op: string;
  value: string;
}

function objToArray(obj: Record<string, Obj>): FormatItem[] {
  // 补全此处代码
  throw new Error("功能待实现");
}

console.log(
  objToArray({
    key1: {
      op1: "value1",
    },
    key2: {
      op2: "value2",
    },
  })
);
// result示例
// [
//     {key: 'key1', op: 'op1', value: 'value1'},
//     {key: 'key2', op: 'op2', value: 'value2'}
// ]

export default {};
```
