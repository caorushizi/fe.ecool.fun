---
title: 下面代码的输出是什么？
pubDatetime: 2023-05-31T09:23:49.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 3734a9cd-2ef6-4b29-8eaf-f86ffc5dfdf7
description: >-
  var name = '123'; var obj = { name: '456', print: function() { function a() {
  console.log(this.name); } a(); } } obj.print(); 上述代码输出结果为 "123"。解释如下：
  在全局作用域中声明了变量 name，值为字符串 "123"。 声明一个对象 obj，包含属性 name 
difficulty: 1
questionNumber: 2006
source: https://fe.ecool.fun/topic/3734a9cd-2ef6-4b29-8eaf-f86ffc5dfdf7
---

```js
var name = '123';

var obj = {
 name: '456',
 print: function() {
  function a() {
    console.log(this.name);
  }
  a();
 }
}

obj.print();
```

---

上述代码输出结果为 "123"。解释如下：

1. 在全局作用域中声明了变量 name，值为字符串 "123"。
2. 声明一个对象 obj，包含属性 name 和方法 print，其中 name 属性的值为字符串 "456"，print 方法中定义了函数 a。
3. 当执行 obj.print() 时，会调用 print 方法，并在其中定义了函数 a。
4. 函数 a 中调用 console.log(this.name) 方法。由于此时 this 指向全局对象（即 window 对象），因此执行 this.name 等价于执行 window.name。
5. 根据步骤1，window.name 的值为字符串 "123"，因此最终输出结果为 "123"。

需要注意的是，在JavaScript中，this 的值取决于函数在何处被调用。如果该函数是作为对象的方法进行调用的，则 this 指向该对象；否则，this 指向全局对象。在本例中，虽然函数 a 被定义在 print 方法中，但是它并没有作为 obj 的方法进行调用，因此 this 指向全局对象。
