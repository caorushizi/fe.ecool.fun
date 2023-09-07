---
title: Vue.observable是什么？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: bb3e2297fd34cff3e27e6965340e7586
description: >-
  ![](https://static.vue-js.com/193782e0-3e7b-11eb-ab90-d9ae814b240d.png)预览一、Observable是什么------------
difficulty: 2
questionNumber: 49
source: >-
  https://fe.ecool.fun/topic-answer/adaa5c02-f04c-4247-b6d6-0fe3f1bd439c?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/193782e0-3e7b-11eb-ab90-d9ae814b240d.png)

预览

## 一、Observable 是什么

`Observable` 翻译过来我们可以理解成**可观察的**

我们先来看一下其在`Vue`中的定义

> `Vue.observable`，让一个对象变成响应式数据。`Vue` 内部会用它来处理 `data` 函数返回的对象

返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器

```typescript
undefined;
```

其作用等同于

```typescript
undefined;
```

在 `Vue 2.x` 中，被传入的对象会直接被 `Vue.observable` 变更，它和被返回的对象是同一个对象

在 `Vue 3.x` 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的

## 二、使用场景

在非父子组件通信时，可以使用通常的`bus`或者使用`vuex`，但是实现的功能不是太复杂，而使用上面两个又有点繁琐。这时，`observable`就是一个很好的选择

创建一个`js`文件

```typescript
undefined;
```

在`.vue`文件中直接使用即可

```typescript
undefined;
```

## 三、原理分析

源码位置：src\\core\\observer\\index.js

```typescript
undefined;
```

`Observer`类

```typescript
undefined;
```

`walk`函数

```typescript
undefined;
```

`defineReactive`方法

```typescript
undefined;
```
