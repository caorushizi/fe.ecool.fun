---
title: HTTP Request Header和Response Header里面分别都有哪些比较重要的字段
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 3831f9370eba854a5536fe3e342d49c6
description: >-
  **通用首部字段**：请求报文和响应报文两方都会使用的首部*`Cache-Control`告诉所有的缓存机制是否可以缓存及哪种类型*`Connection`表明是否需要持久连接*`Transfer-E
difficulty: 2
questionNumber: 61
source: >-
  https://fe.ecool.fun/topic-answer/d7b4d0ce-dc04-4989-9244-88276318b6db?orderBy=updateTime&order=desc&tagId=16
---

**通用首部字段**：请求报文和响应报文两方都会使用的首部

- `Cache-Control` 告诉所有的缓存机制是否可以缓存及哪种类型
- `Connection` 表明是否需要持久连接
- `Transfer-Encoding` 文件传输编码

**Request Header**：

- `Accept` 指定客户端能够接收的内容类型，内容类型中的先后次序表示客户端接收的先后次序
- `Range` 实体的字节范围请求
- `Authorization` web 的认证信息
- `Host` 请求资源所在服务器
- `User-Agent` 客户端程序信息

**Response Header**：

- `Location` 令客户端重定向的 URI
- `ETag` 能够表示资源唯一资源的字符串
- `Server` 服务器的信息

**实体首部字段**：（Entity 头域）

- `Last-Modified` 请求资源的最后修改时间
- `Expires` 响应过期的日期和时间
- `Allow` 资源可支持 http 请求的方法，不允许则返回 405
- Content-Type 返回内容的媒体类型 Content-Type: text/html; charset=utf-8
