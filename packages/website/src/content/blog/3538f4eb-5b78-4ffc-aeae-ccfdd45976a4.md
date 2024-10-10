---
title: 什么是跨域？
pubDatetime: 2024-08-10T17:04:48.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 3538f4eb-5b78-4ffc-aeae-ccfdd45976a4
description: >-
  跨域（Cross-Origin）是指从一个域名的网页去请求另一个域名的资源。在Web开发中，出于安全考虑，同源策略（Same-Origin
  Policy）限制了文档或脚本如何与来自不同源的“资源”进行交互。这里的“源”指的是协议（如http或https）、域名（如www.example.com）和端口号（如80或443）的组合。如果协议、域名或端口号中的任何一个不同，那么两个资源就被认为是来自不同
difficulty: 1
questionNumber: 250
source: https://fe.ecool.fun/topic/3538f4eb-5b78-4ffc-aeae-ccfdd45976a4
---

**跨域**（Cross-Origin）是指从一个域名的网页去请求另一个域名的资源。在Web开发中，出于安全考虑，同源策略（Same-Origin Policy）限制了文档或脚本如何与来自不同源的“资源”进行交互。这里的“源”指的是协议（如http或https）、域名（如www.example.com）和端口号（如80或443）的组合。如果协议、域名或端口号中的任何一个不同，那么两个资源就被认为是来自不同的源，即跨域。

跨域问题主要出现在前端开发中，尤其是当前端页面需要从不同源的服务器请求数据或服务时。由于浏览器的同源策略，这些跨域请求可能会被阻止，导致请求失败。

为了解决这个问题，有几种常见的跨域资源共享（CORS, Cross-Origin Resource Sharing）策略：

1. **JSONP**：一种早期的跨域技术，通过在客户端动态创建`<script>`标签并设置其`src`属性为跨域URL（该URL会返回一段JavaScript代码，该代码中包含需要的数据），然后利用`<script>`标签的跨域能力来执行返回的JavaScript代码，从而获取数据。但JSONP只支持GET请求，并且存在安全风险。

2. **CORS**：现代浏览器支持的跨域资源共享标准。服务器通过设置响应头（如`Access-Control-Allow-Origin`）来明确告知客户端哪些域的请求是被允许的。CORS支持更复杂的HTTP请求，如POST、PUT等，并且安全性更高。

3. **代理服务器**：在客户端和服务器之间设置一个代理服务器，客户端的请求先发送到代理服务器，代理服务器再将请求转发给目标服务器，并将响应返回给客户端。这样，从客户端的角度看，它始终在与同源的代理服务器进行交互，从而避免了跨域问题。

4. **Nginx反向代理**：一种常见的代理服务器解决方案，通过配置Nginx来实现对跨域请求的转发和响应。

5. **document.domain + iframe**：对于主域相同但子域不同的跨域问题，可以通过设置`document.domain`来使两个页面共享同一个域，然后通过iframe进行交互。但这种方法有一定的局限性，并且存在安全风险。

6. **postMessage**：HTML5引入的一种跨文档通信API，允许来自不同源的页面进行安全通信。通过监听`message`事件并检查事件的`origin`属性，可以确保消息来自预期的源。
