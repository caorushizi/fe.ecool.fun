---
title: 【Promise第11题】下面代码的输出是什么？
pubDatetime: 2022-01-09T23:01:15.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: d9a36bb7-972c-4afb-abb6-fcbaa30612cf
description: >-
  const promise1 = new Promise((resolve, reject) => { setTimeout(() => {
  resolve('success') }, 1000) }) const promise2 = promise1.then(() => { throw
  new Error('error!!!') }) console.log('promise1', prom
difficulty: 3
questionNumber: 1603
source: https://fe.ecool.fun/topic/d9a36bb7-972c-4afb-abb6-fcbaa30612cf
---

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);
```

---

## 过程分析

- 从上至下，先执行第一个 new Promise 中的函数，碰到 setTimeout 将它加入下一个宏任务列表
- 跳出 new Promise，碰到 promise1.then 这个微任务，但其状态还是为 pending，这里理解为先不执行
- promise2 是一个新的状态为 pending 的 Promise
- 执行同步代码 console.log('promise1')，且打印出的 promise1 的状态为 pending
- 执行同步代码 console.log('promise2')，且打印出的 promise2 的状态为 pending
- 碰到第二个定时器，将其放入下一个宏任务列表
- 第一轮宏任务执行结束，并且没有微任务需要执行，因此执行第二轮宏任务
- 先执行第一个定时器里的内容，将 promise1 的状态改为 resolved 且保存结果并将之前的 promise1.then 推入微任务队列
- 该定时器中没有其它的同步代码可执行，因此执行本轮的微任务队列，也就是 promise1.then，它抛出了一个错误，且将 promise2 的状态设置为了 rejected
- 第一个定时器执行完毕，开始执行第二个定时器中的内容
- 打印出'promise1'，且此时 promise1 的状态为 resolved
- 打印出'promise2'，且此时 promise2 的状态为 rejected

## 结果

```
'promise1' Promise{<pending>}
'promise2' Promise{<pending>}
test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
'promise1' Promise{<resolved>: "success"}
'promise2' Promise{<rejected>: Error: error!!!}
```
