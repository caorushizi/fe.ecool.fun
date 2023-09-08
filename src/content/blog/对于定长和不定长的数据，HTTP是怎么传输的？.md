---
title: 对于定长和不定长的数据，HTTP是怎么传输的？
pubDatetime: 2022-02-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: c75071db2e6f3eceacc283a8f6078806
description: >-
  定长包体----对于定长包体而言，发送端在传输的时候一般会带上`Content-Length`，来指明包体的长度。不定长包体-----介绍另外一个http头部字段：`Transfer-Encoding
difficulty: 3
questionNumber: 34
source: >-
  https://fe.ecool.fun/topic-answer/dc610274-b10d-40ec-a8dc-ddad15196978?orderBy=updateTime&order=desc&tagId=16
---

## 定长包体

对于定长包体而言，发送端在传输的时候一般会带上 `Content-Length`，来指明包体的长度。

## 不定长包体

介绍另外一个 http 头部字段：`Transfer-Encoding: chunked`。

表示分块传输数据，设置这个字段后会自动产生两个效果:

- Content-Length 字段会被忽略
- 基于长连接持续推送动态内容
