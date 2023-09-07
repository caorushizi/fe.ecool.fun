---
title: React中为什么要给组件设置 key？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: e2ce143ee725979412c22b657b305c39
description: >-
  在开发过程中，我们需要保证某个元素的key在其同级元素中具有唯一性。在ReactDiff算法中React会借助元素的Key值来判断该元素是新创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。此
difficulty: 1
questionNumber: 86
source: >-
  https://fe.ecool.fun/topic-answer/1e01a341-f1c4-490b-966d-32433edd42bf?orderBy=updateTime&order=desc&tagId=13
---

在开发过程中，我们需要保证某个元素的  key  在其同级元素中具有唯一性。

在  React Diff  算法中 React  会借助元素的  Key  值来判断该元素是新创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。

此外，React 还需要借助  Key  值来判断元素与本地状态的关联关系。
