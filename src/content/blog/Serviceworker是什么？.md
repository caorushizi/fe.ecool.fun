---
title: Serviceworker是什么？
pubDatetime: 2021-07-11T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 02a18bcca1b7b5415f2c0b73c05a5a35
description: >-
  serviceworker是PWA的重要组成部分，W3C组织早在2014年5月就提出过ServiceWorker这样的一个HTML5API，主要用来做持久的离线缓存，也是WebWorker的升级版。S
difficulty: 2
questionNumber: 254
source: >-
  https://fe.ecool.fun/topic-answer/f3a5d518-64e1-454a-80ec-5991c4cedeb0?orderBy=updateTime&order=desc&tagId=10
---

service worker 是 PWA 的重要组成部分，W3C 组织早在 2014 年 5 月就提出过 Service Worker 这样的一个 HTML5 API ，主要用来做持久的离线缓存，也是 Web Worker 的升级版。

Service worker (简称 SW) 是一个注册在指定源和路径下的事件驱动 Worker。它采用 JavaScript 控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。
