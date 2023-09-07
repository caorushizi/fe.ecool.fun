---
title: ES6有哪些新特性？
pubDatetime: 2023-04-15T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 938b9c4fd5feacf06efc68b75b9f6b68
description: >-
  ###关于ES6和JavaScript的关系#####1、ES6是对于ES2015+的俗称，也可以说是通常叫法，那么，ES6是什么呢？ES全称是ECMAScript，它是JavaScript基础构建的
difficulty: 2
questionNumber: 3
source: >-
  https://fe.ecool.fun/topic-answer/5e131c75-d26e-4527-8f51-29d842f3c829?orderBy=updateTime&order=desc&tagId=24
---

### 关于 ES6 和 JavaScript 的关系

##### 1、ES6 是对于 ES2015+的俗称，也可以说是通常叫法，那么，ES6 是什么呢？

ES 全称是 ECMAScript，它是 JavaScript 基础构建的一种语言，JavaScript 正是建立在 ECMAScript 语言的基础规范中建立使用的，那么，ECMAScript 的使用，对于 JavaScript 至关重要！

在我的理解中，ECMAScript 是一种语言层面的东西，它只是定义了 JavaScript 以及在它基础之上建立的其他语言的语法规范，而 JavaScript 的语言，更关于一种平台性质在其中。

JavaScript 包括 ECMAScript、DOM、BOM 三个组成部分，DOM 和 BOM 是 web API 提供的接口或者是 JavaScript 和浏览器之间进行交互的部分，实质就是操纵文档元素，进行展示布局，而 ECMAScript 在 JavaScript 中其中语法的作用，它不会去跟文档有直接的关系，但是他的数据处理完成后会通过 web API 展示在文档中。

### ES6 新特性的分类

新特性主要归为四大类：

- 解决原有语法上的一些不足

比如 let 和 const 的块级作用域

- 对原有语法进行增强

比如解构、展开、参数默认值、模板字符串

- 全新的对象、全新的方法、全新的功能

比如 promise、proxy、object 的 assign、is

- 全新的数据类型和数据结构

比如 symbol、set、map

下面具体进行介绍

## 1\. let、const 块级作用域以及和 var 的区别

- let、const 声明的变量，在 for，if 语句中，会形成块级作用域，块级作用域内的变量，不能被作用域外部使用
- let、const 声明变量不再会有声明提升，在变量声明之前使用运行时会报错

```typescript
undefined;
```

- 块级作用域声明变量，会出现“暂时性死区”，块级作用域声明变量前使用变量，将会报错

```typescript
undefined;
```

- const 声明的是一个常量，声明必须初始化

```typescript
undefined;
```

- 如果 const 声明的是基本类型常量，初始化之后不能修改；引用类型的常量，可以修改其成员变量；

```typescript
undefined;
```

- 和 var 的区别

声明方式

变量提升

作用域

初始值

重复定义

var

是

函数级

不需要

允许

let

否

块级

不需要

不允许

const

否

块级

必需

不允许

## 2.解构-快速提取数组/对象中的元素

- **数组解构**
- 单独解构-根据数组索引，将数组解构成单独的元素

```typescript
undefined;
```

- 默认值，解构时可以给变量设置默认值，数组没有这个元素的话

```typescript
undefined;
```

- 剩余解构-用 "...+变量名" 解构剩余参数到新数组，只能用一次

```typescript
undefined;
```

- 实例应用

```typescript
undefined;
```

- **对象解构**
- 单个/多个解构-跟数组解构差不多

```typescript
undefined;
```

- 解构+重命名-给解构出来的变量重命名

```typescript
undefined;
```

- 默认值-给解构变量设置默认值

```typescript
undefined;
```

## 3.模板字符串

