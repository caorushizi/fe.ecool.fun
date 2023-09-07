---
title: 说说你对 Dom 树的理解
pubDatetime: 2023-02-18T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 898fbbdee9b0ea862a0fc040c84f9064
description: >-
  什么是DOM-------从网络传给渲染引擎的HTML文件字节流是无法直接被渲染引擎理解的，所以要将其转化为渲染引擎能够理解的内部结构，这个结构就是DOM。DOM提供了对HTML文档结构化的表述。在渲
difficulty: 2
questionNumber: 7
source: >-
  https://fe.ecool.fun/topic-answer/45affa79-be16-4489-b403-bf3d614fcf03?orderBy=updateTime&order=desc&tagId=12
---

## 什么是 DOM

从网络传给渲染引擎的 HTML 文件字节流是无法直接被渲染引擎理解的，所以要将其转化为渲染引擎能够理解的内部结构，这个结构就是 DOM。

DOM 提供了对 HTML 文档结构化的表述。

在渲染引擎中，DOM 有三个层面的作用：

- 从页面的视角来看，DOM 是生成页面的基础数据结构。
- 从 JavaScript 脚本视角来看，DOM 提供给 JavaScript 脚本操作的接口，通过这套接口，JavaScript 可以对 DOM 结构进行访问，从而改变文档的结构、样式和内容。
- 从安全视角来看，DOM 是一道安全防护线，一些不安全的内容在 DOM 解析阶段就被拒之门外了。

简言之，DOM 是表述 HTML 的内部数据结构，它会将 Web 页面和 JavaScript 脚本连接起来，并过滤一些不安全的内容。

## DOM 树如何生成

HTML 解析器（HTMLParser）： 负责将 HTML 字节流转换为 DOM 结构。

那么网络进程是如何将数据传给 HTML 解析器的呢？

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab3155a080d04fb49db24c63ca7cff0a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

预览

从图中我们可以知道，网络进程和渲染进程之间有一个共享数据通道，网络进程加载了多少数据， 就将数据传给 HTML 解析器进行解析。

HTML 解析器接收到数据（字节流）之后，字节流将转化成 DOM，过程如下：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1538923ce3454674ab011fafc57ba7d4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

预览

**有三个阶段**：

1、通过分词器将字节流转化为 Token。 分词器先将字节流转换为一个个 Token，分为 Tag Token 和文本 Token。

注意，这里的 Token 并不是我们之前理解的 Token，这里就是一个片段。

2、Token 解析为 DOM 节点。

3、将 DOM 节点添加到 DOM 树中。

## JavaScript 影响 DOM 的生成

我们知道，JavaScript 可以修改 DOM，它也会影响 DOM 的生成。

1、内嵌 JavaScript 脚本 比如我们嵌入了一段`<script>`标签的代码，之前的解析过程都一样，但是解析到 script 标签时， 渲染引擎判断这是一段脚本，此时 HTML 解析器就会**暂停 DOM 的解析**， 因为接下来的 JavaScript 可能要修改当前已经生成的 DOM 结构。

暂停解析之后，JavaScript 引擎介入，并**执行`<script>`标签中的这段脚本**。 脚本执行完成之后，HTML 解析器恢复解析过程，继续解析后续的内容，直至生成最终的 DOM。

2、引入 JavaScript 文件 基本上跟之前是一致的，不同点在于，暂停解析之后执行 JavaScript 代码，需要**先下载这段 JavaScript 代码**。
