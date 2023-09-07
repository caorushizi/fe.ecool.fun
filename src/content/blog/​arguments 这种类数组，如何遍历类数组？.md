---
title: ​arguments 这种类数组，如何遍历类数组？
pubDatetime: 2022-06-23T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: b25305f1edd94995a0b54ea2552e678c
description: >-
  类数组对象-----所谓的类数组对象:>拥有一个length属性和若干索引属性的对象举个例子：```typescriptundefined```即便如此，为什么叫做类数组对象呢？那让我们从读写、获取长
difficulty: 1
questionNumber: 99
source: >-
  https://fe.ecool.fun/topic-answer/78f23cb3-8ee7-4f02-a995-e74ce3ad3836?orderBy=updateTime&order=desc&tagId=10
---

## 类数组对象

所谓的类数组对象:

> 拥有一个 length 属性和若干索引属性的对象

举个例子：

```typescript
undefined;
```

即便如此，为什么叫做类数组对象呢？

那让我们从读写、获取长度、遍历三个方面看看这两个对象。

## 读写

```typescript
undefined;
```

## 长度

```typescript
undefined;
```

## 遍历

```typescript
undefined;
```

是不是很像？

那类数组对象可以使用数组的方法吗？比如：

```typescript
undefined;
```

然而上述代码会报错: arrayLike.push is not a function

所以终归还是类数组呐……

## 调用数组方法

如果类数组就是任性的想用数组的方法怎么办呢？

既然无法直接调用，我们可以用 Function.call 间接调用：

```typescript
undefined;
```

## 类数组转数组

在上面的例子中已经提到了一种类数组转数组的方法，再补充三个：

```typescript
undefined;
```

那么为什么会讲到类数组对象呢？以及类数组有什么应用吗？

要说到类数组对象，Arguments 对象就是一个类数组对象。在客户端 JavaScript 中，一些 DOM 方法(document.getElementsByTagName()等)也返回类数组对象。

## Arguments 对象

接下来重点讲讲 Arguments 对象。

Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。

举个例子：

```typescript
undefined;
```

打印结果如下：

![](https://cdn.jsdelivr.net/gh/mqyqingfeng/Blog/Images/arguments.png)

预览

我们可以看到除了类数组的索引属性和 length 属性之外，还有一个 callee 属性，接下来我们一个一个介绍。

## length 属性

Arguments 对象的 length 属性，表示实参的长度，举个例子：

```typescript
undefined;
```

## callee 属性

Arguments 对象的 callee 属性，通过它可以调用函数自身。

讲个闭包经典面试题使用 callee 的解决方法：

```typescript
undefined;
```

接下来讲讲 arguments 对象的几个注意要点：

## arguments 和对应参数的绑定

```typescript
undefined;
```

传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享

除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的。

## 传递参数

将参数从一个函数传递到另一个函数

```typescript
undefined;
```

## 强大的 ES6

使用 ES6 的 ... 运算符，我们可以轻松转成数组。

```typescript
undefined;
```

## 应用

arguments 的应用其实很多，在下个系列，也就是 JavaScript 专题系列中，我们会在 jQuery 的 extend 实现、函数柯里化、递归等场景看见 arguments 的身影。这篇文章就不具体展开了。

如果要总结这些场景的话，暂时能想到的包括：

1.  参数不定长
2.  函数柯里化
3.  递归调用
4.  函数重载 ...
