---
title: 简述下 React 的事件代理机制？
pubDatetime: 2023-02-18T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 0d24aa6b9ba60a9e922299ec8f2c286a
description: >-
  React并不会把所有的处理函数直接绑定在真实的节点上。而是把所有的事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或
difficulty: 3
questionNumber: 24
source: >-
  https://fe.ecool.fun/topic-answer/eaf64af1-8d01-495c-b9ca-c1d503e3ed8d?orderBy=updateTime&order=desc&tagId=13
---

React 并不会把所有的处理函数直接绑定在真实的节点上。而是把所有的事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。

当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。

当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。

这样做的优点是解决了兼容性问题，并且简化了事件处理和回收机制（不需要手动的解绑事件，React 已经在内部处理了）。但是有些事件 React 并没有实现，比如 window 的 resize 事件。

## 2023.2.19 更新:

在`React@17.0.3`版本中：

- 所有事件都是委托在`id = root`的 DOM 元素中（网上很多说是在`document`中，`17`版本不是了）；
- 在应用中所有节点的事件监听其实都是在`id = root`的 DOM 元素中触发；
- `React`自身实现了一套事件冒泡捕获机制；
- `React`实现了合成事件`SyntheticEvent`；
- `React`在`17`版本不再使用事件池了（网上很多说使用了对象池来管理合成事件对象的创建销毁，那是`16`版本及之前）；
- 事件一旦在`id = root`的 DOM 元素中委托，其实是一直在触发的，只是没有绑定对应的回调函数；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1de6d95f26c949dbb8f2546cd235fa22~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

预览

盗用一张官方图，按官方解释，之所以会将事件委托从`document`中移到`id = root`的 DOM 元素，是为了**可以更加安全地进行新旧版本 React 树的嵌套**。
