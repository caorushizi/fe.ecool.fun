---
title: 什么是跨域？
pubDatetime: 2021-07-04T11:59:13.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 3538f4eb-5b78-4ffc-aeae-ccfdd45976a4
description: >-
  跨域本质是浏览器基于同源策略的一种安全手段 同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能
  所谓同源（即指在同一个域）具有以下三个相同点 协议相同（protocol） 主机相同（host） 端口相同（port）
  反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域 一定要注意跨域是浏览器的限制，你用抓包工具抓取接口数据，是可以
difficulty: 1
questionNumber: 250
source: https://fe.ecool.fun/topic/3538f4eb-5b78-4ffc-aeae-ccfdd45976a4
---

跨域本质是浏览器基于**同源策略**的一种安全手段

同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能

所谓同源（即指在同一个域）具有以下三个相同点

- 协议相同（protocol）
- 主机相同（host）
- 端口相同（port）

反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域

> 一定要注意跨域是浏览器的限制，你用抓包工具抓取接口数据，是可以看到接口已经把数据返回回来了，只是浏览器的限制，你获取不到数据。用postman请求接口能够请求到数据。这些再次印证了跨域是浏览器的限制。
