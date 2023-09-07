---
title: 说说React Router有几种模式，以及实现原理？
pubDatetime: 2023-03-25T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: ba11843617659265163ad70be2f4b465
description: >-
  一、是什么-----在单页应用中，一个`web`项目只有一个`html`页面，一旦页面加载完成之后，就不用因为用户的操作而进行页面的重新加载或者跳转，其特性如下：*改变url且不让浏览器向服务器发送请
difficulty: 2
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/2b68a2b5-ab3a-4de4-af48-43ab5f7e99f8?orderBy=updateTime&order=desc&tagId=13
---

## 一、是什么

在单页应用中，一个`web`项目只有一个`html`页面，一旦页面加载完成之后，就不用因为用户的操作而进行页面的重新加载或者跳转，其特性如下：

- 改变 url 且不让浏览器向服务器发送请求
- 在不刷新页面的前提下动态改变浏览器地址栏中的 URL 地址

其中主要分成了两种模式：

- hash 模式：在 url 后面加上#，如[http://127.0.0.1:5500/home/#/page1](http://127.0.0.1:5500/home/#/page1)
- history 模式：允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录

## 二、使用

`React Router`对应的`hash`模式和`history`模式对应的组件为：

- HashRouter
- BrowserRouter

这两个组件的使用都十分的简单，作为最顶层组件包裹其他组件，如下所示

```typescript
undefined;
```

## 三、实现原理

路由描述了 `URL` 与 `UI` 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）

下面以`hash`模式为例子，改变`hash`值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新页面

`hash` 值改变，触发全局 `window` 对象上的 `hashchange` 事件。所以 `hash` 模式路由就是利用 `hashchange` 事件监听 `URL` 的变化，从而进行 `DOM` 操作来模拟页面跳转

`react-router`也是基于这个特性实现路由的跳转

下面以`HashRouter`组件分析进行展开：

## HashRouter

`HashRouter`包裹了整应用，

通过`window.addEventListener('hashChange',callback)`监听`hash`值的变化，并传递给其嵌套的组件

然后通过`context`将`location`数据往后代组件传递，如下：

```typescript
undefined;
```

### Router

`Router`组件主要做的是通过`BrowserRouter`传过来的当前值，通过`props`传进来的`path`与`context`传进来的`pathname`进行匹配，然后决定是否执行渲染组件

```typescript
undefined;
```
