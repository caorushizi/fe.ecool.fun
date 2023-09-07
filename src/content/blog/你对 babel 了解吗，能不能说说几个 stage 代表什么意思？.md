---
title: 你对 babel 了解吗，能不能说说几个 stage 代表什么意思？
pubDatetime: 2023-03-13T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: b231c6ea03d784d6a03bbab43d0f94e6
description: >-
  stage-x：指处于某一阶段的js语言提案。`stage-0、stage-1、stage-2、stage-3、stage-4`分别对应的就是进入标准之前的5个阶段，不同`stage-x`之间存在依赖
difficulty: 1
questionNumber: 4
source: >-
  https://fe.ecool.fun/topic-answer/ba7f5a1a-30c6-4b75-8a4c-6275ecff7dc8?orderBy=updateTime&order=desc&tagId=28
---

stage-x：指处于某一阶段的 js 语言提案。

`stage-0、stage-1、stage-2、stage-3、stage-4` 分别对应的就是进入标准之前的 5 个阶段，不同 `stage-x` 之间存在依赖关系，数字越小，阶段越靠后，靠后阶段包含前面阶段所有的功能，简单理解就是 stage-0 包含 stage-1/2/3 的内容，所以如果你不知道需要哪个 stage-x 的话，直接引入 `stage-0` 就好了。

- Stage 0 - 设想（Strawman）：只是一个想法，可能有 Babel 插件。
- Stage 1 - 建议（Proposal）：这是值得跟进的。
- Stage 2 - 草案（Draft）：初始规范。
- Stage 3 - 候选（Candidate）：完成规范并在浏览器上初步实现。
- Stage 4 - 完成（Finished）：将添加到下一个年度版本发布中。
