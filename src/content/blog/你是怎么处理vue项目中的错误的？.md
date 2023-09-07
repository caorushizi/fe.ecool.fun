---
title: 你是怎么处理vue项目中的错误的？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 1c289021ece2a28e71482eb049a81d86
description: >-
  ![](https://static.vue-js.com/3cafe4f0-4fd9-11eb-ab90-d9ae814b240d.png)预览一、错误类型------任何一个框架，对于错误的处理都
difficulty: 2
questionNumber: 42
source: >-
  https://fe.ecool.fun/topic-answer/0cc5abe2-7798-40a6-b930-7dacdb404b8d?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/3cafe4f0-4fd9-11eb-ab90-d9ae814b240d.png)

预览

## 一、错误类型

任何一个框架，对于错误的处理都是一种必备的能力

在`Vue` 中，则是定义了一套对应的错误处理规则给到使用者，且在源代码级别，对部分必要的过程做了一定的错误处理。

主要的错误来源包括：

- 后端接口错误
- 代码中本身逻辑错误

## 二、如何处理

### 后端接口错误

通过`axios`的`interceptor`实现网络请求的`response`先进行一层拦截

```typescript
undefined;
```

### 代码逻辑问题

#### 全局设置错误处理

设置全局错误处理函数

```typescript
undefined;
```

`errorHandler`指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 `Vue` 实例

不过值得注意的是，在不同 `Vue` 版本中，该全局 `API` 作用的范围会有所不同：

> 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 `undefined` 时，被捕获的错误会通过 `console.error` 输出而避免应用崩

> 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了

> 从 2.6.0 起，这个钩子也会捕获 `v-on` DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理

#### 生命周期钩子

`errorCaptured`是 2.5.0 新增的一个生命钩子函数，当捕获到一个来自子孙组件的错误时被调用

基本类型

```typescript
undefined;
```

此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播

参考官网，错误传播规则如下：

- 默认情况下，如果全局的 `config.errorHandler` 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报
- 如果一个组件的继承或父级从属链路中存在多个 `errorCaptured` 钩子，则它们将会被相同的错误逐个唤起。
- 如果此 `errorCaptured` 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 `config.errorHandler`
- 一个 `errorCaptured` 钩子能够返回 `false` 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 `errorCaptured` 钩子和全局的 `config.errorHandler`

下面来看个例子

定义一个父组件`cat`

```typescript
undefined;
```

定义一个子组件`kitten`，其中`dontexist()`并没有定义，存在错误

```typescript
undefined;
```

页面中使用组件

```typescript
undefined;
```

在父组件的`errorCaptured`则能够捕获到信息

```typescript
undefined;
```

### 三、源码分析

异常处理源码

源码位置：/src/core/util/error.js

```typescript
undefined;
```

### 小结

- `handleError`在需要捕获异常的地方调用，首先获取到报错的组件，之后递归查找当前组件的父组件，依次调用`errorCaptured` 方法，在遍历调用完所有 `errorCaptured` 方法或 `errorCaptured` 方法有报错时，调用 `globalHandleError` 方法
- `globalHandleError` 调用全局的 `errorHandler` 方法，再通过`logError`判断环境输出错误信息
- `invokeWithErrorHandling`更好的处理异步错误信息
- `logError`判断环境，选择不同的抛错方式。非生产环境下，调用`warn`方法处理错误
