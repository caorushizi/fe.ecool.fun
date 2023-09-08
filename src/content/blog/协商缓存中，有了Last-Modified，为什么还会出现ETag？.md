---
title: 协商缓存中，有了Last-Modified，为什么还会出现ETag？
pubDatetime: 2021-08-14T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 2e8427a409f575ab99a6162ea6fa4bcb
description: >-
  ETag的出现，主要是为了解决Last-Modified无法解决的一些问题：*某些服务器不能精确得到文件的最后修改时间，这样就无法通过最后修改时间来判断文件是否更新了。*某些文件的修改非常频繁，在秒以
difficulty: 2.5
questionNumber: 40
source: >-
  https://fe.ecool.fun/topic-answer/4c33c24c-2e00-49a8-9f70-14c9ed80bf32?orderBy=updateTime&order=desc&tagId=16
---

ETag 的出现，主要是为了解决 Last-Modified 无法解决的一些问题：

- 某些服务器不能精确得到文件的最后修改时间， 这样就无法通过最后修改时间来判断文件是否更新了。
- 某些文件的修改非常频繁，在秒以下的时间内进行修改. Last-Modified 只能精确到秒。
- 一些文件的最后修改时间改变了，但是内容并未改变。 我们不希望客户端认为这个文件修改了。
