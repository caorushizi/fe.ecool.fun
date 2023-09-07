---
title: bind、call、apply 有什么区别？如何实现一个bind?
pubDatetime: 2023-03-04T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 9540d808ef37bf1744f79fa414ba5229
description: >-
  ![](https://static.vue-js.com/a900e460-7be4-11eb-ab90-d9ae814b240d.png)预览一、作用----`call`、`apply`、`bin
difficulty: 2.5
questionNumber: 25
source: >-
  https://fe.ecool.fun/topic-answer/8d391a9c-0573-4edd-bd5d-84b9af70bad5?orderBy=updateTime&order=desc&tagId=26
---

![](https://static.vue-js.com/a900e460-7be4-11eb-ab90-d9ae814b240d.png)

预览

## 一、作用

`call` 、`apply` 、`bind` 作用是改变函数执行时的上下文，简而言之就是改变函数运行时的`this`指向

那么什么情况下需要改变`this`的指向呢？下面举个例子

```typescript
undefined;
```

从上面可以看到，正常情况`say`方法输出`martin`

但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`luck`

我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了

```typescript
undefined;
```

## 二、区别

下面再来看看`apply`、`call`、`bind`的使用

### apply

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```typescript
undefined;
```

当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```typescript
undefined;
```

### call

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```typescript
undefined;
```

同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```typescript
undefined;
```

### bind

bind 方法和 call 很相似，第一参数也是`this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数

```typescript
undefined;
```

### 小结

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind` 是返回绑定 this 之后的函数，`apply` 、`call` 则是立即执行

## 三、实现

实现`bind`的步骤，我们可以分解成为三部分：

- 修改`this`指向
- 动态传递参数

```typescript
undefined;
```

- 兼容`new`关键字

整体实现代码如下：

```typescript
undefined;
```
