---
title: 为什么不能直接使用this.state改变数据？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: a4f749dd67fc82a1095216fdbbb7310f
description: >-
  react中不能直接修改state，因为并不会重新触发render。以如下方式更新状态，组件不会重新渲染。//WrongThis.state.message=”Helloworld”;
difficulty: 1
questionNumber: 90
source: >-
  https://fe.ecool.fun/topic-answer/e246ac60-73f0-4e33-b0f9-b0d1e6c15af8?orderBy=updateTime&order=desc&tagId=13
---

react 中不能直接修改 state，因为并不会重新触发 render。

以如下方式更新状态，组件不会重新渲染。

```jsx
//Wrong
This.state.message =”Hello world”;

```

而是需要使用 setState()方法，状态改变时，组件通过重新渲染做出响应。

```jsx
//Correct
This.setState({message: ‘Hello World’});

```

setState 通过一个队列机制来实现 state 更新。当执行 setState 的时候，会将需要更新的 state 合并后放入状态队列，而不会立刻更新 this.state。队列机制可以高效的批量更新 state，如果不通过 setState 而直接修改 this.state，那么该 state 将不会被放入状态队列中，当下次调用 setState 并对状态队列进行合并时，将会忽略之前被直接修改的 state，而造成无法预知的错误。
