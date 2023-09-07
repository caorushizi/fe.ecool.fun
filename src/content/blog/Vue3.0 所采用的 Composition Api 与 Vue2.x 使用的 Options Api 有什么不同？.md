---
title: Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 6affd673fb1ac767a3d989c46bc6a705
description: >-
  ![](https://static.vue-js.com/8d6dd7b0-6048-11eb-85f6-6fac77c0c9b3.png)预览开始之前----`CompositionAPI`可以说
difficulty: 3
questionNumber: 38
source: >-
  https://fe.ecool.fun/topic-answer/3707a3b3-2330-4833-9c9b-b427887f8ee9?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/8d6dd7b0-6048-11eb-85f6-6fac77c0c9b3.png)

预览

## 开始之前

`Composition API` 可以说是`Vue3`的最大特点，那么为什么要推出`Composition Api`，解决了什么问题？

通常使用`Vue2`开发的项目，普遍会存在以下问题：

- 代码的可读性随着组件变大而变差
- 每一种代码复用的方式，都存在缺点
- TypeScript 支持有限

以上通过使用`Composition Api`都能迎刃而解

## 正文

### 一、Options Api

`Options API`，即大家常说的选项 API，即以`vue`为后缀的文件，通过定义`methods`，`computed`，`watch`，`data`等属性与方法，共同处理页面逻辑

如下图：

![](https://static.vue-js.com/9bf6d9d0-6048-11eb-85f6-6fac77c0c9b3.png)

预览

可以看到`Options`代码编写方式，如果是组件状态，则写在`data`属性上，如果是方法，则写在`methods`属性上...

用组件的选项 (`data`、`computed`、`methods`、`watch`) 组织逻辑在大多数情况下都有效

然而，当组件变得复杂，导致对应属性的列表也会增长，这可能会导致组件难以阅读和理解

### 二、Composition Api

在 Vue3 Composition API 中，组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）

即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API

![](https://static.vue-js.com/acee9200-6048-11eb-ab90-d9ae814b240d.png)

预览

### 三、对比

下面对`Composition Api` 与`Options Api`进行两大方面的比较

- 逻辑组织
- 逻辑复用

#### 逻辑组织

##### Options API

假设一个组件是一个大型组件，其内部有很多处理逻辑关注点（对应下图不用颜色）

![](https://static.vue-js.com/dc83d070-6048-11eb-ab90-d9ae814b240d.png)

预览

可以看到，这种碎片化使得理解和维护复杂组件变得困难

选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块

##### Compostion API

而`Compositon API`正是解决上述问题，将某个逻辑关注点相关的代码全都放在一个函数里，这样当需要修改一个功能时，就不再需要在文件中跳来跳去

下面举个简单例子，将处理`count`属性相关的代码放在同一个函数了

```typescript
undefined;
```

组件上中使用`count`

```typescript
undefined;
```

再来一张图进行对比，可以很直观地感受到 `Composition API` 在逻辑组织方面的优势，以后修改一个属性功能的时候，只需要跳到控制该属性的方法中即可

![](https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png)

预览

#### 逻辑复用

在`Vue2`中，我们是用过`mixin`去复用相同的逻辑

下面举个例子，我们会另起一个`mixin.js`文件

```typescript
undefined;
```

然后在组件中使用

```typescript
undefined;
```

使用单个`mixin`似乎问题不大，但是当我们一个组件混入大量不同的 `mixins` 的时候

```typescript
undefined;
```

会存在两个非常明显的问题：

- 命名冲突
- 数据来源不清晰

现在通过`Compositon API`这种方式改写上面的代码

```typescript
undefined;
```

在组件中使用

```typescript
undefined;
```

可以看到，整个数据来源清晰了，即使去编写更多的 hook 函数，也不会出现命名冲突的问题

### 小结

- 在逻辑组织和逻辑复用方面，`Composition API`是优于`Options API`
- 因为`Composition API`几乎是函数，会有更好的类型推断。
- `Composition API` 对 `tree-shaking` 友好，代码也更容易压缩
- `Composition API`中见不到`this`的使用，减少了`this`指向不明的情况
- 如果是小型组件，可以继续使用`Options API`，也是十分友好的
