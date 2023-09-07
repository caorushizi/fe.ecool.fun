---
title: ES5怎么实现继承
pubDatetime: 2022-04-05T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d8c3041470b0b6334ab0094764e44720
description: >-
  前言--继承这个概念在面向对象编程思想里面十分重要，也是面试必考的考点之一。javascript的继承主要是依托其原型与原型链的概念来实现的。>ECMAscript将原型链作为实现继承的主要方法。先来
difficulty: 3
questionNumber: 122
source: >-
  https://fe.ecool.fun/topic-answer/9b19862a-b226-4a56-95d4-5ab4b05024bb?orderBy=updateTime&order=desc&tagId=10
---

## 前言

继承这个概念在面向对象编程思想里面十分重要，也是面试必考的考点之一。

javascript 的继承主要是依托其原型与原型链的概念来实现的。

> ECMAscript 将原型链作为实现继承的主要方法。

## 先来看看 ES6 的实现

ES6 提供了 Class 关键字来实现类的定义，Class 可以通过 extends 关键字实现继承，让子类继承父类的属性和方法。

咱们重点讲一下 ES5 的四种常用的实现方式。

## ES5 实现的四种方式

### 1\. 原型链继承

原型链继承的原理很简单，直接让子类的原型对象指向父类实例，当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承

```typescript
undefined;
```

#### 缺陷

1.  由于所有 Student 实例原型都指向同一个 Person 实例, 因此对某个 Student 实例的来自父类的引用类型变量修改会影响所有的 Student 实例

例如：

```typescript
undefined;
```

2.  在创建子类实例时无法向父类构造传参, 即没有实现 super()的功能

> 那么能不能实现 super()功能呢？大家有兴趣可以思考下。

### 2\. 构造函数继承

构造函数继承，即在子类的构造函数中执行父类的构造函数，并为其绑定子类的 this，让父类的构造函数把成员属性和方法都挂到子类的 this 上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参。

```typescript
undefined;
```

#### 缺陷

- 继承不到父类原型上的属性和方法

  Students 类实际上是调用 Person 类来生成的实例

  ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/443b5a4914794b93a5976ccab98285dd~tplv-k3u1fbpfcp-watermark.image?)

  预览

  能否交加修改让其获取到 Person 原型上的属性和方法呢？

  ```typescript
  undefined;
  ```

  这是这样顾此失彼，student 的构造方法变成了 Person,这显然违背了我们的初衷。

  ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7acb4551fab446c6a131b17c99b12f3b~tplv-k3u1fbpfcp-watermark.image?)

  预览

### 3\. 组合式继承

组合是继承结合了原型集成和构造函数继承的特点。

```typescript
undefined;
```

#### 缺陷

- 每次创建子类实例都执行了两次构造函数(Person.apply 和 new Person())，虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d7e70a265e7466fb678a8d1f2b4ccd2~tplv-k3u1fbpfcp-watermark.image?)

预览

### 4\. 寄生式组合继承

解决构造函数被执行两次的问题, 我们将指向父类实例改为指向父类原型, 减去一次构造函数的执行。

```typescript
undefined;
```

这是目前 ES5 中比较成熟的继承方式了。

## 总结

- 说到 js 继承，最开始想到的应该是是原型链继承，通过把子类实例的原型指向父类实例来继承父类的属性和方法，但原型链继承的缺陷在于对子类实例继承的引用类型的修改会影响到所有的实例对象以及无法向父类的构造方法传参。
- 构造函数继承, 通过在子类构造函数中调用父类构造函数并传入子类 this 来获取父类的属性和方法，但构造函数继承也存在缺陷，构造函数继承不能继承到父类原型链上的属性和方法。
- 后面有了组合式继承，但也有了新的问题，每次都会执行两次父类的构造方法，最终有了寄生式组合式继承。
