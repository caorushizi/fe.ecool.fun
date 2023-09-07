---
title: 如果使用Vue3.0实现一个 Modal，你会怎么进行设计？
pubDatetime: 2022-01-16T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 31e84c7dc4f83a2c503b9a96b3a55828
description: >-
  ![](https://static.vue-js.com/e294c660-6370-11eb-ab90-d9ae814b240d.png)预览一、组件设计------组件就是把图形、非图形的各种逻
difficulty: 3.5
questionNumber: 34
source: >-
  https://fe.ecool.fun/topic-answer/977b3a64-29e7-4085-a05a-26e78bdefcea?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/e294c660-6370-11eb-ab90-d9ae814b240d.png)

预览

## 一、组件设计

组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式

现在有一个场景，点击新增与编辑都弹框出来进行填写，功能上大同小异，可能只是标题内容或者是显示的主体内容稍微不同

这时候就没必要写两个组件，只需要根据传入的参数不同，组件显示不同内容即可

这样，下次开发相同界面程序时就可以写更少的代码，意义着更高的开发效率，更少的 `Bug` 和更少的程序体积

## 二、需求分析

实现一个`Modal`组件，首先确定需要完成的内容：

- 遮罩层
- 标题内容
- 主体内容
- 确定和取消按钮

主体内容需要灵活，所以可以是字符串，也可以是一段 `html` 代码

特点是它们在当前`vue`实例之外独立存在，通常挂载于`body`之上

除了通过引入`import`的形式，我们还可通过`API`的形式进行组件的调用

还可以包括配置全局样式、国际化、与`typeScript`结合

## 三、实现流程

首先看看大致流程：

- 目录结构
- 组件内容
- 实现 API 形式
- 事件处理
- 其他完善

### 目录结构

`Modal`组件相关的目录结构

    ├── plugins
    │   └── modal
    │       ├── Content.tsx // 维护 Modal 的内容，用于 h 函数和 jsx 语法
    │       ├── Modal.vue // 基础组件
    │       ├── config.ts // 全局默认配置
    │       ├── index.ts // 入口
    │       ├── locale // 国际化相关
    │       │   ├── index.ts
    │       │   └── lang
    │       │       ├── en-US.ts
    │       │       ├── zh-CN.ts
    │       │       └── zh-TW.ts
    │       └── modal.type.ts // ts类型声明相关

因为 Modal 会被 `app.use(Modal)` 调用作为一个插件，所以都放在`plugins`目录下

### 组件内容

首先实现`modal.vue`的主体显示内容大致如下

```typescript
undefined;
```

最外层上通过 Vue3 `Teleport` 内置组件进行包裹，其相当于传送门，将里面的内容传送至`body`之上

并且从`DOM`结构上来看，把`modal`该有的内容（遮罩层、标题、内容、底部按钮）都实现了

关于主体内容

```typescript
undefined;
```

可以看到根据传入`content`的类型不同，对应显示不同得到内容

最常见的则是通过调用字符串和默认插槽的形式

```typescript
undefined;
```

通过 API 形式调用`Modal`组件的时候，`content`可以使用下面两种

- h 函数

```typescript
undefined;
```

- JSX

```typescript
undefined;
```

### 实现 API 形式

那么组件如何实现`API`形式调用`Modal`组件呢？

在`Vue2`中，我们可以借助`Vue`实例以及`Vue.extend`的方式获得组件实例，然后挂载到`body`上

```typescript
undefined;
```

虽然`Vue3`移除了`Vue.extend`方法，但可以通过`createVNode`实现

```typescript
undefined;
```

在`Vue2`中，可以通过`this`的形式调用全局 API

```typescript
undefined;
```

而在 Vue3 的 `setup` 中已经没有 `this` 概念了，需要调用`app.config.globalProperties`挂载到全局

```typescript
undefined;
```

### 事件处理

下面再看看看`Modal`组件内部是如何处理「确定」「取消」事件的，既然是`Vue3`，当然采用`Compositon API` 形式

```typescript
undefined;
```

在上面代码中，可以看得到除了使用传统`emit`的形式使父组件监听，还可通过`_hub`属性中添加 `on-cancel`，`on-confirm`方法实现在`API`中进行监听

```typescript
undefined;
```

下面再来目睹下`_hub`是如何实现

```typescript
undefined;
```

### 其他完善

关于组件实现国际化、与`typsScript`结合，大家可以根据自身情况在此基础上进行更改
