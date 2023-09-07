---
title: TCP和HTTP请求之间有什么关系？
pubDatetime: 2022-04-13T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: fd7fd5bd31d35b5a985a1a848a0a97c5
description: >-
  我们知道开启一个TCP链接之后，HTTP请求就会并行发出。首先我们来思考一个问题，**浏览器与服务器建立一个TCP链接之后，会不会在完成一个HTTP请求后立马断开？***HTTP/1.0的时候是会的，
difficulty: 2.5
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/7e8ffb4e-8433-46cc-b45b-d8733a9c4833?orderBy=updateTime&order=desc&tagId=16
---

我们知道开启一个 TCP 链接之后，HTTP 请求就会并行发出。 首先我们来思考一个问题，**浏览器与服务器建立一个 TCP 链接之后，会不会在完成一个 HTTP 请求后立马断开？**

- HTTP/1.0 的时候是会的，需要手动设置`Connection: keep-alive`。
- HTTP/1.1 的时候`Connection`默认为`keep-alive` 。

一般情况下，复用的 TCP 连接在**等待**设置的**超时**时间之后还没有被任何连接使用的话，就会**主动断开**。

### 一个 TCP 链接可以对应多少个 HTTP 请求？

一个 TCP 链接可以对应多个 HTTP 请求，只要这个 TCP 链接没有断开，就可以发送 HTTP 请求。

### 这些 HTTP 请求可以同时发送，同时响应么，在一个 TCP 链接中？比如：三个 HTTP 请求同时发送，同时接收响应。

在 HTTP/1.1 中，单个 TCP 链接在同一时刻只能处理一个请求，意思就是：任意两个 HTTP 请求从开始到结束的时间在同一个 TCP 链接里不能重叠。HTTP/1.1 规范中规定了  Pipelining  来试图解决这个问题，  但是浏览器默认关闭了这个功能。

**原因：**

- 一些代理服务器不能正确的处理 HTTP Pipelining。
- 正确的流水线实现是复杂的。
- Head-of-line Blocking 连接头阻塞：在建立起一个 TCP 连接之后，假设客户端在这个连接连续向服务器发送了几个请求。按照标准，服务器应该按照收到请求的顺序返回结果，假设服务器在处理首个请求时花费了大量时间，那么后面所有的请求都需要等着首个请求结束才能响应。

HTTP/2.0 提供了 Multiplexing 多路传输（多路复用）。可以在一个 TCP 链接中同时发起多个 HTTP 请求，同时响应多个 HTTP 请求。

所以，解决办法也就出现了：

- HTTP/1.1 中可以利用  Pipelining。
- 重用 TCP

### 浏览器 http 请求的并发性是如何体现的？并发请求的数量有没有限制？

有人会说，我们客户端发起 HTTP 请求明明是异步，并行发送的。怎么到你这里就一个一个发送，一个一个响应了？

其实浏览器会同时与服务器建立多个 TCP 链接，来支持多个 HTTP 同时请求的。

就例如：Chrome 浏览器最多允许对同一个域名 Host 建立 6 个 TCP 连接，不同的浏览器有所区别。

### 补充

关于 HTTPS 如果图片都是 HTTPS 的连接，并且在同一域名下，浏览器会先和服务器协商使用`HTTP2`的`Multiplexing`功能进行多路传输，不过未必所有的挂在这个域名下的资源都会使用同一个 TCP 连接。如果用不了 HTTPS 或者 HTTP2（HTTP2 是在 HTTPS 上实现的），那么浏览器会就在同一个 host 建立多个 TCP 连接，每一个 TCP 连接进行顺序请求资源。
