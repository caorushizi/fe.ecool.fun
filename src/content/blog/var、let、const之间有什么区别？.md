---
title: var、let、const之间有什么区别？
pubDatetime: 2023-04-24T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: e28c9c225a6a725d7f9638bfa80cce82
description: >-
  一、var-----在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量注意：顶层对象，在浏览器环境指的是`window`对象，在`Node`指的是`glob
difficulty: 1.5
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/c843a307-4934-4fa2-9c16-9f06484b0021?orderBy=updateTime&order=desc&tagId=24
---

## 一、var

在 ES5 中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量

注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象

```typescript
undefined;
```

使用`var`声明的变量存在变量提升的情况

```typescript
undefined;
```

在编译阶段，编译器会将其变成以下执行

```typescript
undefined;
```

使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明

```typescript
undefined;
```

在函数中使用使用`var`声明变量时候，该变量是局部的

```typescript
undefined;
```

而如果在函数内不使用`var`，该变量是全局的

```typescript
undefined;
```

## 二、let

`let`是`ES6`新增的命令，用来声明变量

用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效

```typescript
undefined;
```

不存在变量提升

```typescript
undefined;
```

这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误

只要块级作用域内存在`let`命令，这个区域就不再受外部影响

```typescript
undefined;
```

使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”

最后，`let`不允许在相同作用域中重复声明

```typescript
undefined;
```

注意的是相同作用域，下面这种情况是不会报错的

```typescript
undefined;
```

因此，我们不能在函数内部重新声明参数

```typescript
undefined;
```

## 三、const

`const`声明一个只读的常量，一旦声明，常量的值就不能改变

```typescript
undefined;
```

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值

```typescript
undefined;
```

如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错

```typescript
undefined;
```

`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量

对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变

```typescript
undefined;
```

其它情况，`const`与`let`一致

## 四、区别

`var`、`let`、`const`三者区别可以围绕下面五点展开：

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用

### 变量提升

`var` 声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined`

// 2023.4.25 更新

`let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

let / const 不存在变量提升是不完全正确的，只能说由于暂时性死区的存在使得我们无法直观感受到变量提升的效果。

let 和 const 定义的变量都会被提升，但是不会被初始化，不能被引用，不会像 var 定义的变量那样，初始值为 undefined。

当进入 let 变量的作用域时，会立即给它创建存储空间，但是不会对它进行初始化。

变量的赋值可以分为三个阶段：

- 创建变量，在内存中开辟空间
- 初始化变量，将变量初始化为 undefined
- 真正赋值

关于 let、var 和 function：

- let 的「创建」过程被提升了，但是初始化没有提升。
- var 的「创建」和「初始化」都被提升了。
- function 的「创建」「初始化」和「赋值」都被提升了。

```typescript
undefined;
```

### 暂时性死区

`var`不存在暂时性死区

`let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

```typescript
undefined;
```

### 块级作用域

`var`不存在块级作用域

`let`和`const`存在块级作用域

```typescript
undefined;
```

### 重复声明

`var`允许重复声明变量

`let`和`const`在同一作用域不允许重复声明变量

```typescript
undefined;
```

### 修改声明的变量

`var`和`let`可以

`const`声明一个只读的常量。一旦声明，常量的值就不能改变

```typescript
undefined;
```

### 使用

能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`
