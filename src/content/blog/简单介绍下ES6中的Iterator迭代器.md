---
title: 简单介绍下ES6中的Iterator迭代器
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 467e6471a8f2187daf4e1b402373149d
description: >-
  想必大家使用过for循环、while循环等，遍历Array获取其中的值，那其他数据结构如何通过遍历获取呢？或者这样说，是否可以提供一个统一的访问机制？来访问Object、Map、Set等。轮到Iter
difficulty: 3
questionNumber: 19
source: >-
  https://fe.ecool.fun/topic-answer/c188ea2f-8882-413c-af52-3ccce36f35cf?orderBy=updateTime&order=desc&tagId=24
---

想必大家使用过 for 循环、while 循环等，遍历 Array 获取其中的值，那其他数据结构如何通过遍历获取呢？或者这样说，是否可以提供一个统一的访问机制？来访问 Object、Map、Set 等。

轮到 Iterator 迭代器出场，Iterator 迭代器就是为了解决这个问题，它提供统一的接口，为不同的数据结构提供统一的访问机制。(目前 Map、Set、Array 支持 Iterator)。

顾名思义，Iterator 迭代器的出现就是为了迭代而生，为不同的集合：Object、Array、Map、Set，提供了一个统一的接口（这里接口可以简单的理解为方法，就是遍历方法）。像我们常用的 for...of 就是依赖与 Iterator 迭代器。

在这里顺便提一嘴，我理解到的遍历、迭代的关系：遍历就是访问数据结构的所有元素，而迭代是遍历的一种形式。

```javascript
// 阮一峰 ECMAScript 6 入门
// 模拟next方法返回值
var it = makeIterator(["a", "b"]);

it.next(); // { value: "a", done: false }
it.next(); // { value: "b", done: false }
it.next(); // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}
```

上面的 makeIterator 函数，它就是一个迭代器生成函数，作用就是返回一个迭代器对象。对数组执行这个函数，就会返回该数组的迭代器对象 it。

通过调用 next 函数，返回 value 和 done 两个属性；value 属性返回当前位置的成员，done 属性是一个布尔值，表示遍历是否结束，即是否还有必要再一次调用 next 方法；当 done 为 true 时，即遍历完成。

小结：Iterator 迭代器就是一个接口方法，它为不同的数据结构提供了一个统一的访问机制；使得数据结构的成员能够按某种次序排列，并逐个被访问。

## Iterator 规范

在上面的代码中，迭代器对象 it 包含一个 next() 方法，调用 next()方法，返回两个属性：布尔值 done 和值 value，value 的类型无限制。

迭代器对象包含的属性我们知道了，那么在日常开发中，我们如何让一个对象成为一个可迭代对象呢？（可迭代对象即支持迭代器规范的对象）

要成为可迭代对象， 一个对象必须实现@@iterator 方法。这意味着对象（或者它原型链上的某个对象）必须有一个键为@@iterator 的属性，可通过常量 Symbol.iterator 访问该属性。

```javascript
let myIterable = {
  a: 1,
  b: 2,
  c: 3,
};
myIterable[Symbol.iterator] = function () {
  let self = this;
  let arr = Object.keys(self);
  let index = 0;
  return {
    next() {
      return index < arr.length
        ? { value: self[arr[index++]], done: false }
        : { value: undefined, done: true };
    },
  };
};

var it = myIterable[Symbol.iterator]();

it.next();

for (const i of myIterable) {
  console.log(i);
}
```

将 myIterable 对象添加 Symbol.iterator 属性，同时在返回的 next 方法中，添加两个属性，既让它成为了一个可迭代对象。（其实如果真的有这样的需求，可以考虑使用 Map）。

小结：Iterator 规范————Iterator 迭代器包含一个 next()方法，方法调用返回返回两个属性：done 和 value；通过定义一个对象的 Symbol.iterator 属性，即可将此对象修改为迭代器对象，支持 for...of 遍历。
