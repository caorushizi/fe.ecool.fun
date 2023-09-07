---
title: async、await 实现原理
pubDatetime: 2022-04-13T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 87676627558e551647cda98381ed819c
description: >-
  JavaScript异步编程回顾=================由于JavaScript是单线程执行模型，因此必须支持异步编程才能提高运行效率。异步编程的语法目标是让异步过程写起来像同步过程。1\.
difficulty: 4
questionNumber: 113
source: >-
  https://fe.ecool.fun/topic-answer/29821d8e-dc41-4581-91fe-9fde7658a559?orderBy=updateTime&order=desc&tagId=10
---

# JavaScript 异步编程回顾

由于 JavaScript 是单线程执行模型，因此必须支持异步编程才能提高运行效率。异步编程的语法目标是让异步过程写起来像同步过程。

## 1\. 回调函数

回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。

```typescript
undefined;
```

回调函数最大的问题是容易形成回调地狱，即多个回调函数嵌套，降低代码可读性，增加逻辑的复杂性，容易出错。

```typescript
undefined;
```

## 2\. Promise

为解决回调函数的不足，社区创造出 Promise。

```typescript
undefined;
```

简单的 Promise 实现，窥探下本质

Promise 实际上是利用编程技巧将回调函数的横向加载，改成纵向加载，达到链式调用的效果，避免回调地狱。最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆 then，原来的语义变得很不清楚。

## 3\. async、await

为了解决 Promise 的问题，async、await 在 ES7 中被提了出来，是目前为止最好的解决方案

```typescript
undefined;
```

async、await 函数写起来跟同步函数一样，条件是需要接收 Promise 或原始类型的值。异步编程的最终目标是转换成人类最容易理解的形式。

# async、await

分析 async、await 实现原理之前，先介绍下预备知识

## 1\. generator

generator 函数是协程在 ES6 的实现。协程简单来说就是多个线程互相协作，完成异步任务。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fca57a6683b546f2bfe987c016acb19b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

整个 generator 函数就是一个封装的异步任务，异步操作需要暂停的地方，都用 yield 语句注明。generator 函数的执行方法如下：

```typescript
undefined;
```

- `gen()` 不会立即执行，而是一上来就暂停，返回一个 `Iterator` 对象（具体可以参考 [Iterator 遍历器](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwangfupeng1988%2Fjs-async-tutorial%2Fblob%2Fmaster%2Fpart4-generator%2F02-iterator.md "https://github.com/wangfupeng1988/js-async-tutorial/blob/master/part4-generator/02-iterator.md") ）
- 每次 `g.next()` 都会打破暂停状态去执行，直到遇到下一个 `yield` 或者 `return`
- 遇到 `yield` 时，会执行 `yield` 后面的表达式，并返回执行之后的值，然后再次进入暂停状态，此时 `done: false` 。
- `next` 函数可以接受参数，作为上个阶段异步任务的返回结果，被函数体内的变量接收
- 遇到 `return` 时，会返回值，执行结束，即 `done: true`
- 每次 `g.next()` 的返回值永远都是 `{value: ... , done: ...}` 的形式

## 2\. thunk 函数

JavaScript 中的 thunk 函数（译为转换程序）简单来说就是把带有回调函数的多参数函数转换成只接收回调函数的单参数版本

```typescript
undefined;
```

单纯的 thunk 函数并没有很大的用处， 大牛们想到了和 generator 结合：

```typescript
undefined;
```

thunk 函数的真正作用是统一多参数函数的调用方式，在 next 调用时把控制权交还给 generator，使 generator 函数可以使用递归方式自启动流程

```typescript
undefined;
```

有了自启动的加持之后，generator 函数内就可以写"同步"的代码了。generator 函数也可以与 Promise 结合：

```typescript
undefined;
```

generator 可以暂停执行，很容易让它和异步操作产生联系，因为我们在处理异步操作时，在等待的时候可以暂停当前任务，把程序控制权交还给其他程序，当异步任务有返回时，在回调中再把控制权交还给之前的任务。generator 实际上并没有改变 JavaScript 单线程、使用回调处理异步任务的本质。

## 3\. co 函数库

每次执行 generator 函数时自己写启动器比较麻烦。 [co 函数库](https://github.com/tj/co) 是一个 generator 函数的自启动执行器，使用条件是 generator 函数的 yield 命令后面，只能是 thunk 函数或 Promise 对象，co 函数执行完返回一个 Promise 对象。

```typescript
undefined;
```

co 函数库的源码实现其实就是把上面两种情况做了综合:

```typescript
undefined;
```

## 4\. 理解 async、await

一句话，async、await 是 co 库的官方实现。也可以看作自带启动器的 generator 函数的语法糖。不同的是，async、await 只支持 Promise 和原始类型的值，不支持 thunk 函数。

```typescript
undefined;
```

# 总结

不论以上哪种方式，都没有改变 JavaScript 单线程、使用回调处理异步任务的本质。人类总是追求最简单易于理解的编程方式。
