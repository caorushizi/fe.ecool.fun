---
title: 介绍下WebSocket
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: d51661192ddeb322483e4949d82c2ab4
description: >-
  ###1\.WebSocket是什么WebSocket是HTML5提供的一种浏览器与服务器进行**全双工通讯**的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务
difficulty: 2
questionNumber: 56
source: >-
  https://fe.ecool.fun/topic-answer/013a77b6-e97b-4271-9e1b-9d632783979d?orderBy=updateTime&order=desc&tagId=16
---

### 1\. WebSocket 是什么

WebSocket 是 HTML5 提供的一种浏览器与服务器进行**全双工通讯**的网络技术，属于应用层协议。它基于 TCP 传输协议，并复用 HTTP 的握手通道。浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。

WebSocket 的出现就解决了半双工通信的弊端。它最大的特点是：**服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。**

**WebSocket 原理** ：客户端向 WebSocket 服务器通知（notify）一个带有所有接收者 ID（recipients IDs）的事件（event），服务器接收后立即通知所有活跃的（active）客户端，只有 ID 在接收者 ID 序列中的客户端才会处理这个事件。

### 2\. WebSocket 特点

- 支持双向通信，实时性更强
- 可以发送文本，也可以发送二进制数据‘’
- 建立在 TCP 协议之上，服务端的实现比较容易
- 数据格式比较轻量，性能开销小，通信高效
- 没有同源限制，客户端可以与任意服务器通信
- 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL
- 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
