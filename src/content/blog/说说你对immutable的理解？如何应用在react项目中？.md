---
title: 说说你对immutable的理解？如何应用在react项目中？
pubDatetime: 2021-10-24T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: d7cfae82ea6522846a2d99be3cf5f723
description: >-
  一、是什么-----Immutable，不可改变的，在计算机中，即指一旦创建，就不能再被更改的数据对`Immutable`对象的任何修改或添加删除操作都会返回一个新的`Immutable`对象`Imm
difficulty: 3
questionNumber: 63
source: >-
  https://fe.ecool.fun/topic-answer/3804a9d9-03c0-4588-b696-1068d745c7b9?orderBy=updateTime&order=desc&tagId=13
---

## 一、是什么

Immutable，不可改变的，在计算机中，即指一旦创建，就不能再被更改的数据

对 `Immutable` 对象的任何修改或添加删除操作都会返回一个新的 `Immutable` 对象

`Immutable` 实现的原理是 `Persistent Data Structure`（持久化数据结构）:

- 用一种数据结构来保存数据
- 当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费

也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变，同时为了避免 `deepCopy` 把所有节点都复制一遍带来的性能损耗，`Immutable` 使用了 `Structural Sharing`（结构共享）

如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

如下图所示：

![](https://pic4.zhimg.com/80/2b4c801a7b40eefcd4ee6767fb984fdf_720w.gif)

预览

## 二、如何使用

使用`Immutable`对象最主要的库是`immutable.js`

immutable.js 是一个完全独立的库，无论基于什么框架都可以用它

其出现场景在于弥补 Javascript 没有不可变数据结构的问题，通过 structural sharing 来解决的性能问题

内部提供了一套完整的 Persistent Data Structure，还有很多易用的数据类型，如`Collection`、`List`、`Map`、`Set`、`Record`、`Seq`，其中：

- List: 有序索引集，类似 JavaScript 中的 Array
- Map: 无序索引集，类似 JavaScript 中的 Object
- Set: 没有重复值的集合

主要的方法如下：

- fromJS()：将一个 js 数据转换为 Immutable 类型的数据

```typescript
undefined;
```

- toJS()：将一个 Immutable 数据转换为 JS 类型的数据
- is()：对两个对象进行比较

```typescript
undefined;
```

- get(key)：对数据或对象取值
- getIn(\[\]) ：对嵌套对象或数组取值，传参为数组，表示位置

```typescript
undefined;
```

如下例子：使用方法如下：

```typescript
undefined;
```

如果换到原生的`js`，则对应如下：

```typescript
undefined;
```

## 三、在 React 中应用

使用 `Immutable` 可以给 `React` 应用带来性能的优化，主要体现在减少渲染的次数

在做`react`性能优化的时候，为了避免重复渲染，我们会在`shouldComponentUpdate()`中做对比，当返回`true`执行`render`方法

`Immutable`通过`is`方法则可以完成对比，而无需像一样通过深度比较的方式比较

在使用`redux`过程中也可以结合`Immutable`，不使用`Immutable`前修改一个数据需要做一个深拷贝

```typescript
undefined;
```

使用 Immutable 后：

```typescript
undefined;
```

同理，在`redux`中也可以将数据进行`fromJS`处理

```typescript
undefined;
```
