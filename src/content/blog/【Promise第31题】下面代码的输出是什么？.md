---
title: 【Promise第31题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 613f89de55910d41d17415c6e1935c24
description: >-
  ```jsasyncfunctionfn(){//returnawait1234//等同于return123}fn().then(res=>console.log(res))```
difficulty: 2.5
questionNumber: 148
source: >-
  https://fe.ecool.fun/topic-answer/ced16bc7-215d-47a2-9bef-7e6ab67f303c?orderBy=updateTime&order=desc&tagId=10
---

```js
async function fn() {
  // return await 1234
  // 等同于
  return 123;
}
fn().then(res => console.log(res));
```
