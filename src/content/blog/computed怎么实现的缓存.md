---
title: computed怎么实现的缓存
pubDatetime: 2022-03-21T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 01f0145b54c97b08ca6a850727371cd1
description: >-
  下面将围绕一个例子，讲解一下computed初始化及更新时的流程，来看看计算属性是怎么实现的缓存，及依赖是怎么被收集的。```typescriptundefined```初始化computed----
difficulty: 3
questionNumber: 27
source: >-
  https://fe.ecool.fun/topic-answer/ca2af24f-1516-4fd7-b979-e2f1d09ccb20?orderBy=updateTime&order=desc&tagId=14
---

下面将围绕一个例子，讲解一下 computed 初始化及更新时的流程，来看看计算属性是怎么实现的缓存，及依赖是怎么被收集的。

```typescript
undefined;
```

## 初始化 computed

vue 初始化时先执行 init 方法，里面的 initState 会进行计算属性的初始化

```typescript
undefined;
```

下面是 initComputed 的代码

```typescript
undefined;
```

每个计算属性对应的计算 watcher 的初始状态如下：

```typescript
undefined;
```

可以看到它的 value 刚开始是 undefined，lazy 是 true，说明它的值是惰性计算的，只有到真正在模板里去读取它的值后才会计算。

这个 dirty 属性其实是缓存的关键，先记住它。

接下来看看比较关键的 defineComputed，它决定了用户在读取 this.sum 这个计算属性的值后会发生什么，继续简化，排除掉一些不影响流程的逻辑。

```typescript
undefined;
```

这个函数需要仔细看看，它做了好几件事，我们以初始化的流程来讲解它：

首先 dirty 这个概念代表脏数据，说明这个数据需要重新调用用户传入的 sum 函数来求值了。我们暂且不管更新时候的逻辑，第一次在模板中读取到 {{sum}} 的时候它一定是 true，所以初始化就会经历一次求值。

```typescript
undefined;
```

这个函数其实很清晰，它先求值，然后把 dirty 置为 false。再回头看看我们刚刚那段 Object.defineProperty 的逻辑，下次没有特殊情况再读取到 sum 的时候，发现 dirty 是 false 了，是不是直接就返回 watcher.value 这个值就可以了，这其实就是计算属性缓存的概念。

## 依赖收集

初始化完成之后，最终会调用 render 进行渲染，而 render 函数会作为 watcher 的 getter，此时的 watcher 为渲染 watcher。

```typescript
undefined;
```

看一下 watcher 中的 get 方法

```typescript
undefined;
```

渲染 watcher 的 getter 执行时（render 函数），会访问到 this.sum，就会触发该计算属性的 getter，即在 initComputed 时定义的该方法，会把与 sum 绑定的计算 watcher 得到之后，因为初始化时 dirty 为 true，会调用其 evaluate 方法，最终会调用其 get()方法，把该计算 watcher 放入栈顶，此时 Dep.target 也为该计算 watcher。

接着调用其 get 方法，就会访问到 this.count，会触发 count 属性的 getter（如下），就会将当前 Dep.target 存放的 watcher 收集到 count 属性对应的 dep 中。此时求值结束，调用`popTarget()`将该 watcher 出栈，此时上个渲染 watcher 就在栈顶了，Dep.target 重新为渲染 watcher。

```typescript
undefined;
```

```typescript
undefined;
```

```typescript
undefined;
```

```typescript
undefined;
```

通过这两段代码，计算 watcher 就被属性所绑定 dep 所收集。watcher 依赖 dep，dep 同时也依赖 watcher，它们之间的这种相互依赖的数据结构，可以方便知道一个 watcher 被哪些 dep 依赖和一个 dep 依赖了哪些 watcher。

接着执行`watcher.depend()`

```typescript
undefined;
```

还记得刚刚的 计算 watcher 的形态吗？它的 deps 里保存了 count 的 dep。也就是说，又会调用 count 上的 dep.depend()

```typescript
undefined;
```

这次的 Dep.target 已经是 渲染 watcher 了，所以这个 count 的 dep 又会把 渲染 watcher 存放进自身的 subs 中。

最终 count 的依赖收集完毕，它的 dep 为:

```typescript
undefined;
```

## 派发更新

那么来到了此题的重点，这时候 count 更新了，是如何去触发视图更新的呢？

再回到 count 的响应式劫持逻辑里去：

```typescript
undefined;
```

好，这里触发了我们刚刚精心准备的 count 的 dep 的 notify 函数。

```typescript
undefined;
```

这里的逻辑就很简单了，把 subs 里保存的 watcher 依次去调用它们的 update 方法，也就是

1.  调用 计算 watcher 的 update
2.  调用 渲染 watcher 的 update

计算 watcher 的 update

```typescript
undefined;
```

仅仅是把 计算 watcher 的 dirty 属性置为 true，静静的等待下次读取即可（再次执行 render 函数时，会再次访问到 sum 属性，此时的 dirty 为 true，就会进行再次求值）。

渲染 watcher 的 update

这里其实就是调用 vm.\_update(vm.\_render()) 这个函数，重新根据 render 函数生成的 vnode 去渲染视图了。  
而在 render 的过程中，一定会访问到 su 这个值，那么又回到 sum 定义的 get 上：

```typescript
undefined;
```

由于上一步中的响应式属性更新，触发了 计算 watcher 的 dirty 更新为 true。所以又会重新调用用户传入的 sum 函数计算出最新的值，页面上自然也就显示出了最新的值。

至此为止，整个计算属性更新的流程就结束了。

## 总结一下

1.  初始化 data 和 computed,分别代理其 set 以及 get 方法, 对 data 中的所有属性生成唯一的 dep 实例。
2.  对 computed 中的 sum 生成唯一 watcher,并保存在 vm.\_computedWatchers 中
3.  执行 render 函数时会访问 sum 属性，从而执行 initComputed 时定义的 getter 方法，会将 Dep.target 指向 sum 的 watcher,并调用该属性具体方法 sum。
4.  sum 方法中访问 this.count，即会调用 this.count 代理的 get 方法，将 this.count 的 dep 加入 sum 的 watcher,同时该 dep 中的 subs 添加这个 watcher。
5.  设置 vm.count = 2，调用 count 代理的 set 方法触发 dep 的 notify 方法，因为是 computed 属性，只是将 watcher 中的 dirty 设置为 true。
6.  最后一步 vm.sum，访问其 get 方法时，得知 sum 的 watcher.dirty 为 true,调用其 watcher.evaluate()方法获取新的值。
