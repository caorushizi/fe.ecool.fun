---
title: 渐进式jpg有了解过吗？
pubDatetime: 2022-09-26T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 6e42d45acf7296cdeb4e63d17c41bcb7
description: >-
  渐进式JPEG（ProgressiveJPEG），即PJPEG，是该标准的三种流行压缩模式之一。渐进式JPEG以特定方式压缩照片和图形，与基线JPEG不同，PJPEG在Web浏览器中呈现时，会首先给出
difficulty: 1
questionNumber: 12
source: >-
  https://fe.ecool.fun/topic-answer/987220ea-bf52-48ea-a6bd-106e97167e81?orderBy=updateTime&order=desc&tagId=12
---

渐进式 JPEG（Progressive JPEG），即 PJPEG，是该标准的三种流行压缩模式之一。

渐进式 JPEG 以特定方式压缩照片和图形，与基线 JPEG 不同，PJPEG 在 Web 浏览器中呈现时，会首先给出模糊图像的外观。然后一点一点地开始图片渲染，直到它显示完全渲染的图像。浏览器实际上是逐行解释图像，但在占位符中提供了完整图像的模糊预览。随着 Web 浏览器的渲染引擎处理数据，图像的对比度开始变得更清晰、更详细。直到最后渲染完毕，用户将看到完整的清晰图像。

PJPEG 能够起到一种很有意义的心理效果，让用户有东西可看，而不必坐着干等大型图像慢慢显示在屏幕上。

PJPEG 适用于大部分常用的浏览器，包括 `Chrome`、`Firefox` 和 `Internet Explorer 9` 及更高版本。旧版本的 Internet Explorer 在显示渐进式 JPEG 时存在一些问题，不过这只是很小一部分用户。而不支持渐进式 JPEG 格式的浏览器会像普通 JPEG 一样加载照片。
