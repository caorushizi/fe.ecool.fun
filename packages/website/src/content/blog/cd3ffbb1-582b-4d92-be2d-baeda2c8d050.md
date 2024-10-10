---
title: JavaScript 中， 隐藏类是什么概念？
pubDatetime: 2024-09-09T14:08:33.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: cd3ffbb1-582b-4d92-be2d-baeda2c8d050
description: >-
  JavaScript隐藏类
  隐藏类是JavaScript引擎中的一种优化技术（并不是JavaScript语言中的某个类！！），用于提高对象访问的性能。隐藏类是一种数据结构，用于跟踪对象的属性和方法的布局和类型，以便在代码运行时能够快速访问它们。
  当JavaScript引擎在执行代码时，会动态地创建对象的隐藏类。隐藏类会跟踪对象的属性和方法，并为它们分配固定的内存偏移量。每当对象的属性和方法发生变化
difficulty: 1.5
questionNumber: 2348
source: https://fe.ecool.fun/topic/cd3ffbb1-582b-4d92-be2d-baeda2c8d050
---

## JavaScript隐藏类

隐藏类是JavaScript引擎中的一种优化技术（**并不是JavaScript语言中的某个类**！！），用于提高对象访问的性能。隐藏类是一种数据结构，用于跟踪对象的属性和方法的布局和类型，以便在代码运行时能够快速访问它们。

当JavaScript引擎在执行代码时，会动态地创建对象的隐藏类。隐藏类会跟踪对象的属性和方法，并为它们分配固定的内存偏移量。每当对象的属性和方法发生变化时，隐藏类会根据变化的情况进行更新。

使用隐藏类可以提高代码的执行速度，因为JavaScript引擎可以根据隐藏类的信息来直接定位和访问对象的属性和方法，而不需要进行动态查找或解析。这种优化技术可以减少对象访问的开销，提高代码的性能。

需要注意的是，隐藏类是在运行时动态创建的，因此代码中创建对象的顺序和属性的添加顺序都会影响隐藏类的生成。如果对象的属性添加顺序不一致，可能会导致隐藏类的生成不一致，从而降低代码的性能。

隐藏类是现代JavaScript引擎（如V8、SpiderMonkey等）中的一项重要优化技术，可以显著提高JavaScript代码的执行速度。

下面是一个使用隐藏类的简单示例：

```javascript
function MyClass(a, b) {
  this.prop1 = a;
  this.prop2 = b;
}

MyClass.prototype.method1 = function () {
  console.log("Method 1");
};

MyClass.prototype.method2 = function () {
  console.log("Method 2");
};

var obj1 = new MyClass(10, 20);
var obj2 = new MyClass(30, 40);

obj1.method1(); // 输出 "Method 1"
obj2.method2(); // 输出 "Method 2"
```

在上面的示例中，我们创建了一个名为`MyClass`的类，它有两个属性`prop1`和`prop2`，以及两个方法`method1`和`method2`。我们用`new`关键字创建了两个实例`obj1`和`obj2`。

当我们使用隐藏类优化的JavaScript引擎运行这段代码时，它会动态地创建隐藏类来跟踪`MyClass`的属性和方法。每个实例都会有一个关联的隐藏类，它包含了实例的属性和方法的布局和类型信息。

在调用`obj1.method1()`和`obj2.method2()`时，JavaScript引擎会使用隐藏类的信息来直接定位并执行相应的方法，而不需要进行动态查找和解析，从而提高了代码的执行速度。

需要注意的是，这只是一个简单的示例，实际上隐藏类的优化是更复杂和细致的。不同的引擎可能会有不同的隐藏类实现方式，并且隐藏类的生成和优化过程会受到许多因素的影响，如代码的结构、对象的属性访问模式等。
