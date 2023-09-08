---
title: 请实现下面的treePath方法
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 3191f586e2bfec4a5245e43f8e64d021
description: >-
  ```ts/***@file二叉树所有路径*/typeTree={value:number;left?:Tree;right?:Tree;}consttree:Tree={value:1,left:{
difficulty: 1
questionNumber: 7
source: >-
  https://fe.ecool.fun/topic-answer/0da5c58e-1299-477f-95f1-9e05ebf8aa2e?orderBy=updateTime&order=desc&tagId=19
---

```ts
/**
 * @file 二叉树所有路径
 */

type Tree = {
  value: number;
  left?: Tree;
  right?: Tree;
};
const tree: Tree = {
  value: 1,
  left: {
    value: 2,
    right: { value: 5 },
  },
  right: { value: 3 },
};
function treePath(root: Tree): string[] {
  // 补全此处代码
  throw new Error("功能待实现");
}
console.log(treePath(tree)); // [ '1->2->5', '1->3' ]

export default {};
```
