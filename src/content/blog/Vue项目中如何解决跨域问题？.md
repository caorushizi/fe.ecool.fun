---
title: Vue项目中如何解决跨域问题？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 4efe4beac07736f30b3d0322da14f7a4
description: >-
  解决跨域的方法有很多，下面列举了三种：*JSONP*CORS*Proxy而在`vue`项目中，我们主要针对`CORS`或`Proxy`这两种方案进行展开###CORSCORS（Cross-Origin
difficulty: 2
questionNumber: 43
source: >-
  https://fe.ecool.fun/topic-answer/38c7340e-cb35-43e0-8ea0-20e75b2780a5?orderBy=updateTime&order=desc&tagId=14
---

解决跨域的方法有很多，下面列举了三种：

- JSONP
- CORS
- Proxy

而在`vue`项目中，我们主要针对`CORS`或`Proxy`这两种方案进行展开

### CORS

CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应

`CORS` 实现起来非常方便，只需要增加一些 `HTTP` 头，让服务器能声明允许的访问来源

只要后端实现了 `CORS`，就实现了跨域

![](https://static.vue-js.com/140deb80-4e32-11eb-ab90-d9ae814b240d.png)

预览

以 `koa`框架举例

添加中间件，直接设置`Access-Control-Allow-Origin`请求头

```typescript
undefined;
```

ps: `Access-Control-Allow-Origin` 设置为\*其实意义不大，可以说是形同虚设，实际应用中，上线前我们会将`Access-Control-Allow-Origin` 值设为我们目标`host`

### Proxy

代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保障网络终端的隐私或安全，防止攻击

**方案一**

如果是通过`vue-cli`脚手架工具搭建项目，我们可以通过`webpack`为我们起一个本地服务器作为请求的代理对象

通过该服务器转发请求至目标服务器，得到结果再转发给前端，但是最终发布上线时如果 web 应用和接口服务器不在一起仍会跨域

在`vue.config.js`文件，新增以下代码

```typescript
undefined;
```

通过`axios`发送请求中，配置请求的根路径

```typescript
undefined;
```

**方案二**

此外，还可通过服务端实现代理请求转发

以`express`框架为例

```typescript
undefined;
```

**方案三**

通过配置`nginx`实现代理

```typescript
undefined;
```
