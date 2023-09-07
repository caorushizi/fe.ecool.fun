---
title: SPA应用怎么进行SEO？
pubDatetime: 2022-08-28T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: ca027b80ab8485caa07da4739cdc6e1c
description: >-
  概述--SPA全名是`SinglePageApplication`，指的是单页面应用。SEO全称为`SearchEngineOptimization`，指的是搜索引擎优化。SPA技术将产出html的逻
difficulty: 3
questionNumber: 16
source: >-
  https://fe.ecool.fun/topic-answer/c14803df-f552-4a23-b50d-fd8e3f77f17e?orderBy=updateTime&order=desc&tagId=12
---

## 概述

SPA 全名是`Single Page Application`，指的是单页面应用。

SEO 全称为`Search Engine Optimization`，指的是搜索引擎优化。

SPA 技术将产出 html 的逻辑从服务器转移到了客户端，在进入 React, Vue 等 UI 框架进行开发时，我们开发的页面更多的是在客户端进行脚本执行、数据请求和 UI 动态装载。

那么搜索引擎爬虫在抓取这样的页面的时，在未做任何优化的情况下，通常拿到的是类似下面的字符文本：

```typescript
undefined;
```

除了可以事先定义的 title（可能 title 也不能事先确定），在 SPA 下很多内容需要通过 ajax 请求 server 拿到数据通过脚本执行产生。通常爬虫不会有类似浏览器的执行环境去产生这些内容。

那么如何让爬虫拿到的数据和用户通过浏览器看到的数据尽量是一致？

## SPA 的优缺点

优点：用户体验好，前后端代码分离，利于后期的维护

缺点：seo 不好，首次加载时长比较久，导航需要自己去实现前进后退。

## SPA 如何解决 SEO 的问题

- SSR 服务端渲染

优点：首屏加载快(因为服务器返回的网页已经包含数据, 所以之下载完 JS/CSS 就可以直接渲染)。每次请求返回的都是一个独立完成的网页, 更利于 SEO。

缺点就是服务器压力会比较大，对网络要求比较大，

## 预渲染

无需服务器实时动态编译，采用预渲染，在构建时针对特定路由简单的生成静态 HTML 文件

本质就是客户端渲染, 只不过和 SPA 不同的是预渲染有多个界面

最大优点: 由于有多个界面, 所以更利于 SEO

最大缺点: 首屏加载慢, 预编译会非常的慢
