---
title: 实现一个对象的flatten方法
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: c1c2fb5c45e381b8a76d6df2a66ebab7
description: >-
  实现以下转换：```jsconstobj={a:{b:1,c:2,d:{e:5}},b:[1,3,{a:2,b:3}],c:3}```flatten(obj){}结果返回如下```js//{//'a.
difficulty: 3
questionNumber: 56
source: >-
  https://fe.ecool.fun/topic-answer/aea31e8b-4929-4a02-8fe5-8eb27fd663bf?orderBy=updateTime&order=desc&tagId=26
---

实现以下转换：

```js
const obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 5,
    },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};
```

flatten(obj){} 结果返回如下

```js
// {
//   'a.b': 1,
//   'a.c': 2,
//   'a.d.e': 5,
//   'b[0]': 1,
//   'b[1]': 3,
//   'b[2].a': 2,
//   'b[2].b': 3
//    c: 3
// }
```
