---
title: nginx是什么？
pubDatetime: 2021-07-24T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 3c27666de174ee4d6d5ee61a97ca056c
description: >-
  Nginx的产生--------没有听过Nginx？那么一定听过它的"同行"Apache吧！Nginx同Apache一样都是一种WEB服务器，基于REST架构风格，以统一资源描述符(UniformRe
difficulty: 2.5
questionNumber: 44
source: >-
  https://fe.ecool.fun/topic-answer/7f3601d3-aa34-499f-b395-563fa84f9aad?orderBy=updateTime&order=desc&tagId=16
---

## Nginx 的产生

没有听过 Nginx？那么一定听过它的"同行"Apache 吧！Nginx 同 Apache 一样都是一种 WEB 服务器，基于 REST 架构风格，以统一资源描述符(Uniform Resources Identifier)URI 或者统一资源定位符(Uniform Resources Locator)URL 作为沟通依据，通过 HTTP 协议提供各种网络服务。

然而，这些服务器在设计之初受到当时环境的局限，例如当时的用户规模，网络带宽，产品特点等局限并且各自的定位和发展都不尽相同。这也使得各个 WEB 服务器有着各自鲜明的特点。

Apache 的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的。它是不支持高并发的服务器。在 Apache 上运行数以万计的并发访问，会导致服务器消耗大量内存。操作系统对其进行进程或线程间的切换也消耗了大量的 CPU 资源，导致 HTTP 请求的平均响应速度降低。

这些都决定了 Apache 不可能成为高性能 WEB 服务器，轻量级高并发服务器 Nginx 就应运而生了。

俄罗斯的工程师 Igor Sysoev，他在为 Rambler Media 工作期间，使用 C 语言开发了 Nginx。Nginx 作为 WEB 服务器一直为 Rambler Media 提供出色而又稳定的服务。然后呢，Igor Sysoev 将 Nginx 代码开源，并且赋予自由软件许可证。

## Nginx 的用途

Nginx 是一款自由的、开源的、高性能的 HTTP 服务器和反向代理服务器；同时也是一个 IMAP、POP3、SMTP 代理服务器；Nginx 可以作为一个 HTTP 服务器进行网站的发布处理，另外 Nginx 可以作为反向代理进行负载均衡的实现。