用法：使用\`\`将字符串包裹起来

功能：可以换行、插值、使用标签函数进行字符串操作

示例：

- 换行/插值

```typescript
undefined;
```

- 标签函数-可以对模板字符串的字符串和插值进行处理和过滤等操作

```typescript
undefined;
```

## 4\. 字符串扩展方法

- includes-是否包含
- startsWith-是否以什么开始
- endsWith-是否以什么结束

```typescript
undefined;
```

## 5.参数默认值&剩余参数

- 给函数形参设置默认值

```typescript
undefined;
```

- 使用...rest 形式设置剩余形参，支持无限参数

```typescript
undefined;
```

## 6.展开数组

使用...将数组展开

```typescript
undefined;
```

## 7.箭头函数

**特性&优势：**

- 1、简化了函数的写法
- 2、没有 this 机制，this 继承自上一个函数的上下文，如果上一层没有函数，则指向 window
- 3、作为异步回调函数时，可解决 this 指向问题

```typescript
undefined;
```

## 8.对象字面量增强

- 同名属性可以省略 key:value 形式，直接 key，
- 函数可以省略 key：value 形式
- 可以直接 func(),
- 可以使用计算属性，比如：{\[Math.random()\]: value}

```typescript
undefined;
```

## 9.Object.assign(target1, target2, targetN)-复制/合并对象

```typescript
undefined;
```

## 10.Object.is(value1, value2)

作用：比较两个值是否相等

特性：

- 没有隐式转换
- 可以比较+0,-0、NaN

```typescript
undefined;
```

## 11.Proxy(object, handler)

**作用：**

- 代理一个对象的所有，包括读写操作和各种操作的监听

**用法：**

```typescript
undefined;
```

与 Object.definePropert 对比

优势：

- **拥有很多 defineProperty 没有的属性方法，比如：**
  - handler.getPrototypeOf() ---Object.getPrototypeOf 方法的监听器
  - handler.setPrototypeOf() ---Object.setPrototypeOf 方法的监听器。
  - handler.isExtensible() ---Object.isExtensible 方法的监听器。
  - handler.preventExtensions() ---Object.preventExtensions 方法的监听器。
  - handler.getOwnPropertyDescriptor() ---Object.getOwnPropertyDescriptor 方法的监听器。
  - handler.defineProperty() ---Object.defineProperty 方法的监听器。
  - handler.has() ---in 操作符的监听器。
  - handler.get() ---属性读取操作的监听器。
  - handler.set() ---属性设置操作的监听器。
  - handler.deleteProperty() ---delete 操作符的监听器
  - handler.ownKeys() ---Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的监听器。
  - handler.apply() ---函数调用操作的监听器。
  - handler.construct() ---new 操作符的监听器。
- **对数组的监视更方便**
- **以非侵入的访视监管对象的读写**

## 12.Reflect

作用：

集成 Object 操作的所有方法，统一、方便，具体方法如下：

用于对对象的统一操作，集成 Object 相关的所有方法

1、apply：类似 Function.prototype.apply

2、Reflect.construct()

对构造函数进行 new 操作，相当于执行 new target(...args)。

3、Reflect.defineProperty()

和 Object.defineProperty() 类似。

4、Reflect.deleteProperty()

作为函数的 delete 操作符，相当于执行 delete target\[name\]。

5、Reflect.get()

获取对象身上某个属性的值，类似于 target\[name\]。

6、Reflect.getOwnPropertyDescriptor()

类似于 Object.getOwnPropertyDescriptor()。

7、Reflect.getPrototypeOf()

类似于 Object.getPrototypeOf(), 获取目标对象的原型。

8、Reflect.has()

判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。

9、Reflect.isExtensible()

类似于 Object.isExtensible().判断对象是否可扩展，可以添加额外属性

Object.seal(封闭对象)， Object.freeze（冻结对象）是不可扩展的

10、Reflect.ownKeys()

返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受 enumerable 影响).

11、Reflect.preventExtensions()

类似于 Object.preventExtensions()。返回一个 Boolean。

12、Reflect.set()

将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true, 反之返回 false。

13、Reflect.setPrototypeOf()

类似于 Object.setPrototypeOf()。

示例：

```typescript
undefined;
```

## 13.Promise

作用：解决异步编程中回调嵌套过深问题

## 14.class&静态方法&继承

**定义**

- 使用 class 关键字定义类

```typescript
undefined;
```

**方法**

- 实例方法，需要实例化之后才能调用，this 指向实例
- 静态方法，用 static 修饰符修饰，可以直接通过类名调用，不需要实例化，this 不指向实例，而是指向当前类

```typescript
undefined;
```

**继承：子类使用 extends 关键字实现继承，可以继承父类所有属性**

```typescript
undefined;
```

## 15.Set

说明：

Set 是一种类似于数组的数据结构

特性：

- 元素唯一性，不允许重复元素
- 使用 add 增加重复元素，将会被忽略

用途：

- 数组去重
- 数据存储

```typescript
undefined;
```

## 16.Map

说明：

类似 Object，以 key、value 形式存储数据

区别：

Map 键不会隐式转换成字符串，而是保持原有类型

实例：

```typescript
undefined;
```

## 17.Symbol

说明：

JavaScript 第六种原始数据类型，用来定义一个唯一的变量

作用：

- 创建唯一的变量，解决对象键名重复问题
- 为对象、类、函数等创建私有属性
- 修改对象的 toString 标签
- 为对象添加迭代器属性

如何获取对象的 symbol 属性？

- Object.getOwnPropertySymbols(object)

实例

```typescript
undefined;
```

## 18.for...of...

用途：

已统一的方式，遍历所有引用数据类型

特性：

可以随时使用 break 终止遍历，而 forEach 不行

实例：

```typescript
undefined;
```

## 19\. 迭代器模式

作用：通过 Symbol.interator 对外提供统一的接口，获取内部的数据

外部可以通过 for...of...去迭代内部的数据

```typescript
undefined;
```

## 20.Generator 生成器

- Generator
- 函数前添加 \*，生成一个生成器
- 一般配合 yield 关键字使用
- 最大特点，惰性执行，调 next 才会往下执行
- 主要用来解决异步回调过深的问题

```typescript
undefined;
```

## 21.includes 函数-es2016

判断数组是否包含某个元素，包含 NaN，解决 indexOf 无法查找 NaN 问题

```typescript
undefined;
```

## 22\. 运算符-es2016

指数运算

```typescript
undefined;
```

## 23.values 函数-es2017

将对象的值以数组的形式返回

```typescript
undefined;
```

## 24.entries 函数-es2017

将对象以键值对二维数组返回，使之可以使用 for...of...遍历

```typescript
undefined;
```

## 25.Object.getOwnPropertyDescriptors(obj)-es2017

获取对象的描述信息

可以通过获得的描述信息，配合 Object.defineProperties 来完整复制对象，包含 get，set 方法

```typescript
undefined;
```

## 26.padStart, padEnd 函数-es2017

在字符串前，或者后面追加指定字符串

参数：

targetLenght: 填充后的目标长度

padString:填充的字符串

规则：

1、填充的字符串超过目标长度，会在规定长度时被截断

2、填充字符串太短会以空格填充

3、padString 未传值，以空格填充

作用：

一般用来对齐字符串输出

```typescript
undefined;
```
