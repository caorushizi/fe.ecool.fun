---
title: 实现下面的firstSingleChar方法
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: d82670013ac1b9ba5689b4f22ecb86c5
description: >-
  ```ts/***@file找出字符串中第一个只出现一次的字符*/functionfirstSingleChar(str:string){//补全此处代码thrownewError('功能待实现');
difficulty: 1
questionNumber: 12
source: >-
  https://fe.ecool.fun/topic-answer/2f9c699c-f7be-4f31-8b1b-5d6271bc075e?orderBy=updateTime&order=desc&tagId=19
---

```ts
/**
 * @file 找出字符串中第一个只出现一次的字符
 */

function firstSingleChar(str: string) {
  // 补全此处代码
  throw new Error("功能待实现");
}

// a 和 b 都出现了两次，只有 c 出现了一次，返回 c
console.log(firstSingleChar("abcba")); // c
// b c d 都出现了一次，返回第一个
console.log(firstSingleChar("aabcdee")); // b
// a 和 b 都出现了多次，没有只出现一次的元素，返回 undefined
console.log(firstSingleChar("aaaabbbb")); // undefined

export default {};
```
