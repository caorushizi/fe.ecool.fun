---
title: 为什么不能在循环、条件或嵌套函数中调用 Hooks？
pubDatetime: 2022-05-29T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: b0f50ddbae976ef3fa84f3be7748611a
description: >-
  如果在条件语句中使用hooks，React会抛出error。这与ReactHooks的底层设计的数据结构相关，先抛出结论：**react用链表来严格保证hooks的顺序**。一个典型的useState
difficulty: 3
questionNumber: 42
source: >-
  https://fe.ecool.fun/topic-answer/672716f5-203b-4928-afdc-44d6e8793663?orderBy=updateTime&order=desc&tagId=13
---

如果在条件语句中使用 hooks，React 会抛出 error。

这与 React Hooks 的底层设计的数据结构相关，先抛出结论：**react 用链表来严格保证 hooks 的顺序**。

一个典型的 useState 使用场景：

```typescript
undefined;
```

那么 hooks 在这两条语句分别作了什么？

![](https://pic.rmb.bdstatic.com/bjh/89d2fa7124b06495bbbfd4b5758bd6e5.png)

预览

上图是 `useState` 首次渲染的路径，其中，跟我们问题相关的是 `mountState` 这个过程，简而言之，这个过程初始化了一个 hooks，并且将其追加到链表结尾。

```typescript
undefined;
```

从这段源码中我们可以看出，mounState 的主要工作是初始化 Hooks。在整段源码中，最需要关注的是 `mountWorkInProgressHook` 方法，它为我们道出了 Hooks 背后的数据结构组织形式。以下是 `mountWorkInProgressHook` 方法的源码：

```typescript
undefined;
```

到这里可以看出，hook 相关的所有信息收敛在一个 hook 对象里，而 hook 对象之间以单向链表的形式相互串联。

接着，我们来看更新过程

![](https://pic.rmb.bdstatic.com/bjh/1cc5bd4c72e4f22d1aa828df3c831f2d.png)

预览

上图中，需要注意的是 updateState 的过程：按顺序去遍历之前构建好的链表，取出对应的数据信息进行渲染。

我们把 mountState 和 updateState 做的事情放在一起来看：mountState（首次渲染）构建链表并渲染；updateState 依次遍历链表并渲染。

hooks 的渲染是通过“依次遍历”来定位每个 hooks 内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的。

这个现象有点像我们构建了一个长度确定的数组，数组中的每个坑位都对应着一块确切的信息，后续每次从数组里取值的时候，只能够通过索引（也就是位置）来定位数据。也正因为如此，在许多文章里，都会直截了当地下这样的定义：Hooks 的本质就是数组。但读完这一课时的内容你就会知道，Hooks 的本质其实是链表。

我们举个例子：

```typescript
undefined;
```

点击 div 后，我们期望的输出是 "码农"，然而事实上(尽管会 error，但是打印还是执行)打印的为 "Lily"

原因是，三个 useState 在初始化的时候已经构建好了一个三个节点的链表结构，依次为： `name('leo') --> age(18) --> career('码农')`

每个节点都已经派发了一个与之对应的 update 操作，因此执行 setName 时候，三个节点就修改为了 `name('Lily') --> age(18) --> career('码农')`

然后执行 update 渲染操作，从链表依次取出值，此时，条件语句的不再执行，第一个取值操作会从链表的第一个，也就是 name 对应的 hooks 对象进行取值：此时取到的为 `name:Lily`

必须按照顺序调用从根本上来说是因为 useState 这个钩子在设计层面并没有“状态命名”这个动作，也就是说你每生成一个新的状态，React 并不知道这个状态名字叫啥，所以需要通过顺序来索引到对应的状态值
