---
title: 不同版本的 React 都做过哪些优化？
pubDatetime: 2024-08-10T17:05:39.000Z
author: caorushizi
tags:
  - React.js
postSlug: c6db446a-bbc3-42a9-bc4a-aeecfde8bcbc
description: >-
  React渲染页面的两个阶段： 调度阶段（reconciliation）：在这个阶段 React 会更新数据生成新的 Virtual
  DOM，然后通过Diff算法，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。 渲染阶段（commit）：这个阶段 React
  会遍历更新队列，将其所有的变更一次性更新到DOM上。 React 15 架构 React15架构可以分为两层： Reconci
difficulty: 4
questionNumber: 577
source: https://fe.ecool.fun/topic/c6db446a-bbc3-42a9-bc4a-aeecfde8bcbc
---

React渲染页面的两个阶段：

- 调度阶段（reconciliation）：在这个阶段 React 会更新数据生成新的 Virtual DOM，然后通过Diff算法，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。
- 渲染阶段（commit）：这个阶段 React 会遍历更新队列，**将其所有的变更一次性更新到DOM上**。

## React 15 架构

React15架构可以分为两层：

- Reconciler（协调器）—— 负责找出变化的组件；
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上；

在React15及以前，Reconciler采用递归的方式创建虚拟DOM，递归过程是不能中断的。如果组件树的层级很深，递归会占用线程很多时间，递归更新时间超过了16ms，用户交互就会卡顿。

为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生。

## React 16 架构

为了解决同步更新长时间占用线程导致页面卡顿的问题，也为了探索运行时优化的更多可能，React开始重构并一直持续至今。重构的目标是实现Concurrent Mode（并发模式）。

从v15到v16，React团队花了两年时间将源码架构中的Stack Reconciler重构为Fiber Reconciler。

React16架构可以分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler；
- Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler内部采用了Fiber的架构；
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上。

## React 17 优化

React16的expirationTimes模型只能区分是否>=expirationTimes决定节点是否更新。React17的lanes模型可以选定一个更新区间，并且动态的向区间中增减优先级，可以处理更细粒度的更新。

> Lane用二进制位表示任务的优先级，方便优先级的计算（位运算），不同优先级占用不同位置的“赛道”，而且存在批的概念，优先级越低，“赛道”越多。高优先级打断低优先级，新建的任务需要赋予什么优先级等问题都是Lane所要解决的问题。

Concurrent Mode的目的是实现一套可中断/恢复的更新机制。其由两部分组成：

- 一套协程架构：Fiber Reconciler
- 基于协程架构的启发式更新算法：控制协程架构工作方式的算法
