---
title: js 对象可以使用 for...of 迭代吗？
pubDatetime: 2024-08-14T12:25:07.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: ee207d9a-ac6d-44dd-a8fc-e180fd37be36
description: >-
  JavaScript 对象本身并不能直接使用 for...of 迭代，因为它并不是一个可迭代对象（iterable）。
  但是，如果我们想要遍历对象的属性，可以使用 for...in 循环，例如： const obj = { name: 'John', age: 30,
  city: 'New York' }; for (let prop in obj) { console.log(prop + ':
difficulty: 1.5
questionNumber: 2851
source: https://fe.ecool.fun/topic/ee207d9a-ac6d-44dd-a8fc-e180fd37be36
---

JavaScript **对象本身并不能直接使用 for...of 迭代**，因为它并不是一个可迭代对象（iterable）。

但是，如果我们想要遍历对象的属性，可以使用 for...in 循环，例如：

```js
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let prop in obj) {
  console.log(prop + ': ' + obj[prop]);
}

// 这段代码可以输出：
name: John
age: 30
city: New York
```

需要注意的是，for...in 循环会遍历对象自身的所有可枚举属性，包括非数字键和继承的属性。如果只想遍历对象自身的属性，可以使用 hasOwnProperty() 方法进行判断，例如：

```js
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(prop + ": " + obj[prop]);
  }
}
```

这段代码和上面的代码功能是一样的，但是多了一个 hasOwnProperty() 判断，可以确保只输出对象自身的属性。
