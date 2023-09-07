---
title: options请求方法及使用场景
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 0d179c7a08b349f91530370d9623e4c5
description: >-
  OPTIONS是除了GET和POST之外的其中一种HTTP请求方法。OPTIONS方法是用于请求获得由`Request-URI`标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户
difficulty: 1.5
questionNumber: 60
source: >-
  https://fe.ecool.fun/topic-answer/57a80f97-7217-4625-80f1-71ba9fd6d268?orderBy=updateTime&order=desc&tagId=16
---

OPTIONS 是除了 GET 和 POST 之外的其中一种 HTTP 请求方法。

OPTIONS 方法是用于请求获得由`Request-URI`标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户端可以**在采取具体资源请求之前，决定对该资源采取何种必要措施，或者了解服务器的性能**。该请求方法的响应不能缓存。

OPTIONS 请求方法的**主要用途**有两个：

- 获取服务器支持的所有 HTTP 请求方法；
- 用来检查访问权限。例如：JS 的 XMLHttpRequest 对象进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。
