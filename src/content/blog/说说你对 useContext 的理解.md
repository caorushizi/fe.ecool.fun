---
title: 说说你对 useContext 的理解
pubDatetime: 2022-05-29T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 5acb0ab2db2224ef86e99edc675088a0
description: >-
  什么是Context==========`context`（上下文）可以看成是扩大版的`props`，它可以将全局的数据通过`provider`接口传递value给局部的组件，让包围在`provide
difficulty: 1
questionNumber: 41
source: >-
  https://fe.ecool.fun/topic-answer/1b4bdc45-8a73-42b2-a304-872ddee851ab?orderBy=updateTime&order=desc&tagId=13
---

# 什么是 Context

`context`（上下文）可以看成是扩大版的`props`，它可以将全局的数据通过`provider`接口传递 value 给局部的组件，让包围在`provider`中的局部组件可以获取到全局数据的读写接口

全局变量可以看成是全局的上下文

而上下文则是局部的全局变量，因为只有包围在`provider`中的局部组件才可以获取到这些全局变量的读写接口

# 用法

- 创建 context
- 设置`provider`并通过 value 接口传递 state
- 局部组件获取读写接口

# 案例理解

案例理解是最快的方式，我在下面的代码中，将设置一个父组件，一个子组件，通过 useContext 来传递 state，并在子组件上设置一个按钮来改变全局 state

```typescript
undefined;
```

拿到读写接口的组件就可以控制 state 数据

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da920a39db1143a2be23383d97e13174~tplv-k3u1fbpfcp-watermark.image)

预览

> tips：注意到最上层的变量 a 没？这是我用来测试的，我发现点击按钮后会触发 App 函数并更新页面，说明 react 下使用`context`来修改数据的时候，都会重新进行全局执行，而不是数据响应式的。

# 总结

我们学习到`Context`上下文的基本概念和作用，并且通过小案例总结得出`context`的使用方法：

- 使用`creacteContext`创建一个上下文
- 设置`provider`并通过`value`接口传递`state`数据
- 局部组件从`value`接口中传递的数据对象中获取读写接口
