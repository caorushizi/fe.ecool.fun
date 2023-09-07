---
title: 说说React事件和原生事件的执行顺序
pubDatetime: 2023-01-15T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 9691a8d2a71b500fb39a265d965735b0
description: >-
  我们知道，`React`在内部对事件做了统一的处理，合成事件是一个比较大的概念###为什么要有合成事件1.在传统的事件里，不同的浏览器需要兼容不同的写法，在合成事件中`React`提供统一的事件对象，
difficulty: 2.5
questionNumber: 27
source: >-
  https://fe.ecool.fun/topic-answer/e8631603-4764-426e-b62b-ddd6dd663d4f?orderBy=updateTime&order=desc&tagId=13
---

我们知道，`React`在内部对事件做了统一的处理，合成事件是一个比较大的概念

### 为什么要有合成事件

1.  在传统的事件里，不同的浏览器需要兼容不同的写法，在合成事件中`React`提供统一的事件对象，抹平了浏览器的兼容性差异
2.  `React`通过顶层监听的形式，通过事件委托的方式来统一管理所有的事件，可以在事件上区分事件优先级，优化用户体验

`React`在合成事件上对于`16`版本和`17`版本的合成事件有很大不同，我们也会简单聊聊区别。

### 概念

###### 事件委托

事件委托的意思就是可以通过给父元素绑定事件委托，通过事件对象的`target`属性可以获取到当前触发目标阶段的`dom`元素，来进行统一管理

比如写原生`dom`循环渲染的时候，我们要给每一个子元素都添加`dom`事件，这种情况最简单的方式就是通过事件委托在父元素做一次委托，通过`target`属性判断区分做不同的操作

###### 事件监听

事件监听主要用到了`addEventListener`这个函数，具体怎么用可以[点击](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)进行查看 事件监听和事件绑定的最大区别就是事件监听可以给一个事件监听多个函数操作，而事件绑定只有一次

```typescript
undefined;
```

###### 事件执行顺序

```typescript
undefined;
```

当我们点击`span`标签的时候会经过这么三个过程，在路径内的元素绑定的事件都会进行触发

> 捕获阶段 => 目标阶段 => 冒泡阶段

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d048b3ebd23f4161b127eb6565fd15a1~tplv-k3u1fbpfcp-watermark.image?)

预览

### 合成事件

在看之前先看一下这几个问题

- 原生事件和合成事件的执行顺序是什么？
- 合成事件在什么阶段下会被执行？
- 阻止原生事件的冒泡，会影响到合成事件的执行吗？
- 阻止合成事件的冒泡，会影响到原生事件的执行吗？

下面一个例子说清楚，[点击在线查看编辑](https://codesandbox.io/s/determined-glitter-oxh8kj?file=/src/App.js)

```typescript
undefined;
```

看这个例子，当我们点击`h1`的时候

会先执行原生事件事件流，当执行到`document`的冒泡阶段的时候做了个拦截，在这个阶段开始执行合成事件

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47eac4a858b242a6ab66e832f46019ad~tplv-k3u1fbpfcp-watermark.image?)

预览

我们用一个图简单描述一下

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31bdf297acad48e1a4934335fceadfb0~tplv-k3u1fbpfcp-watermark.image?)

预览

知道上面的概念，那我们回答开始阶段的后面两个问题

当我们把上面的`demo`的原生`div`的`stopPropagation()`   方法调用阻止捕获和冒泡阶段中当前事件的进一步传播，会阻止后续的所有事件执行

```typescript
undefined;
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e567409ad3a4da18a7f076d247f9c6a~tplv-k3u1fbpfcp-watermark.image?)

预览

我们可以看到，当阻止之后，我们点击`h1`，事件流运行到`div`的捕获阶段就不触发了，后续的所有的包括合成事件也都不会触发

那当我们给合成事件的事件流中断了会发生什么呢？

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1159431fa32e45b6a9d9bd0c221a2f1f~tplv-k3u1fbpfcp-watermark.image?)

预览

可以看到运行到捕获阶段的`div`之后被阻止传播了，后续的所有合成事件都不会执行了，但是原生的`document`冒泡还是会执行完。

### 模拟阶段

```typescript
undefined;
```

点击`h1`可以看到一路上的注册的所有事件已经执行了

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a06e74540764adf8850aa884937058b~tplv-k3u1fbpfcp-watermark.image?)

预览

`React16`给`document`上加的统一的拦截判发事件会在一定情况下出问题，下面举个例子简单说明一下

### 16 案例

[点我](https://codesandbox.io/s/practical-lichterman-1lhvb1?file=/src/App.js:0-924)查看在线案例

```typescript
undefined;
```

写完之后点击按钮`Modal`被弹出来, 但是点击`modal`里面的内容`modal`就隐藏了，添加阻止事件流函数还是不行

原因就是点击之后，事件冒泡到`document`上，同时也执行了他身上挂载的方法，解决办法就是给点击事件添加 `e.nativeEvent.stopImmediatePropagation();`

`stopImmediatePropagation`和`stopPropagation`的区别就是，前者会阻止当前节点下所有的事件监听的函数，后者不会

那`react17`及之后做了什么改变呢

### 16 和 17 的区别

在`17`版本中，`React`把事件节点绑定函数绑定在了`render`的根节点上，避免了上述的问题,

用上面的`demo`的在线案例把版本改成 17 之后，可以发现事件的执行顺序变了

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b3a5ff14e364a90a87ff66a658ef194~tplv-k3u1fbpfcp-watermark.image?)

预览

### 模拟 17 版本

```typescript
undefined;
```

区别就是在外层增加了一个`root`模拟根节点，修改了`dispatchEvent`的逻辑

可以看到，效果已经和`17`版本的一样了

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d0f3fd4266548e087c0b50300cf064e~tplv-k3u1fbpfcp-watermark.image?)

预览

回看`16demo`，切换版本到`17`，当我们切换到`17`的时候，用`stopPropagation`就可以解决问题了, 原因就是他在`root`节点上绑定的事件冒泡函数，`stopPropagation`切断了事件流，不会流向到`document`身上了

### 总结

- `16`版本先执行原生事件，当冒泡到`document`时，统一执行合成事件，
- `17`版本在原生事件执行前先执行合成事件捕获阶段，原生事件执行完毕执行冒泡阶段的合成事件,通过根节点来管理所有的事件

原生的阻止事件流会阻断合成事件的执行，合成事件阻止后也会影响到后续的原生执行
