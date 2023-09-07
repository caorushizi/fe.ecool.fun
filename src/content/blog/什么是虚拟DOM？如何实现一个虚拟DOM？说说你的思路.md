---
title: 什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: bb31d9700e6de28b20e8cdf72ecb132b
description: >-
  ![](https://static.vue-js.com/770b9670-442c-11eb-85f6-6fac77c0c9b3.png)预览一、什么是虚拟DOM----------虚拟DOM（`
difficulty: 3.5
questionNumber: 47
source: >-
  https://fe.ecool.fun/topic-answer/d5acd6cf-38c3-4afb-965d-be79f03cd045?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/770b9670-442c-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、什么是虚拟 DOM

虚拟 DOM （`Virtual DOM` ）这个概念相信大家都不陌生，从 `React` 到 `Vue` ，虚拟 `DOM` 为这两个框架都带来了跨平台的能力（`React-Native` 和 `Weex`）

实际上它只是一层对真实`DOM`的抽象，以`JavaScript` 对象 (`VNode` 节点) 作为基础的树，用对象的属性来描述节点，最终可以通过一系列操作使这棵树映射到真实环境上

在`Javascript`对象中，虚拟`DOM` 表现为一个 `Object` 对象。并且最少包含标签名 (`tag`)、属性 (`attrs`) 和子元素对象 (`children`) 三个属性，不同框架对这三个属性的名命可能会有差别

创建虚拟`DOM`就是为了更好将虚拟的节点渲染到页面视图中，所以虚拟`DOM`对象的节点与真实`DOM`的属性一一照应

在`vue`中同样使用到了虚拟`DOM`技术

定义真实`DOM`

```typescript
undefined;
```

实例化`vue`

```typescript
undefined;
```

观察`render`的`render`，我们能得到虚拟`DOM`

```typescript
undefined;
```

通过`VNode`，`vue`可以对这颗抽象树进行创建节点,删除节点以及修改节点的操作， 经过`diff`算法得出一些需要修改的最小单位,再更新视图，减少了`dom`操作，提高了性能

## 二、为什么需要虚拟 DOM

`DOM`是很慢的，其元素非常庞大，页面的性能问题，大部分都是由`DOM`操作引起的

真实的`DOM`节点，哪怕一个最简单的`div`也包含着很多属性，可以打印出来直观感受一下：

![](https://static.vue-js.com/cc95c7f0-442c-11eb-ab90-d9ae814b240d.png)

预览

由此可见，操作`DOM`的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户的体验

**举个例子：**

你用传统的原生`api`或`jQuery`去操作`DOM`时，浏览器会从构建`DOM`树开始从头到尾执行一遍流程

当你在一次操作时，需要更新 10 个`DOM`节点，浏览器没这么智能，收到第一个更新`DOM`请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程

而通过`VNode`，同样更新 10 个`DOM`节点，虚拟`DOM`不会立即操作`DOM`，而是将这 10 次更新的`diff`内容保存到本地的一个`js`对象中，最终将这个`js`对象一次性`attach`到`DOM`树上，避免大量的无谓计算

> 很多人认为虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI

## 三、如何实现虚拟 DOM

首先可以看看`vue`中`VNode`的结构

源码位置：src/core/vdom/vnode.js

```typescript
undefined;
```

这里对`VNode`进行稍微的说明：

- 所有对象的 `context` 选项都指向了 `Vue` 实例
- `elm` 属性则指向了其相对应的真实 `DOM` 节点

`vue`是通过`createElement`生成`VNode`

源码位置：src/core/vdom/create-element.js

```typescript
undefined;
```

上面可以看到`createElement` 方法实际上是对 `_createElement` 方法的封装，对参数的传入进行了判断

```typescript
undefined;
```

可以看到`_createElement`接收 5 个参数：

- `context` 表示 `VNode` 的上下文环境，是 `Component` 类型
- tag 表示标签，它可以是一个字符串，也可以是一个 `Component`
- `data` 表示 `VNode` 的数据，它是一个 `VNodeData` 类型
- `children` 表示当前 `VNode` 的子节点，它是任意类型的
- `normalizationType` 表示子节点规范的类型，类型不同规范的方法也就不一样，主要是参考 `render` 函数是编译生成的还是用户手写的

根据`normalizationType` 的类型，`children`会有不同的定义

```typescript
undefined;
```

`simpleNormalizeChildren`方法调用场景是 `render` 函数是编译生成的

`normalizeChildren`方法调用场景分为下面两种：

- `render` 函数是用户手写的
- 编译 `slot`、`v-for` 的时候会产生嵌套数组

无论是`simpleNormalizeChildren`还是`normalizeChildren`都是对`children`进行规范（使`children` 变成了一个类型为 `VNode` 的 `Array`），这里就不展开说了

规范化`children`的源码位置在：src/core/vdom/helpers/normalzie-children.js

在规范化`children`后，就去创建`VNode`

```typescript
undefined;
```

`createComponent`同样是创建`VNode`

源码位置：src/core/vdom/create-component.js

```typescript
undefined;
```

稍微提下`createComponent`生成`VNode`的三个关键流程：

- 构造子类构造函数`Ctor`
- `installComponentHooks`安装组件钩子函数
- 实例化 `vnode`

### 小结

`createElement` 创建 `VNode` 的过程，每个 `VNode` 有 `children`，`children` 每个元素也是一个`VNode`，这样就形成了一个虚拟树结构，用于描述真实的`DOM`树结构
