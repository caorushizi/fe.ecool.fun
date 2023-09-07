---
title: script 标签中， async 和 defer 两个属性有什么用途和区别？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - 性能优化
postSlug: f90896f73934470db8c0dcd1f4b7a543
description: >-
  在HTML中会遇到以下三类script：<scriptsrc='xxx'></script><scriptsrc='xxx'async></script><scriptsrc='xxx'defer><
difficulty: 2
questionNumber: 19
source: >-
  https://fe.ecool.fun/topic-answer/2acd6447-af1d-4430-837f-a468b6c76ffe?orderBy=updateTime&order=desc&tagId=20
---

在 HTML 中会遇到以下三类 script：

    <script src='xxx'></script>
    <script src='xxx' async></script>
    <script src='xxx' defer></script>

script 标签用于加载脚本与执行脚本，直接使用 script 脚本时，html 会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的 DOM 渲染。

比如现在大家习惯于在页面中引用各种第三方脚本，但如果第三方服务商出现了一些小问题，比如延迟之类的，就会使得页面白屏。

针对上述情况，script 标签提供了两种方式来解决问题，就是加入属性 async 以及 defer，这两个属性使得 script 标签加载都不会阻塞 DOM 的渲染。

    defer：此布尔属性被设置为向浏览器指示脚本在文档被解析后执行。
    async：设置此布尔属性，以指示浏览器如果可能的话，应异步执行脚本。

## defer

如果 script 标签设置了 defer 属性，则浏览器会异步下载该文件并且不会影响后续 DOM 的渲染。

如果有多个设置了 defer 属性的 script 标签存在，则会按照顺序执行所有的 script，defer 脚本会在文档渲染完毕后，DOMContentLoaded 事件调用前执行。

## async

async 属性会使得 script 脚本异步的加载并在允许的情况下执行，而 async 的执行并不会按照 script 标签在页面中的顺序来执行，而是谁先加载完谁先执行。
