---
title: Vue中的$nextTick有什么作用？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 224134af5980ac20280b82f15c36c4ea
description: >-
  ![](https://static.vue-js.com/76484d30-3aba-11eb-85f6-6fac77c0c9b3.png)预览一、NextTick是什么-------------官
difficulty: 2
questionNumber: 52
source: >-
  https://fe.ecool.fun/topic-answer/a0c75651-7e44-437d-9f1f-38775698091b?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/76484d30-3aba-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、NextTick 是什么

官方对其的定义

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

什么意思呢？

我们可以理解成，`Vue` 在更新 `DOM` 时是异步执行的。当数据发生变化，`Vue`将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

举例一下

`Html`结构

```typescript
undefined;
```

构建一个`vue`实例

```typescript
undefined;
```

修改`message`

```typescript
undefined;
```

这时候想获取页面最新的`DOM`节点，却发现获取到的是旧值

```typescript
undefined;
```

这是因为`message`数据在发现变化的时候，`vue`并不会立刻去更新`Dom`，而是将修改数据的操作放在了一个异步操作队列中

如果我们一直修改相同数据，异步操作队列还会进行去重

等待同一事件循环中的所有数据变化完成之后，会将队列中的事件拿来进行处理，进行`DOM`的更新

#### 为什么要有 nexttick

举个例子

```typescript
undefined;
```

如果没有 `nextTick` 更新机制，那么 `num` 每次更新值都会触发视图更新(上面这段代码也就是会更新 10 万次视图)，有了`nextTick`机制，只需要更新一次，所以`nextTick`本质是一种优化策略

## 二、使用场景

如果想要在修改数据后立刻得到更新后的`DOM`结构，可以使用`Vue.nextTick()`

第一个参数为：回调函数（可以获取最近的`DOM`结构）

第二个参数为：执行函数上下文

```typescript
undefined;
```

组件内使用 `vm.$nextTick()` 实例方法只需要通过`this.$nextTick()`，并且回调函数中的 `this` 将自动绑定到当前的 `Vue` 实例上

```typescript
undefined;
```

`$nextTick()` 会返回一个 `Promise` 对象，可以是用`async/await`完成相同作用的事情

```typescript
undefined;
```

## 三、实现原理

源码位置：`/src/core/util/next-tick.js`

`callbacks`也就是异步操作队列

`callbacks`新增回调函数后又执行了`timerFunc`函数，`pending`是用来标识同一个时间只能执行一次

```typescript
undefined;
```

`timerFunc`函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：

`Promise.then`、`MutationObserver`、`setImmediate`、`setTimeout`

通过上面任意一种方法，进行降级操作

```typescript
undefined;
```

无论是微任务还是宏任务，都会放到`flushCallbacks`使用

这里将`callbacks`里面的函数复制一份，同时`callbacks`置空

依次执行`callbacks`里面的函数

```typescript
undefined;
```

**小结：**

1.  把回调函数放入 callbacks 等待执行
2.  将执行函数放到微任务或者宏任务中
3.  事件循环到了微任务或者宏任务，执行函数依次执行 callbacks 中的回调
