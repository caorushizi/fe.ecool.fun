---
title: 说说React服务端渲染怎么做？原理是什么？
pubDatetime: 2023-02-06T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: a30c169da6ff96e255c1e3ab418d5b53
description: >-
  一、是什么-----服务端渲染（`Server-SideRendering`，简称`SSR`），指由服务侧完成页面的`HTML`结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可
difficulty: 2
questionNumber: 25
source: >-
  https://fe.ecool.fun/topic-answer/190f1c7f-4fb5-4fb1-bb7c-f2cc977d50d8?orderBy=updateTime&order=desc&tagId=13
---

## 一、是什么

服务端渲染（`Server-Side Rendering` ，简称`SSR`），指由服务侧完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程

![](https://static.vue-js.com/96dc3e20-f3f7-11eb-85f6-6fac77c0c9b3.png)

预览

其解决的问题主要有两个：

- SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
- 加速首屏加载，解决首屏白屏问题

## 二、如何做

在`react`中，实现`SSR`主要有两种形式：

- 手动搭建一个 SSR 框架
- 使用成熟的 SSR 框架，如 Next.JS

这里主要以手动搭建一个`SSR`框架进行实现

首先通过`express`启动一个`app.js`文件，用于监听 3000 端口的请求，当请求根目录时，返回`HTML`，如下：

```typescript
undefined;
```

然后再服务器中编写`react`代码，在`app.js`中进行应引用

```typescript
undefined;
```

为了让服务器能够识别`JSX`，这里需要使用`webpakc`对项目进行打包转换，创建一个配置文件`webpack.server.js`并进行相关配置，如下：

```typescript
undefined;
```

接着借助`react-dom`提供了服务端渲染的 `renderToString`方法，负责把`React`组件解析成`html`

```typescript
undefined;
```

上面的过程中，已经能够成功将组件渲染到了页面上

但是像一些事件处理的方法，是无法在服务端完成，因此需要将组件代码在浏览器中再执行一遍，这种服务器端和客户端共用一套代码的方式就称之为**同构**

通俗讲，“同构”就是一套 React 代码在服务器上运行一遍，到达浏览器又运行一遍：

- 服务端渲染完成页面结构
- 浏览器端渲染完成事件绑定

浏览器实现事件绑定的方式为让浏览器去拉取`JS`文件执行，让`JS`代码来控制，因此需要引入`script`标签

通过`script`标签为页面引入客户端执行的`react`代码，并通过`express`的`static`中间件为`js`文件配置路由，修改如下：

```typescript
undefined;
```

然后再客户端执行以下`react`代码，新建`webpack.client.js`作为客户端 React 代码的`webpack`配置文件如下：

```typescript
undefined;
```

这种方法就能够简单实现首页的`react`服务端渲染，过程对应如下图：

![](https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png)

预览

在做完初始渲染的时候，一个应用会存在路由的情况，配置信息如下：

```typescript
undefined;
```

然后可以通过`index.js`引用路由信息，如下：

```typescript
undefined;
```

这时候控制台会存在报错信息，原因在于每个`Route`组件外面包裹着一层`div`，但服务端返回的代码中并没有这个`div`

解决方法只需要将路由信息在服务端执行一遍，使用使用`StaticRouter`来替代`BrowserRouter`，通过`context`进行参数传递

```typescript
undefined;
```

这样也就完成了路由的服务端渲染

## 三、原理

整体`react`服务端渲染原理并不复杂，具体如下：

`node server` 接收客户端请求，得到当前的请求`url` 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 `props`、`context`或者`store` 形式传入组件

然后基于 `react` 内置的服务端渲染方法 `renderToString()`把组件渲染为 `html`字符串在把最终的 `html` 进行输出前需要将数据注入到浏览器端

浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 `html` 节点，整个流程结束
