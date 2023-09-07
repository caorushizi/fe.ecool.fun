---
title: HTTP 1.0和 HTTP 1.1 之间有哪些区别？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 3738a4648165da199a9862f4c772ab8e
description: >-
  **HTTP1.0和HTTP1.1有以下区别**：***连接方面**的区别，http1.1默认使用持久连接，而http1.0默认使用非持久连接。http1.1通过使用持久连接来使多个http请求复用同
difficulty: 2
questionNumber: 59
source: >-
  https://fe.ecool.fun/topic-answer/48502771-0558-47ba-84f6-00b0f3395236?orderBy=updateTime&order=desc&tagId=16
---

**HTTP 1.0 和 HTTP 1.1 有以下区别**：

- **连接方面** 的区别，http1.1 默认使用持久连接，而 http1.0 默认使用非持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。
- **资源请求方面** 的区别，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
- **缓存方面** 的区别，在 http1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。
- http1.1 中还**新增了 host 字段**，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个 IP 地址。因此有了 host 字段，就可以将请求发往同一台服务器上的不同网站。
- http1.1 相对于 http1.0 还新增了很多**请求方法**，如 PUT、HEAD、OPTIONS 等。
