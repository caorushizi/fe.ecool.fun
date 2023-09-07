---
title: 谈谈对 window.requestAnimationFrame 的理解
pubDatetime: 2021-08-08T16:00:00.000Z
author: caorushizi
tags:
  - 性能优化
postSlug: 524619e25931865f55c91cc075a44620
description: >-
  window.requestAnimationFrame()告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在
difficulty: 3
questionNumber: 12
source: >-
  https://fe.ecool.fun/topic-answer/828350f9-b3d1-4593-8306-e5bc567b5c28?orderBy=updateTime&order=desc&tagId=20
---

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

与 setTimeout 相比，requestAnimationFrame 最大的优势是由系统来决定回调函数的执行时机。具体一点讲，如果屏幕刷新率是 60Hz,那么回调函数就每 16.7ms 被执行一次，如果刷新率是 75Hz，那么这个时间间隔就变成了 1000/75=13.3ms，换句话说就是，requestAnimationFrame 的步伐跟着系统的刷新步伐走。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。

这个 API 的调用很简单，如下所示：

```typescript
undefined;
```

除此之外，requestAnimationFrame 还有以下两个优势：

- CPU 节能：使用 setTimeout 实现的动画，当页面被隐藏或最小化时，setTimeout 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费 CPU 资源。而 requestAnimationFrame 则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的 requestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。
- 函数节流：在高频率事件(resize,scroll 等)中，为了防止在一个刷新间隔内发生多次函数执行，使用 requestAnimationFrame 可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有意义的，因为显示器每 16.7ms 刷新一次，多次绘制并不会在屏幕上体现出来。
