---
title: setState 是同步，还是异步的？
pubDatetime: 2022-10-06T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 340b9959a3b663940af2cabe55b3edc5
description: >-
  PS:2022年10月更新答案react18之前。==========setState在不同情况下可以表现为异步或同步。在Promise的状态更新、js原生事件、setTimeout、setInter
difficulty: 3
questionNumber: 34
source: >-
  https://fe.ecool.fun/topic-answer/36be973b-0351-4a18-b6b8-5e68023e7b96?orderBy=updateTime&order=desc&tagId=13
---

PS: 2022 年 10 月更新答案

# react18 之前。

setState 在不同情况下可以表现为异步或同步。

在 Promise 的状态更新、js 原生事件、setTimeout、setInterval..中是同步的。

在 react 的合成事件中，是异步的。

---

# react18 之后。

setState 都会表现为异步（即批处理）。  
[官方详细说明。](https://github.com/reactwg/react-18/discussions/21)

---

# react17 和 react18 中 setState 在 setTimeout 中的表现

实例代码：

```typescript
undefined;
```

同样代码在 react17 和 react18 中的表现如下：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fdf60adef9d43e6bfa574d616693707~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

预览

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88f168d045374f16b1ebb2cf0955d94d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

预览

---

## react18 之前版本的解释

在 React 中，如果是由 React 引发的事件处理（比如通过 onClick 引发的事件处理），调用 setState 不会同步更新 this.state，除此之外的 setState 调用会同步执行 this.state 。所谓“除此之外”，指的是绕过 React 通过 addEventListener 直接添加的事件处理函数，还有通过 setTimeout/setInterval 产生的异步调用。

原因： 在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中回头再说，而 isBatchingUpdates 默认是 false，也就表示 setState 会同步更新 this.state，但是，有一个函数 batchedUpdates，这个函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会调用这个 batchedUpdates，造成的后果，就是由 React 控制的事件处理过程 setState 不会同步更新 this.state。

注意： setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

综上，setState 只在合成事件和 hook() 中是“异步”的，在 原生事件和 setTimeout 中都是同步的。
