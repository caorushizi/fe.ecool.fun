---
title: 说说对 new Function 的理解
pubDatetime: 2024-08-15T23:12:15.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: af29b30f-fe4e-4cbf-99cc-c1886badda2a
description: >-
  new Function 是 JavaScript 中创建函数的一种方式，它允许动态地生成和执行函数。与 eval 不同，new Function
  主要用于创建函数，而不是执行任意的 JavaScript 代码。它接受一个或多个参数，最后一个参数是函数体，其余参数是函数的参数列表。 基本语法 new
  Function ([arg1, arg2, ..., argN], functionBody)
difficulty: 2
questionNumber: 2556
source: https://fe.ecool.fun/topic/af29b30f-fe4e-4cbf-99cc-c1886badda2a
---

`new Function` 是 JavaScript 中创建函数的一种方式，它允许动态地生成和执行函数。与 `eval` 不同，`new Function` 主要用于创建函数，而不是执行任意的 JavaScript 代码。它接受一个或多个参数，最后一个参数是函数体，其余参数是函数的参数列表。

### **基本语法**

```javascript
new Function ([arg1, arg2, ..., argN], functionBody)
```

- **`arg1, arg2, ..., argN`**：函数的参数列表。
- **`functionBody`**：函数体，是一个包含函数代码的字符串。

### **示例**

```javascript
const add = new Function("a", "b", "return a + b;");
console.log(add(1, 2)); // 输出: 3
```

### **特性**

1. **动态函数创建**：

   - `new Function` 允许在运行时动态生成函数。这对于创建动态代码或在不知道函数具体内容的情况下生成函数可能有用。

2. **作用域**：

   - 使用 `new Function` 创建的函数不具有访问创建它的上下文中的变量。它们只能访问全局变量。

3. **字符串参数**：

   - 函数体是作为字符串传递的，这意味着无法在函数体中使用局部作用域内的变量。

4. **安全性**：

   - 虽然 `new Function` 比 `eval` 更受控制，但仍然存在安全隐患，特别是当函数体包含来自不可信来源的内容时。

5. **性能**：
   - `new Function` 会影响 JavaScript 引擎的优化，因为它需要解析和执行动态生成的代码。性能可能会受到影响。

### **对比 `eval`**

- **`eval`**：执行任意代码，并可以影响创建它的上下文的作用域。
- **`new Function`**：创建一个新的函数，它不访问创建它的上下文中的局部变量，只能访问全局变量。

### **例子：**

```javascript
// 创建一个计算乘积的函数
const multiply = new Function("x", "y", "return x * y;");
console.log(multiply(4, 5)); // 输出: 20

// 创建一个函数，访问全局变量
var globalVar = 10;
const addGlobal = new Function("return globalVar + 5;");
console.log(addGlobal()); // 输出: 15
```
