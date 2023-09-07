---
title: ES6中新增的Set、Map两种数据结构怎么理解?
pubDatetime: 2023-04-02T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 8ba488fc29a5eae893158b5d0f91fd05
description: >-
  ![](https://static.vue-js.com/2b947d00-560c-11eb-85f6-6fac77c0c9b3.png)预览如果要用一句来描述，我们可以说`Set`是一种叫做集合
difficulty: 2
questionNumber: 4
source: >-
  https://fe.ecool.fun/topic-answer/4232c372-316f-4a53-99b9-6d9299b7e91f?orderBy=updateTime&order=desc&tagId=24
---

![](https://static.vue-js.com/2b947d00-560c-11eb-85f6-6fac77c0c9b3.png)

预览

如果要用一句来描述，我们可以说

`Set`是一种叫做集合的数据结构，`Map`是一种叫做字典的数据结构

什么是集合？什么又是字典？

- 集合  
  是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合
- 字典  
  是一些元素的集合。每个元素有一个称作 key 的域，不同元素的 key 各不相同

区别？

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以\[值，值\]的形式存储元素，字典是以\[键，值\]的形式存储

## 一、Set

`Set`是`es6`新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

`Set`本身是一个构造函数，用来生成 Set 数据结构

```typescript
undefined;
```

### 增删改查

`Set`的实例关于增删改查的方法：

- add()
- delete()
- has()
- clear()

### add()

添加某个值，返回 `Set` 结构本身

当添加实例中已经存在的元素，`set`不会进行处理添加

```typescript
undefined;
```

### delete()

删除某个值，返回一个布尔值，表示删除是否成功

```typescript
undefined;
```

### has()

返回一个布尔值，判断该值是否为`Set`的成员

```typescript
undefined;
```

### clear()

清除所有成员，没有返回值

```typescript
undefined;
```

### 遍历

`Set`实例遍历的方法有如下：

关于遍历的方法，有如下：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

`Set`的遍历顺序就是插入顺序

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象

```typescript
undefined;
```

`forEach()`用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的`forEach`方法有第二个参数，用于绑定处理函数的`this`

```typescript
undefined;
```

扩展运算符和 `Set` 结构相结合实现数组或字符串去重

```typescript
undefined;
```

实现并集、交集、和差集

```typescript
undefined;
```

## 二、Map

`Map`类型是键值对的有序列表，而键和值都可以是任意类型

`Map`本身是一个构造函数，用来生成 `Map` 数据结构

```typescript
undefined;
```

### 增删改查

`Map` 结构的实例针对增删改查有以下属性和操作方法：

- size 属性
- set()
- get()
- has()
- delete()
- clear()

### size

`size`属性返回 Map 结构的成员总数。

```typescript
undefined;
```

### set()

设置键名`key`对应的键值为`value`，然后返回整个 Map 结构

如果`key`已经有值，则键值会被更新，否则就新生成该键

同时返回的是当前`Map`对象，可采用链式写法

```typescript
undefined;
```

### get()

`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`

```typescript
undefined;
```

### has()

`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

```typescript
undefined;
```

### delete()

`delete`方法删除某个键，返回`true`。如果删除失败，返回`false`

```typescript
undefined;
```

### clear()

`clear`方法清除所有成员，没有返回值

```typescript
undefined;
```

### 遍历

`Map` 结构原生提供三个遍历器生成函数和一个遍历方法：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

遍历顺序就是插入顺序

```typescript
undefined;
```

## 三、WeakSet 和 WeakMap

### WeakSet

创建`WeakSet`实例

```typescript
undefined;
```

`WeakSet` 可以接受一个具有 `Iterable` 接口的对象作为参数

```typescript
undefined;
```

在`API`中`WeakSet`与`Set`有两个区别：

- 没有遍历操作的`API`
- 没有`size`属性

`WeackSet`只能成员只能是引用类型，而不能是其他类型的值

```typescript
undefined;
```

`WeakSet` 里面的引用只要在外部消失，它在 `WeakSet` 里面的引用就会自动消失

### WeakMap

`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合

在`API`中`WeakMap`与`Map`有两个区别：

- 没有遍历操作的`API`
- 没有`clear`清空方法

```typescript
undefined;
```

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名

```typescript
undefined;
```

`WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

举个场景例子：

在网页的 DOM 元素上添加数据，就可以使用`WeakMap`结构，当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除

```typescript
undefined;
```

注意：`WeakMap` 弱引用的只是键名，而不是键值。键值依然是正常引用

下面代码中，键值`obj`会在`WeakMap`产生新的引用，当你修改`obj`不会影响到内部

```typescript
undefined;
```
