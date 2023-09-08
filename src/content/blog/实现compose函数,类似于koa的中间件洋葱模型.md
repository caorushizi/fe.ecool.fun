---
title: 实现compose函数,类似于koa的中间件洋葱模型
pubDatetime: 2023-06-03T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 464679277b0bb448800f70b9a287567a
description: >-
  ```js//题目需求letmiddleware=[]middleware.push((next)=>{console.log(1)next()console.log(1.1)})middleware
difficulty: 3
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/ac91c80a-17f4-4ede-931e-2f458660e3e0?orderBy=updateTime&order=desc&tagId=26
---

```js
// 题目需求
let middleware = [];
middleware.push(next => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push(next => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push(next => {
  console.log(3);
  next();
  console.log(3.1);
});

let fn = compose(middleware);
fn();

/*
1
2
3
3.1
2.1
1.1
*/

//实现compose函数
function compose(middlewares) {}
```
