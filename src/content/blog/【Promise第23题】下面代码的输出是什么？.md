---
title: 【Promise第23题】下面代码的输出是什么？
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d97a47fcfb1a143b58c9560c25258b32
description: >-
  ```jsPromise.resolve('1').then(res=>{console.log(res)}).finally(()=>{console.log('finally')})Promise
difficulty: 2.5
questionNumber: 156
source: >-
  https://fe.ecool.fun/topic-answer/e233c823-d125-4abe-b1da-878751a92cd9?orderBy=updateTime&order=desc&tagId=10
---

```js
Promise.resolve("1")
  .then(res => {
    console.log(res);
  })
  .finally(() => {
    console.log("finally");
  });
Promise.resolve("2")
  .finally(() => {
    console.log("finally2");
    return "我是finally2返回的值";
  })
  .then(res => {
    console.log("finally2后面的then函数", res);
  });
```
