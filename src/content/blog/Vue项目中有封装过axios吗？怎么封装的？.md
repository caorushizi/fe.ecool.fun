---
title: Vue项目中有封装过axios吗？怎么封装的？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 5e6f29231687b4af63fd3f38c7905e56
description: >-
  ![](https://static.vue-js.com/2bf1e460-45a7-11eb-85f6-6fac77c0c9b3.png)预览一、axios是什么----------`axios`
difficulty: 2
questionNumber: 46
source: >-
  https://fe.ecool.fun/topic-answer/71d2fd07-2629-4ffd-a9ea-750ee912f912?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/2bf1e460-45a7-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、axios 是什么

`axios` 是一个轻量的 `HTTP`客户端

基于 `XMLHttpRequest` 服务来执行 `HTTP` 请求，支持丰富的配置，支持 `Promise`，支持浏览器端和 `Node.js` 端。自`Vue`2.0 起，尤大宣布取消对 `vue-resource` 的官方推荐，转而推荐 `axios`。现在 `axios` 已经成为大部分 `Vue` 开发者的首选

### 特性

- 从浏览器中创建 `XMLHttpRequests`
- 从 `node.js` 创建 `http`请求
- 支持 `Promise` API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 `JSON` 数据
- 客户端支持防御`XSRF`

### 基本使用

安装

```typescript
undefined;
```

导入

```typescript
undefined;
```

发送请求

```typescript
undefined;
```

并发请求`axios.all([])`

```typescript
undefined;
```

## 二、为什么要封装

`axios` 的 API 很友好，你完全可以很轻松地在项目中直接使用。

不过随着项目规模增大，如果每发起一次`HTTP`请求，就要把这些比如设置超时时间、设置请求头、根据项目环境判断使用哪个请求地址、错误处理等等操作，都需要写一遍

这种重复劳动不仅浪费时间，而且让代码变得冗余不堪，难以维护。为了提高我们的代码质量，我们应该在项目中二次封装一下 `axios` 再使用

举个例子：

```typescript
undefined;
```

如果每个页面都发送类似的请求，都要写一堆的配置与错误处理，就显得过于繁琐了

这时候我们就需要对`axios`进行二次封装，让使用更为便利

## 三、如何封装

封装的同时，你需要和 后端协商好一些约定，请求头，状态码，请求超时时间.......

设置接口请求前缀：根据开发、测试、生产环境的不同，前缀需要加以区分

请求头 : 来实现一些具体的业务，必须携带一些参数才可以请求(例如：会员业务)

状态码: 根据接口返回的不同`status` ， 来执行不同的业务，这块需要和后端约定好

请求方法：根据`get`、`post`等方法进行一个再次封装，使用起来更为方便

请求拦截器: 根据请求的请求头设定，来决定哪些请求可以访问

响应拦截器： 这块就是根据 后端\`返回来的状态码判定执行不同业务

### 设置接口请求前缀

利用`node`环境变量来作判断，用来区分开发、测试、生产环境

```typescript
undefined;
```

在本地调试的时候，还需要在`vue.config.js`文件中配置`devServer`实现代理转发，从而实现跨域

```typescript
undefined;
```

### 设置请求头与超时时间

大部分情况下，请求头都是固定的，只有少部分情况下，会需要一些特殊的请求头，这里将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置

```typescript
undefined;
```

### 封装请求方法

先引入封装好的方法，在要调用的接口重新封装成一个方法暴露出去

```typescript
undefined;
```

把封装的方法放在一个`api.js`文件中

```typescript
undefined;
```

页面中就能直接调用

```typescript
undefined;
```

这样可以把`api`统一管理起来，以后维护修改只需要在`api.js`文件操作即可

### 请求拦截器

请求拦截器可以在每个请求里加上 token，做了统一处理后维护起来也方便

```typescript
undefined;
```

### 响应拦截器

响应拦截器可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权

```typescript
undefined;
```

### 小结

- 封装是编程中很有意义的手段，简单的`axios`封装，就可以让我们可以领略到它的魅力
- 封装 `axios` 没有一个绝对的标准，只要你的封装可以满足你的项目需求，并且用起来方便，那就是一个好的封装方案
