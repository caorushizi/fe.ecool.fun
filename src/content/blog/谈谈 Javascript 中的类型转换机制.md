---
title: 谈谈 Javascript 中的类型转换机制
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 99729468025f43809d757d125c1f40d9
description: >-
  ![](https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png)预览一、概述----`JS`中有六种简单数据类型：`und
difficulty: 2
questionNumber: 330
source: >-
  https://fe.ecool.fun/topic-answer/5eb78861-d964-4825-8531-316eca1df596?orderBy=updateTime&order=desc&tagId=10
---

![](https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、概述

`JS` 中有六种简单数据类型：`undefined`、`null`、`boolean`、`string`、`number`、`symbol`（`BigInt`处理 stage-4 阶段，不考虑），以及引用类型：`object`

但是我们在声明的时候只有一种数据类型，只有到运行期间才会确定当前类型

```typescript
undefined;
```

上面代码中，`x`的值在编译阶段是无法获取的，只有等到程序运行时才能知道

虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制

常见的类型转换有：

- 强制转换（显示转换）
- 自动转换（隐式转换）

## 二、显示转换

显示转换，即我们很清楚可以看到这里发生了类型的转变，常见的方法有：

- Number()
- parseInt()
- String()
- Boolean()

### Number()

将任意类型的值转化为数值

先给出类型转换规则：

![](https://static.vue-js.com/915b7300-6692-11eb-ab90-d9ae814b240d.png)

预览

实践一下：

```typescript
undefined;
```

从上面可以看到，`Number`转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为`NaN`

### parseInt()

`parseInt`相比`Number`，就没那么严格了，`parseInt`函数逐个解析字符，遇到不能转换的字符就停下来

```typescript
undefined;
```

### String()

可以将任意类型的值转化成字符串

给出转换规则图：

![](https://static.vue-js.com/48dd8eb0-6692-11eb-85f6-6fac77c0c9b3.png)

预览

实践一下：

```typescript
undefined;
```

### Boolean()

可以将任意类型的值转为布尔值，转换规则如下：

![](https://static.vue-js.com/53bdad10-6692-11eb-ab90-d9ae814b240d.png)

预览

实践一下：

```typescript
undefined;
```

## 三、隐式转换

在隐式转换中，我们可能最大的疑惑是 ：何时发生隐式转换？

我们这里可以归纳为两种情况发生隐式转换的场景：

- 比较运算（`==`、`!=`、`>`、`<`）、`if`、`while`需要布尔值地方
- 算术运算（`+`、`-`、`*`、`/`、`%`）

除了上面的场景，还要求运算符两边的操作数不是同一类型

### 自动转换为布尔值

在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean`函数

可以得出个小结：

- undefined
- null
- false
- +0
- \-0
- NaN
- ""

除了上面几种会被转化成`false`，其他都换被转化成`true`

### 自动转换成字符串

遇到预期为字符串的地方，就会将非字符串的值自动转为字符串

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作

```typescript
undefined;
```

### 自动转换成数值

除了`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值

```typescript
undefined;
```

`null`转为数值时，值为`0` 。`undefined`转为数值时，值为`NaN`
