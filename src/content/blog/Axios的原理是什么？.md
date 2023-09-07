---
title: Axios的原理是什么？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 0c404da8699d52dc9570c5c9efe9a66a
description: >-
  ![](https://static.vue-js.com/1564f7d0-4662-11eb-ab90-d9ae814b240d.png)预览一、axios的使用----------关于`axio
difficulty: 3
questionNumber: 72
source: >-
  https://fe.ecool.fun/topic-answer/605ec5f7-3768-4aa4-8cdc-3b5bd90bebc3?orderBy=updateTime&order=desc&tagId=16
---

![](https://static.vue-js.com/1564f7d0-4662-11eb-ab90-d9ae814b240d.png)

预览

## 一、axios 的使用

关于`axios`的基本使用，上篇文章已经有所涉及，这里再稍微回顾下：

**发送请求**

```typescript
undefined;
```

**请求拦截器**

```typescript
undefined;
```

**响应拦截器**

```typescript
undefined;
```

**取消请求**

```typescript
undefined;
```

## 二、实现一个简易版 axios

构建一个`Axios`构造函数，核心代码为`request`

```typescript
undefined;
```

导出`axios`实例

```typescript
undefined;
```

上述就已经能够实现`axios({ })`这种方式的请求

下面是来实现下`axios.method()`这种形式的请求

```typescript
undefined;
```

将`Axios.prototype`上的方法搬运到`request`上

首先实现个工具类，实现将`b`方法混入到`a`，并且修改`this`指向

```typescript
undefined;
```

修改导出的方法

```typescript
undefined;
```

构建拦截器的构造函数

```typescript
undefined;
```

实现`axios.interceptors.response.use`和`axios.interceptors.request.use`

```typescript
undefined;
```

执行语句`axios.interceptors.response.use`和`axios.interceptors.request.use`的时候，实现获取`axios`实例上的`interceptors`对象，然后再获取`response`或`request`拦截器，再执行对应的拦截器的`use`方法

把`Axios`上的方法和属性搬到`request`过去

```typescript
undefined;
```

现在`request`也有了`interceptors`对象，在发送请求的时候，会先获取`request`拦截器的`handlers`的方法来执行

首先将执行`ajax`的请求封装成一个方法

```typescript
undefined;
```

获得`handlers`中的回调

```typescript
undefined;
```

`chains`大概是`['fulfilled1','reject1','fulfilled2','reject2','this.sendAjax','undefined','fulfilled2','reject2','fulfilled1','reject1']`这种形式

这样就能够成功实现一个简易版`axios`

## 三、源码分析

首先看看目录结构

![](https://static.vue-js.com/9d90eaa0-48b6-11eb-85f6-6fac77c0c9b3.png)

预览

`axios`发送请求有很多实现的方法，实现入口文件为`axios.js`

```typescript
undefined;
```

主要核心是 `Axios.prototype.request`，各种请求方式的调用实现都是在 `request` 内部实现的， 简单看下 `request` 的逻辑

```typescript
undefined;
```

`request`入口参数为`config`，可以说`config`贯彻了`axios`的一生

`axios` 中的 `config` 主要分布在这几个地方：

- 默认配置 `defaults.js`
- `config.method`默认为 `get`
- 调用 `createInstance` 方法创建 `axios` 实例，传入的`config`
- 直接或间接调用 `request` 方法，传入的 `config`

```typescript
undefined;
```

从源码中，可以看到优先级：默认配置对象`default` < `method:get` < `Axios`的实例属性`this.default` < `request`参数

下面重点看看`request`方法

```typescript
undefined;
```

拦截器`interceptors`是在构建`axios`实例化的属性

```typescript
undefined;
```

`InterceptorManager`构造函数

```typescript
undefined;
```

请求拦截器方法是被 `unshift`到拦截器中，响应拦截器是被`push`到拦截器中的。最终它们会拼接上一个叫`dispatchRequest`的方法被后续的 `promise` 顺序执行

```typescript
undefined;
```

再来看看`axios`是如何实现取消请求的，实现文件在`CancelToken.js`

```typescript
undefined;
```

实际上取消请求的操作是在 `xhr.js` 中也有响应的配合的

```typescript
undefined;
```

巧妙的地方在 `CancelToken`中 `executor` 函数，通过`resolve`函数的传递与执行，控制`promise`的状态

### 小结

![](https://static.vue-js.com/b1d2ebd0-48b6-11eb-ab90-d9ae814b240d.png)

预览

## 参考文献

- [https://juejin.cn/post/6856706569263677447#heading-4](https://juejin.cn/post/6856706569263677447#heading-4)
- [https://juejin.cn/post/6844903907500490766](https://juejin.cn/post/6844903907500490766)
- [https://github.com/axios/axios](https://github.com/axios/axios)
