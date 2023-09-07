---
title: SSR是什么？Vue中怎么实现？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: ff3c23d6cdba72377de83a626c56c92d
description: >-
  ![](https://static.vue-js.com/84bd83f0-4986-11eb-85f6-6fac77c0c9b3.png)预览一、是什么-----`Server-SideRende
difficulty: 3.5
questionNumber: 36
source: >-
  https://fe.ecool.fun/topic-answer/4a0ca854-e576-4046-a740-f1ef8d4060c9?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/84bd83f0-4986-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、是什么

`Server-Side Rendering` 我们称其为`SSR`，意为服务端渲染

指由服务侧完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程

先来看看`Web`3 个阶段的发展史：

- 传统服务端渲染 SSR
- 单页面应用 SPA
- 服务端渲染 SSR

### **传统 web 开发**

网页内容在服务端渲染完成，⼀次性传输到浏览器

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4d666b24e784fd09e565458c7753b54~tplv-k3u1fbpfcp-watermark.image)

预览

打开页面查看源码，浏览器拿到的是全部的`dom`结构

### **单页应用 SPA**

单页应用优秀的用户体验，使其逐渐成为主流，页面内容由`JS`渲染出来，这种方式称为客户端渲染

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e8e524a8e7d44cba73e0c3416690087~tplv-k3u1fbpfcp-watermark.image)

预览

打开页面查看源码，浏览器拿到的仅有宿主元素`#app`，并没有内容

### 服务端渲染 SSR

`SSR`解决方案，后端渲染出完整的首屏的`dom`结构返回，前端拿到的内容包括首屏及完整`spa`结构，应用激活后依然按照`spa`方式运行

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1604e7cfad7431f99920e8ab833bc37~tplv-k3u1fbpfcp-watermark.image)

预览

看完前端发展，我们再看看`Vue`官方对`SSR`的解释：

> Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序
>
> 服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行

我们从上门解释得到以下结论：

- `Vue SSR`是一个在`SPA`上进行改良的服务端渲染
- 通过`Vue SSR`渲染的页面，需要在客户端激活才能实现交互
- `Vue SSR`将包含两部分：服务端渲染的首屏，包含交互的`SPA`

## 二、解决了什么

SSR 主要解决了以下两种问题：

- seo：搜索引擎优先爬取页面`HTML`结构，使用`ssr`时，服务端已经生成了和业务想关联的`HTML`，有利于`seo`
- 首屏呈现渲染：用户无需等待页面所有`js`加载完成就可以看到页面视图（压力来到了服务器，所以需要权衡哪些用服务端渲染，哪些交给客户端）

但是使用`SSR`同样存在以下的缺点：

- 复杂度：整个项目的复杂度
- 库的支持性，代码兼容
- 性能问题

  - 每个请求都是`n`个实例的创建，不然会污染，消耗会变得很大
  - 缓存 `node serve` 、 `ngin`x 判断当前用户有没有过期，如果没过期的话就缓存，用刚刚的结果。
  - 降级：监控`cpu`、内存占用过多，就`spa`，返回单个的壳

- 服务器负载变大，相对于前后端分离务器只需要提供静态资源来说，服务器负载更大，所以要慎重使用

所以在我们选择是否使用`SSR`前，我们需要慎重问问自己这些问题：

1.  需要`SEO`的页面是否只是少数几个，这些是否可以使用预渲染（Prerender SPA Plugin）实现
2.  首屏的请求响应逻辑是否复杂，数据返回是否大量且缓慢

## 三、如何实现

对于同构开发，我们依然使用`webpack`打包，我们要解决两个问题：服务端首屏渲染和客户端激活

这里需要生成一个服务器`bundle`文件用于服务端首屏渲染和一个客户端`bundle`文件用于客户端激活

![](https://static.vue-js.com/9dcd12c0-4986-11eb-85f6-6fac77c0c9b3.png)

预览

代码结构 除了两个不同入口之外，其他结构和之前`vue`应用完全相同

```typescript
undefined;
```

路由配置

```typescript
undefined;
```

主文件 main.js

跟之前不同，主文件是负责创建`vue`实例的工厂，每次请求均会有独立的`vue`实例创建

```typescript
undefined;
```

编写服务端入口`src/entry-server.js`

它的任务是创建`Vue`实例并根据传入`url`指定首屏

```typescript
undefined;
```

编写客户端入口`entry-client.js`

客户端入口只需创建`vue`实例并执行挂载，这⼀步称为激活

```typescript
undefined;
```

对`webpack`进行配置

安装依赖

```typescript
undefined;
```

对`vue.config.js`进行配置

```typescript
undefined;
```

对脚本进行配置，安装依赖

```typescript
undefined;
```

定义创建脚本`package.json`

```typescript
undefined;
```

> 执行打包：npm run build

最后修改宿主文件`/public/index.html`

```typescript
undefined;
```

> <!--vue-ssr-outlet--> 是服务端渲染入口位置，注意不能为了好看而在前后加空格

安装`vuex`

```typescript
undefined;
```

创建`vuex`工厂函数

```typescript
undefined;
```

在`main.js`文件中挂载`store`

```typescript
undefined;
```

服务器端渲染的是应用程序的"快照"，如果应用依赖于⼀些异步数据，那么在开始渲染之前，需要先预取和解析好这些数据

在`store`进行一步数据获取

```typescript
undefined;
```

组件中的数据预取逻辑

```typescript
undefined;
```

服务端数据预取，`entry-server.js`

```typescript
undefined;
```

客户端在挂载到应用程序之前，`store` 就应该获取到状态，`entry-client.js`

```typescript
undefined;
```

客户端数据预取处理，`main.js`

```typescript
undefined;
```

修改服务器启动文件

```typescript
undefined;
```

### 小结

- 使用`ssr`不存在单例模式，每次用户请求都会创建一个新的`vue`实例
- 实现`ssr`需要实现服务端首屏渲染和客户端激活
- 服务端异步获取数据`asyncData`可以分为首屏异步获取和切换组件获取
  - 首屏异步获取数据，在服务端预渲染的时候就应该已经完成
  - 切换组件通过`mixin`混入，在`beforeMount`钩子完成数据获取
