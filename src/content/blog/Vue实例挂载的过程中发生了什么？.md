---
title: Vue实例挂载的过程中发生了什么？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: e271a02fc6cc6e6558cc4c66fa178bf9
description: >-
  ![](https://static.vue-js.com/63194810-3a09-11eb-85f6-6fac77c0c9b3.png)预览一、思考----我们都听过知其然知其所以然这句话那么不
difficulty: 2
questionNumber: 57
source: >-
  https://fe.ecool.fun/topic-answer/41132096-4901-45d1-a453-6119931a083e?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/63194810-3a09-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、思考

我们都听过知其然知其所以然这句话

那么不知道大家是否思考过`new Vue()`这个过程中究竟做了些什么？

过程中是如何完成数据的绑定，又是如何将数据渲染到视图的等等

## 一、分析

首先找到`vue`的构造函数

源码位置：src\\core\\instance\\index.js

```typescript
undefined;
```

`options`是用户传递过来的配置项，如`data、methods`等常用的方法

`vue`构建函数调用`_init`方法，但我们发现本文件中并没有此方法，但仔细可以看到文件下方定定义了很多初始化方法

```typescript
undefined;
```

首先可以看`initMixin`方法，发现该方法在`Vue`原型上定义了`_init`方法

源码位置：src\\core\\instance\\init.js

```typescript
undefined;
```

仔细阅读上面的代码，我们得到以下结论：

- 在调用`beforeCreate`之前，数据初始化并未完成，像`data`、`props`这些属性无法访问到
- 到了`created`的时候，数据已经初始化完成，能够访问`data`、`props`这些属性，但这时候并未完成`dom`的挂载，因此无法访问到`dom`元素
- 挂载方法是调用`vm.$mount`方法

`initState`方法是完成`props/data/method/watch/methods`的初始化

源码位置：src\\core\\instance\\state.js

```typescript
undefined;
```

我们和这里主要看初始化`data`的方法为`initData`，它与`initState`在同一文件上

```typescript
undefined;
```

仔细阅读上面的代码，我们可以得到以下结论：

- 初始化顺序：`props`、`methods`、`data`
- `data`定义的时候可选择函数形式或者对象形式（组件只能为函数形式）

关于数据响应式在这就不展开详细说明

上文提到挂载方法是调用`vm.$mount`方法

源码位置：

```typescript
undefined;
```

阅读上面代码，我们能得到以下结论：

- 不要将根元素放到`body`或者`html`上
- 可以在对象中定义`template/render`或者直接使用`template`、`el`表示元素选择器
- 最终都会解析成`render`函数，调用`compileToFunctions`，会将`template`解析成`render`函数

对`template`的解析步骤大致分为以下几步：

- 将`html`文档片段解析成`ast`描述符
- 将`ast`描述符解析成字符串
- 生成`render`函数

生成`render`函数，挂载到`vm`上后，会再次调用`mount`方法

源码位置：src\\platforms\\web\\runtime\\index.js

```typescript
undefined;
```

调用`mountComponent`渲染组件

```typescript
undefined;
```

阅读上面代码，我们得到以下结论：

- 会触发`boforeCreate`钩子
- 定义`updateComponent`渲染页面视图的方法
- 监听组件数据，一旦发生变化，触发`beforeUpdate`生命钩子

`updateComponent`方法主要执行在`vue`初始化时声明的`render`，`update`方法

`render`的作用主要是生成`vnode`

源码位置：src\\core\\instance\\render.js

```typescript
undefined;
```

`_update`主要功能是调用`patch`，将`vnode`转换为真实`DOM`，并且更新到页面中

源码位置：src\\core\\instance\\lifecycle.js

```typescript
undefined;
```

## 三、结论

- `new Vue`的时候调用会调用`_init`方法

  - 定义 `$set`、 `$get` 、`$delete`、`$watch` 等方法
  - 定义 `$on`、`$off`、`$emit`、`$off` 等事件
  - 定义 `_update`、`$forceUpdate`、`$destroy`生命周期

- 调用`$mount`进行页面的挂载
- 挂载的时候主要是通过`mountComponent`方法
- 定义`updateComponent`更新函数
- 执行`render`生成虚拟`DOM`
- `_update`将虚拟`DOM`生成真实`DOM`结构，并且渲染到页面中
