---
title: React 中的 ref 有什么用？
pubDatetime: 2023-03-25T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 9ad90972b2ed30da7a0a0da20d9b7280
description: >-
  使用refs获取。组件被调用时会新建一个该组件的实例。refs会指向这个实例，可以是一个回调函数，回调函数会在组件被挂载后立即执行。如果把refs放到原生DOM组件的input中，我们就可以通过ref
difficulty: 2
questionNumber: 14
source: >-
  https://fe.ecool.fun/topic-answer/32135204-0c1c-459c-977b-d12895bd5a70?orderBy=updateTime&order=desc&tagId=13
---

使用 refs 获取。组件被调用时会新建一个该组件的实例。refs 会指向这个实例，可以是一个回调函数，回调函数会在组件被挂载后立即执行。

如果把 refs 放到原生 DOM 组件的 input 中，我们就可以通过 refs 得到 DOM 节点；如果把 refs 放到 React 组件中，那么我们获得的就是组件的实例，因此就可以调用实例的方法（如果想访问该组件的真实 DOM，那么可以用 React.findDOMNode 来找到 DOM 节点，但是不推崇此方法）。

refs 无法用于无状态组件，无状态组件挂载时只是方法调用，没有新建实例。在 v16 之后，可以使用 useRef。
