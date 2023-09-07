---
title: 谈谈对 this 对象的理解
pubDatetime: 2023-04-02T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3768c3a5cbafbedd555fc774c59f657c
description: >-
  ![](https://static.vue-js.com/46c820d0-74b7-11eb-85f6-6fac77c0c9b3.png)预览一、定义----函数的`this`关键字在`JavaS
difficulty: 2
questionNumber: 33
source: >-
  https://fe.ecool.fun/topic-answer/fe97f51f-1d7d-49b7-acd2-83f345014633?orderBy=updateTime&order=desc&tagId=10
---

![](https://static.vue-js.com/46c820d0-74b7-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、定义

函数的 `this` 关键字在 `JavaScript` 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）

`this` 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

举个例子：

```typescript
undefined;
```

同时，`this`在函数执行过程中，`this`一旦被确定了，就不可以再更改

```typescript
undefined;
```

## 二、绑定规则

根据不同的使用场合，`this`有不同的值，主要分为下面几种情况：

- 默认绑定
- 隐式绑定
- new 绑定
- 显示绑定

### 默认绑定

全局环境中定义`person`函数，内部使用`this`关键字

```typescript
undefined;
```

上述代码输出`Jenny`，原因是调用函数的对象在游览器中位`window`，因此`this`指向`window`，所以输出`Jenny`

注意：

严格模式下，不能将全局对象用于默认绑定，this 会绑定到`undefined`，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象

### 隐式绑定

函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象

```typescript
undefined;
```

这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，`this`指向的也只是它上一级的对象

```typescript
undefined;
```

上述代码中，`this`的上一级对象为`b`，`b`内部并没有`a`变量的定义，所以输出`undefined`

这里再举一种特殊情况

```typescript
undefined;
```

此时`this`指向的是`window`，这里的大家需要记住，`this`永远指向的是最后调用它的对象，虽然`fn`是对象`b`的方法，但是`fn`赋值给`j`时候并没有执行，所以最终指向`window`

### new 绑定

通过构建函数`new`关键字生成一个实例对象，此时`this`指向这个实例对象

```typescript
undefined;
```

上述代码之所以能过输出 1，是因为`new`关键字改变了`this`的指向

这里再列举一些特殊情况：

`new`过程遇到`return`一个对象，此时`this`指向为返回的对象

```typescript
undefined;
```

如果返回一个简单类型的时候，则`this`指向实例对象

```typescript
undefined;
```

注意的是`null`虽然也是对象，但是此时`new`仍然指向实例对象

```typescript
undefined;
```

### 显示修改

`apply()、call()、bind()`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数

```typescript
undefined;
```

关于`apply、call、bind`三者的区别，我们后面再详细说

## 三、箭头函数

在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 `this` 的指向（编译时绑定）

举个例子：

```typescript
undefined;
```

虽然箭头函数的`this`能够在编译的时候就确定了`this`的指向，但也需要注意一些潜在的坑

下面举个例子：

绑定事件监听

```typescript
undefined;
```

上述可以看到，我们其实是想要`this`为点击的`button`，但此时`this`指向了`window`

包括在原型上添加方法时候，此时`this`指向`window`

```typescript
undefined;
```

同样的，箭头函数不能作为构建函数

## 四、优先级

### 隐式绑定 VS 显式绑定

```typescript
undefined;
```

显然，显式绑定的优先级更高

### new 绑定 VS 隐式绑定

```typescript
undefined;
```

可以看到，new 绑定的优先级`>`隐式绑定

### `new`绑定 VS 显式绑定

因为`new`和`apply、call`无法一起使用，但硬绑定也是显式绑定的一种，可以替换测试

```typescript
undefined;
```

`bar`被绑定到 obj1 上，但是`new bar(3)` 并没有像我们预计的那样把`obj1.a`修改为 3。但是，`new`修改了绑定调用`bar()`中的`this`

我们可认为`new`绑定优先级`>`显式绑定

综上，new 绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级
