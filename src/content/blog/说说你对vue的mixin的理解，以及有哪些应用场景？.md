---
title: 说说你对vue的mixin的理解，以及有哪些应用场景？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: eea497ba813d837364b20795f64d4b16
description: >-
  ![](https://static.vue-js.com/8a739c90-3b7f-11eb-85f6-6fac77c0c9b3.png)预览一、mixin是什么----------`Mixin`
difficulty: 2
questionNumber: 51
source: >-
  https://fe.ecool.fun/topic-answer/c1bcc1f1-3375-4c66-b3af-1ba1b937c01f?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/8a739c90-3b7f-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、mixin 是什么

`Mixin`是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问`mixin`类的方法而不必成为其子类

`Mixin`类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂

### Vue 中的 mixin

先来看一下官方定义

> `mixin`（混入），提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。

本质其实就是一个`js`对象，它可以包含我们组件中任意功能选项，如`data`、`components`、`methods` 、`created`、`computed`等等

我们只要将共用的功能以对象的方式传入 `mixins`选项中，当组件使用 `mixins`对象时所有`mixins`对象的选项都将被混入该组件本身的选项中来

在`Vue`中我们可以**局部混入**跟**全局混入**

### 局部混入

定义一个`mixin`对象，有组件`options`的`data`、`methods`属性

```typescript
undefined;
```

组件通过`mixins`属性调用`mixin`对象

```typescript
undefined;
```

该组件在使用的时候，混合了`mixin`里面的方法，在自动执行`create`生命钩子，执行`hello`方法

### 全局混入

通过`Vue.mixin()`进行全局的混入

```typescript
undefined;
```

使用全局混入需要特别注意，因为它会影响到每一个组件实例（包括第三方组件）

PS：全局混入常用于插件的编写

### 注意事项：

当组件存在与`mixin`对象相同的选项的时候，进行递归合并的时候组件的选项会覆盖`mixin`的选项

但是如果相同选项为生命周期钩子的时候，会合并成一个数组，先执行`mixin`的钩子，再执行组件的钩子

## 二、使用场景

在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立

这时，可以通过`Vue`的`mixin`功能将相同或者相似的代码提出来

举个例子

定义一个`modal`弹窗组件，内部通过`isShowing`来控制显示

```typescript
undefined;
```

定义一个`tooltip`提示框，内部通过`isShowing`来控制显示

```typescript
undefined;
```

通过观察上面两个组件，发现两者的逻辑是相同，代码控制显示也是相同的，这时候`mixin`就派上用场了

首先抽出共同代码，编写一个`mixin`

```typescript
undefined;
```

两个组件在使用上，只需要引入`mixin`

```typescript
undefined;
```

通过上面小小的例子，让我们知道了`Mixin`对于封装一些可复用的功能如此有趣、方便、实用

## 三、源码分析

首先从`Vue.mixin`入手

源码位置：/src/core/global-api/mixin.js

```typescript
undefined;
```

主要是调用`merOptions`方法

源码位置：/src/core/util/options.js

```typescript
undefined;
```

从上面的源码，我们得到以下几点：

- 优先递归处理 `mixins`
- 先遍历合并`parent` 中的`key`，调用`mergeField`方法进行合并，然后保存在变量`options`
- 再遍历 `child`，合并补上 `parent` 中没有的`key`，调用`mergeField`方法进行合并，保存在变量`options`
- 通过 `mergeField` 函数进行了合并

下面是关于`Vue`的几种类型的合并策略

- 替换型
- 合并型
- 队列型
- 叠加型

### 替换型

替换型合并有`props`、`methods`、`inject`、`computed`

```typescript
undefined;
```

同名的`props`、`methods`、`inject`、`computed`会被后来者代替

### 合并型

和并型合并有：`data`

```typescript
undefined;
```

`mergeData`函数遍历了要合并的 data 的所有属性，然后根据不同情况进行合并：

- 当目标 data 对象不包含当前属性时，调用 `set` 方法进行合并（set 方法其实就是一些合并重新赋值的方法）
- 当目标 data 对象包含当前属性并且当前值为纯对象时，递归合并当前对象值，这样做是为了防止对象存在新增属性

### 队列性

队列性合并有：全部生命周期和`watch`

```typescript
undefined;
```

生命周期钩子和`watch`被合并为一个数组，然后正序遍历一次执行

### 叠加型

叠加型合并有：`component`、`directives`、`filters`

```typescript
undefined;
```

叠加型主要是通过原型链进行层层的叠加

### 小结：

- 替换型策略有`props`、`methods`、`inject`、`computed`，就是将新的同名参数替代旧的参数
- 合并型策略是`data`, 通过`set`方法进行合并和重新赋值
- 队列型策略有生命周期函数和`watch`，原理是将函数存入一个数组，然后正序遍历依次执行
- 叠加型有`component`、`directives`、`filters`，通过原型链进行层层的叠加
