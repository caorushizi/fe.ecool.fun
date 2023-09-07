---
title: ES6中对象新增了哪些扩展?
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 7e9a75e67e11694c4fc209cc5a759405
description: >-
  ![](https://static.vue-js.com/4da4dd40-5427-11eb-ab90-d9ae814b240d.png)预览一、属性的简写-------ES6中，当对象键名与对应
difficulty: 1.5
questionNumber: 32
source: >-
  https://fe.ecool.fun/topic-answer/593b09fd-094f-44b7-a375-6ddc393113a5?orderBy=updateTime&order=desc&tagId=24
---

![](https://static.vue-js.com/4da4dd40-5427-11eb-ab90-d9ae814b240d.png)

预览

## 一、属性的简写

ES6 中，当对象键名与对应值名相等的时候，可以进行简写

```typescript
undefined;
```

方法也能够进行简写

```typescript
undefined;
```

在函数内作为返回值，也会变得方便很多

```typescript
undefined;
```

注意：简写的对象方法不能用作构造函数，否则会报错

```typescript
undefined;
```

## 二、属性名表达式

ES6 允许字面量定义对象时，将表达式放在括号内

```typescript
undefined;
```

表达式还可以用于定义方法名

```typescript
undefined;
```

注意，属性名表达式与简洁表示法，不能同时使用，会报错

```typescript
undefined;
```

注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串`[object Object]`

```typescript
undefined;
```

## 三、super 关键字

`this`关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字`super`，指向当前对象的原型对象

```typescript
undefined;
```

## 四、扩展运算符的应用

在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面

```typescript
undefined;
```

注意：解构赋值必须是最后一个参数，否则会报错

解构赋值是浅拷贝

```typescript
undefined;
```

对象的扩展运算符等同于使用`Object.assign()`方法

## 五、属性的遍历

ES6 一共有 5 种方法可以遍历对象的属性。

- for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
- Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
- Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
- Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名
- Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

上述遍历，都遵守同样的属性遍历的次序规则：

- 首先遍历所有数值键，按照数值升序排列
- 其次遍历所有字符串键，按照加入时间升序排列
- 最后遍历所有 Symbol 键，按照加入时间升序排

```typescript
undefined;
```

## 六、对象新增的方法

关于对象新增的方法，分别有以下：

- Object.is()
- Object.assign()
- Object.getOwnPropertyDescriptors()
- Object.setPrototypeOf()，Object.getPrototypeOf()
- Object.keys()，Object.values()，Object.entries()
- Object.fromEntries()

### Object.is()

严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身

```typescript
undefined;
```

### Object.assign()

`Object.assign()`方法用于对象的合并，将源对象`source`的所有可枚举属性，复制到目标对象`target`

`Object.assign()`方法的第一个参数是目标对象，后面的参数都是源对象

```typescript
undefined;
```

注意：`Object.assign()`方法是浅拷贝，遇到同名属性会进行替换

### Object.getOwnPropertyDescriptors()

返回指定对象所有自身属性（非继承属性）的描述对象

```typescript
undefined;
```

### Object.setPrototypeOf()

`Object.setPrototypeOf`方法用来设置一个对象的原型对象

```typescript
undefined;
```

### Object.getPrototypeOf()

用于读取一个对象的原型对象

```typescript
undefined;
```

### Object.keys()

返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组

```typescript
undefined;
```

### Object.values()

返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组

```typescript
undefined;
```

### Object.entries()

返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组

```typescript
undefined;
```

### Object.fromEntries()

用于将一个键值对数组转为对象

```typescript
undefined;
```
