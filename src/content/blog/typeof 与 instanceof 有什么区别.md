---
title: typeof 与 instanceof 有什么区别
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 57a27f9335cda995df2efa91040609f3
description: >-
  ![](https://static.vue-js.com/3fc158f0-7710-11eb-ab90-d9ae814b240d.png)预览一、typeof--------`typeof`操作符
difficulty: 1.5
questionNumber: 324
source: >-
  https://fe.ecool.fun/topic-answer/4354687c-2600-4b62-98ec-2bef8df9a171?orderBy=updateTime&order=desc&tagId=10
---

![](https://static.vue-js.com/3fc158f0-7710-11eb-ab90-d9ae814b240d.png)

预览

## 一、typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型

使用方法如下：

```typescript
undefined;
```

`operand`表示对象或原始值的表达式，其类型将被返回

举个例子

```typescript
undefined;
```

从上面例子，前 6 个都是基础数据类型。虽然`typeof null`为`object`，但这只是 `JavaScript` 存在的一个悠久 `Bug`，不代表`null` 就是引用数据类型，并且`null` 本身也不是对象

所以，`null` 在 `typeof` 之后返回的是有问题的结果，不能作为判断`null`的方法。如果你需要在 `if` 语句中判断是否为 `null`，直接通过`===null`来判断就好

同时，可以发现引用类型数据，用`typeof`来判断的话，除了`function`会被识别出来之外，其余的都输出`object`

如果我们想要判断一个变量是否存在，可以使用`typeof`：(不能使用`if(a)`， 若`a`未声明，则报错)

```typescript
undefined;
```

## 二、instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

使用如下：

```typescript
undefined;
```

`object`为实例对象，`constructor`为构造函数

构造函数通过`new`可以实例对象，`instanceof` 能判断这个对象是否是之前那个构造函数生成的对象

```typescript
undefined;
```

关于`instanceof`的实现原理，可以参考下面：

```typescript
undefined;
```

也就是顺着原型链去找，直到找到相同的原型对象，返回`true`，否则为`false`

## 三、区别

`typeof`与`instanceof`都是判断数据类型的方法，区别如下：

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而 `typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了 `function` 类型以外，其他的也无法判断

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求

如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]”` 的字符串

如下

```typescript
undefined;
```

了解了`toString`的基本用法，下面就实现一个全局通用的数据类型判断方法

```typescript
undefined;
```

使用如下

```typescript
undefined;
```
