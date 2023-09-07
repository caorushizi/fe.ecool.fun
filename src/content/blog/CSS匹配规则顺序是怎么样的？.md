---
title: CSS匹配规则顺序是怎么样的？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: dd7603fd09fb1918a95c221ceaa1b22b
description: >-
  相信大多数初学者都会认为CSS匹配是左向右的，其实恰恰相反。CSS匹配发生在RenderTree构建时（ChromeDevTools将其归属于Layout过程）。此时浏览器构建出了DOM，而且拿到了C
difficulty: 2
questionNumber: 73
source: >-
  https://fe.ecool.fun/topic-answer/3e5ade06-6338-4949-b642-47f09bcff045?orderBy=updateTime&order=desc&tagId=11
---

相信大多数初学者都会认为 CSS 匹配是左向右的，其实恰恰相反。

CSS 匹配发生在 Render Tree 构建时（Chrome Dev Tools 将其归属于 Layout 过程）。此时浏览器构建出了 DOM，而且拿到了 CSS 样式，此时要做的就是把样式跟 DOM 上的节点对应上，浏览器为了提高性能需要做的就是快速匹配。

首先要明确一点，浏览器此时是给一个"可见"节点找对应的规则，这和 jQuery 选择器不同，后者是使用一个规则去找对应的节点，这样从左到右或许更快。但是对于前者，由于 CSS 的庞大，一个 CSS 文件中或许有上千条规则，而且对于当前节点来说，大多数规则是匹配不上的，稍微想一下就知道，如果从右开始匹配（也是从更精确的位置开始），能更快排除不合适的大部分节点，而如果从左开始，只有深入了才会发现匹配失败，如果大部分规则层级都比较深，就比较浪费资源了。

除了上面这点，我们前面还提到 DOM 构建是"循序渐进的"，而且 DOM 不阻塞 Render Tree 构建（只有 CSSOM 阻塞），这样也是为了能让页面更早有元素呈现。

考虑如下情况，如果我们此时构建的只是部分 DOM，而 CSSOM 构建完成，浏览器就会构建 Render Tree。

这个时候对每一个节点，如果找到一条规则从右向左匹配，我们只需要逐层观察该节点父节点是否匹配，而此时其父节点肯定已经在 DOM 上。

但是反过来，我们可能会匹配到一个 DOM 上尚未存在的节点，此时的匹配过程就浪费了资源。
