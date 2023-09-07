---
title: z-index属性在什么情况下会失效？
pubDatetime: 2023-01-15T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 52ac68a75643b0135084e600892af551
description: >-
  通常z-index的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，a
difficulty: 2.5
questionNumber: 10
source: >-
  https://fe.ecool.fun/topic-answer/e1900c3f-a1e8-426c-8f5c-3281129e1430?orderBy=updateTime&order=desc&tagId=11
---

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index 值越大就越是在上层。z-index 元素的 position 属性需要是 relative，absolute 或是 fixed。

z-index 属性在下列情况下会失效：

- 父元素 position 为 relative 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；
- 元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；
- 元素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为`display：inline-block`；

20230116，有小伙伴补充：

- 在手机端 `iOS 13` 系统中，`-webkit-overflow-scrolling:touch` 也会使 `z-index` 失效，将 `touch` 换成 `unset`

具体原因可参考这篇文章： [为什么我的 z-index 又不生效了？](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247485708&idx=1&sn=e0bbc4755dc078402697a075ff3c0d05&chksm=c31948ccf46ec1da01851d7c8e585e07e0bb5088996cf60bf1ef779b4a54d7c8584a17da4796#rd)
