---
title: 说说new操作符具体干了什么？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 97f1ed85f8c8ed5c4d75769b7f06eab9
description: >-
  ![](https://static.vue-js.com/880d0010-7a39-11eb-85f6-6fac77c0c9b3.png)预览一、是什么-----在`JavaScript`中，`n
difficulty: 2
questionNumber: 102
source: >-
  https://fe.ecool.fun/topic-answer/cbbef7f1-c87e-4c3c-9f0a-c8c2f0683075?orderBy=updateTime&order=desc&tagId=26
---

![](https://static.vue-js.com/880d0010-7a39-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、是什么

在`JavaScript`中，`new`操作符用于创建一个给定构造函数的实例对象

例子

```typescript
undefined;
```

从上面可以看到：

- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数中的属性
- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

现在在构建函数中显式加上返回值，并且这个返回值是一个原始类型

```typescript
undefined;
```

可以发现，构造函数中返回一个原始值，然而这个返回值并没有作用

下面在构造函数中返回一个对象

```typescript
undefined;
```

从上面可以发现，构造函数如果返回值为一个对象，那么这个返回值会被正常使用

## 二、流程

从上面介绍中，我们可以看到`new`关键字主要做了以下的工作：

- 创建一个新的对象`obj`
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的`this`绑定到新建的对象`obj`上
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

举个例子：

```typescript
undefined;
```

流程图如下：

![](https://static.vue-js.com/b429b990-7a39-11eb-85f6-6fac77c0c9b3.png)

预览

## 三、手写 new 操作符

现在我们已经清楚地掌握了`new`的执行过程

那么我们就动手来实现一下`new`

```typescript
undefined;
```

测试一下

```typescript
undefined;
```

可以发现，代码虽然很短，但是能够模拟实现`new`
