---
title: 你是怎么理解ES6中 Promise的？使用场景有哪些？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 5ed957710b78944555b173c148f4fa75
description: >-
  ![](https://static.vue-js.com/f033b160-5811-11eb-85f6-6fac77c0c9b3.png)预览一、介绍----`Promise`，译为承诺，是异步编
difficulty: 3
questionNumber: 30
source: >-
  https://fe.ecool.fun/topic-answer/34d5eef9-20cb-4aac-b34b-87ab513456a7?orderBy=updateTime&order=desc&tagId=24
---

![](https://static.vue-js.com/f033b160-5811-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、介绍

`Promise` ，译为承诺，是异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大

在以往我们如果处理多层异步操作，我们往往会像下面那样编写我们的代码

```typescript
undefined;
```

阅读上面代码，是不是很难受，上述形成了经典的回调地狱

现在通过`Promise`的改写上面的代码

```typescript
undefined;
```

瞬间感受到`promise`解决异步操作的优点：

- 链式操作减低了编码难度
- 代码可读性明显增强

下面我们正式来认识`promise`：

### 状态

`promise`对象仅有三种状态

- `pending`（进行中）
- `fulfilled`（已成功）
- `rejected`（已失败）

### 特点

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态改变（从`pending`变为`fulfilled`和从`pending`变为`rejected`），就不会再变，任何时候都可以得到这个结果

### 流程

认真阅读下图，我们能够轻松了解`promise`整个流程

![](https://static.vue-js.com/1b02ae90-58a9-11eb-85f6-6fac77c0c9b3.png)

预览

## 二、用法

`Promise`对象是一个构造函数，用来生成`Promise`实例

```typescript
undefined;
```

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`

- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”

### 实例方法

`Promise`构建出来的实例存在以下方法：

- then()
- then()
- catch()
- finally()

#### then()

`then`是实例状态发生改变时的回调函数，第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数

`then`方法返回的是一个新的`Promise`实例，也就是`promise`能链式书写的原因

```typescript
undefined;
```

#### catch

`catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数

```typescript
undefined;
```

`Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

```typescript
undefined;
```

一般来说，使用`catch`方法代替`then()`第二个参数

`Promise` 对象抛出的错误不会传递到外层代码，即不会有任何反应

```typescript
undefined;
```

浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程

`catch()`方法之中，还能再抛出错误，通过后面`catch`方法捕获到

#### finally()

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

```typescript
undefined;
```

### 构造函数方法

`Promise`构造函数存在以下方法：

- all()
- race()
- allSettled()
- resolve()
- reject()
- try()

### all()

`Promise.all()`方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例

```typescript
undefined;
```

接受一个数组（迭代对象）作为参数，数组成员都应为`Promise`实例

实例`p`的状态由`p1`、`p2`、`p3`决定，分为两种：

- 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数
- 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数

注意，如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法

```typescript
undefined;
```

如果`p2`没有自己的`catch`方法，就会调用`Promise.all()`的`catch`方法

```typescript
undefined;
```

### race()

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例

```typescript
undefined;
```

只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变

率先改变的 Promise 实例的返回值则传递给`p`的回调函数

```typescript
undefined;
```

### allSettled()

`Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例

只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束

```typescript
undefined;
```

#### resolve()

将现有对象转为 `Promise` 对象

```typescript
undefined;
```

参数可以分成四种情况，分别如下：

- 参数是一个 Promise 实例，`promise.resolve`将不做任何修改、原封不动地返回这个实例
- 参数是一个`thenable`对象，`promise.resolve`会将这个对象转为 `Promise` 对象，然后就立即执行`thenable`对象的`then()`方法
- 参数不是具有`then()`方法的对象，或根本就不是对象，`Promise.resolve()`会返回一个新的 Promise 对象，状态为`resolved`
- 没有参数时，直接返回一个`resolved`状态的 Promise 对象

#### reject()

`Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`

```typescript
undefined;
```

`Promise.reject()`方法的参数，会原封不动地变成后续方法的参数

```typescript
undefined;
```

## 三、使用场景

将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化

```typescript
undefined;
```

通过链式操作，将多个渲染数据分别给个`then`，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题

```typescript
undefined;
```

通过`all()`实现多个请求合并在一起，汇总所有请求结果，只需设置一个`loading`即可

```typescript
undefined;
```

通过`race`可以设置图片请求超时

```typescript
undefined;
```
