---
title: 请实现下面的sum方法
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: b15a364732cadaa18570f84dfaf981e0
description: >-
  ```ts/***@file假设加法是一个异步过程，如何计算多个数组之和？*/functionsleep(ms:number){returnnewPromise(r=>{setTimeout(()=>
difficulty: 1
questionNumber: 10
source: >-
  https://fe.ecool.fun/topic-answer/b773eb98-1739-43a4-b0fc-4c0deed6cb13?orderBy=updateTime&order=desc&tagId=19
---

```ts
/**
 * @file 假设加法是一个异步过程，如何计算多个数组之和？
 */
function sleep(ms: number) {
  return new Promise(r => {
    setTimeout(() => {
      r(undefined);
    }, ms);
  });
}

async function asyncAdd(a: number, b: number) {
  await sleep(1000);
  return a + b;
}

function sum(arr: number[]): Promise<number> {
  // 补全这里代码，涉及 arr 中两数求和只能使用 asyncAdd，禁止使用加号
  throw new Error("功能待实现");
}

console.time("a");
sum([1, 2, 3, 4, 5, 6, 7, 8]).then(v => {
  console.log(v); // 36
  console.timeEnd("a"); // a: <耗时>
});

export default {};
```
