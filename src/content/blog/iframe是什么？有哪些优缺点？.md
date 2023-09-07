---
title: iframe是什么？有哪些优缺点？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: eb1167bb42d7709e36c854df817af7b2
description: >-
  iframe可以在一个网站里面嵌入另一个网站的内容。iframe的优点---------*iframe能够原封不动的把嵌入的网页展现出来。*如果有多个网页引用iframe，那么你只需要修改iframe
difficulty: 1
questionNumber: 54
source: >-
  https://fe.ecool.fun/topic-answer/06af30a2-e542-4cf0-9793-999267a4007d?orderBy=updateTime&order=desc&tagId=12
---

iframe 可以在一个网站里面嵌入另一个网站的内容。

## iframe 的优点

- iframe 能够原封不动的把嵌入的网页展现出来。
- 如果有多个网页引用 iframe，那么你只需要修改 iframe 的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用 iframe 来嵌套，可以增加代码的可重用。
- 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由 iframe 来解决。

## iframe 的缺点

- 会产生很多页面，不容易管理。
- iframe 框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。 \* 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理 iframe 中的内容，所以使用 iframe 会不利于搜索引擎优化。
- 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
- iframe 里面的样式、脚本资源，会增加请求次数，对于大型网站是不可取的。
- iframe 会阻碍页面的 onload 事件，给用户页面加载很慢的感觉。

iframe 已经渐渐的退出了前端开发的舞台。
