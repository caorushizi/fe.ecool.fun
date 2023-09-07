---
title: ES6中数组新增了哪些扩展?
pubDatetime: 2023-03-04T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: f513add599fa7fa1c88ac1033525a4f9
description: >-
  ![](https://static.vue-js.com/a156b8d0-53c5-11eb-85f6-6fac77c0c9b3.png)预览一、扩展运算符的应用----------ES6通过扩展
difficulty: 1
questionNumber: 6
source: >-
  https://fe.ecool.fun/topic-answer/4a0df14c-048b-47cc-a18f-1c9b36f54e90?orderBy=updateTime&order=desc&tagId=24
---

![](https://static.vue-js.com/a156b8d0-53c5-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、扩展运算符的应用

ES6 通过扩展元素符`...`，好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列

```typescript
undefined;
```

主要用于函数调用的时候，将一个数组变为参数序列

```typescript
undefined;
```

可以将某些数据结构转为数组

```typescript
undefined;
```

能够更简单实现数组复制

```typescript
undefined;
```

数组的合并也更为简洁了

```typescript
undefined;
```

注意：通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

下面看个例子就清楚多了

```typescript
undefined;
```

扩展运算符可以与解构赋值结合起来，用于生成数组

```typescript
undefined;
```

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

```typescript
undefined;
```

可以将字符串转为真正的数组

```typescript
undefined;
```

定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组

```typescript
undefined;
```

如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错

```typescript
undefined;
```

## 二、构造函数新增的方法

关于构造函数，数组新增的方法有如下：

- Array.from()
- Array.of()

### Array.from()

将两类对象转为真正的数组：类似数组的对象和可遍历`（iterable）`的对象（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）

```typescript
undefined;
```

还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组

```typescript
undefined;
```

### Array.of()

用于将一组值，转换为数组

```typescript
undefined;
```

没有参数的时候，返回一个空数组

当参数只有一个的时候，实际上是指定数组的长度

参数个数不少于 2 个时，`Array()`才会返回由参数组成的新数组

```typescript
undefined;
```

### 三、实例对象新增的方法

关于数组实例对象新增的方法有如下：

- copyWithin()
- find()、findIndex()
- fill()
- entries()，keys()，values()
- includes()
- flat()，flatMap()

### copyWithin()

将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

参数如下：

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

```typescript
undefined;
```

### find()、findIndex()

`find()`用于找出第一个符合条件的数组成员

参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组

```typescript
undefined;
```

`findIndex`返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`

```typescript
undefined;
```

这两个方法都可以接受第二个参数，用来绑定回调函数的`this`对象。

```typescript
undefined;
```

### fill()

使用给定值，填充一个数组

```typescript
undefined;
```

还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置

```typescript
undefined;
```

注意，如果填充的类型为对象，则是浅拷贝

### entries()，keys()，values()

`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历

```typescript
undefined;
```

### includes()

用于判断数组是否包含给定的值

```typescript
undefined;
```

方法的第二个参数表示搜索的起始位置，默认为`0`

参数为负数则表示倒数的位置

```typescript
undefined;
```

### flat()，flatMap()

将数组扁平化处理，返回一个新数组，对原数据没有影响

```typescript
undefined;
```

`flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为 1

```typescript
undefined;
```

`flatMap()`方法对原数组的每个成员执行一个函数相当于执行`Array.prototype.map()`，然后对返回值组成的数组执行`flat()`方法。该方法返回一个新数组，不改变原数组

```typescript
undefined;
```

`flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`

### 四、数组的空位

数组的空位指，数组的某一个位置没有任何值

ES6 则是明确将空位转为`undefined`，包括`Array.from`、扩展运算符、`copyWithin()`、`fill()`、`entries()`、`keys()`、`values()`、`find()`和`findIndex()`

建议大家在日常书写中，避免出现空位

### 五、排序稳定性

将`sort()`默认设置为稳定的排序算法

```typescript
undefined;
```

排序结果中，`straw`在`spork`的前面，跟原始顺序一致
