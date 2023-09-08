---
title: 请实现下面的sleep方法
pubDatetime: 2023-05-31T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 4faa93b5daa73bca9f40caaaab46dc82
description: >-
  ```ts/***@file返回一个Promise，并在ms毫秒后Promise变为完成状态*/exportfunctionsleep(ms:number):Promise<undefined>{//
difficulty: 3
questionNumber: 3
source: >-
  https://fe.ecool.fun/topic-answer/5bd5fdd4-706a-49dd-9cbe-1f2a05779ffe?orderBy=updateTime&order=desc&tagId=19
---

```ts
/**
 * @file 返回一个 Promise，并在 ms 毫秒后 Promise 变为完成状态
 */

export function sleep(ms: number): Promise<undefined> {
  // 补全此处代码
  throw new Error("功能待实现");
}

async function main() {
  console.log("a");
  await sleep(1000);
  console.log("b");
  await sleep(1000);
  console.log("c");
}
main();

export default {};
```
