---
title: 使用Promise实现每隔1秒输出1,2,3
pubDatetime: 2021-08-14T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: cb88cf9415d79e7889280602027742f5
description: >-
  这道题比较简单的一种做法是可以用Promise配合着reduce不停的在promise后面叠加.then，请看下面的代码：```javascriptconstarr=[1,2,3]arr.reduce
difficulty: 3
questionNumber: 58
source: >-
  https://fe.ecool.fun/topic-answer/bff513af-f95f-481f-8bda-03f3515d0e08?orderBy=updateTime&order=desc&tagId=26
---

这道题比较简单的一种做法是可以用 Promise 配合着 reduce 不停的在 promise 后面叠加.then，请看下面的代码：

```javascript
const arr = [1, 2, 3];
arr.reduce((p, x) => {
  return p.then(() => {
    return new Promise(r => {
      setTimeout(() => r(console.log(x)), 1000);
    });
  });
}, Promise.resolve());
```

还可以更简单一点写：

```javascript
const arr = [1, 2, 3];
arr.reduce(
  (p, x) =>
    p.then(() => new Promise(r => setTimeout(() => r(console.log(x)), 1000))),
  Promise.resolve()
);
```
