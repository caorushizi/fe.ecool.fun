---
title: 为什么React的VM可以提高性能？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: c43177c84d330e521a3e19de7f357619
description: 因为VM并不是真实的操作DOM，通过diff算法可以避免一些不变要的DOM操作，从而提高了性能。
difficulty: 2
questionNumber: 82
source: >-
  https://fe.ecool.fun/topic-answer/4e2b8fc1-1919-43f8-9cd4-9d3dacc8bb91?orderBy=updateTime&order=desc&tagId=13
---

因为 VM 并不是真实的操作 DOM，通过 diff 算法可以避免一些不变要的 DOM 操作，从而提高了性能。
