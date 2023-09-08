---
title: get和post请求在缓存方面有什么区别？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: e7b555cb4dcc824bc565f453eaa17c61
description: >-
  缓存一般只适用于那些不会更新服务端数据的请求。一般get请求都是查找请求，不会对服务器资源数据造成修改，而post请求一般都会对服务器数据造成修改，所以，一般会对get请求进行缓存，很少会对post请
difficulty: 2
questionNumber: 38
source: >-
  https://fe.ecool.fun/topic-answer/ecd8b4c8-cbb9-47c4-84e3-167e209637ae?orderBy=updateTime&order=desc&tagId=16
---

缓存一般只适用于那些不会更新服务端数据的请求。

一般 get 请求都是查找请求，不会对服务器资源数据造成修改，而 post 请求一般都会对服务器数据造成修改，所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。
