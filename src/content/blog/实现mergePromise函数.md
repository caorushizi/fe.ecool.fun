---
title: 实现mergePromise函数
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: e63fccc170893e2e65f376fe1b007351
description: >-
  实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。```jsconsttime=(timer)=>{returnnewPromise(resolv
difficulty: 4
questionNumber: 48
source: >-
  https://fe.ecool.fun/topic-answer/9f0dbfc0-bd61-4956-8093-d604ac401983?orderBy=updateTime&order=desc&tagId=26
---

实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。

```js
const time = timer => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise() {
  // 在这里写代码
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```
