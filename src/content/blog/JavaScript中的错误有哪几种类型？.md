---
title: JavaScript中的错误有哪几种类型？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 894ffed14b06d3a6fed4360e706d85b1
description: >-
  JavaScript中的错误类型----------------*Error*EvalError*RangeError*ReferenceError*SyntaxError*TypeError*URI
difficulty: 2
questionNumber: 202
source: >-
  https://fe.ecool.fun/topic-answer/fff79f62-47be-438a-83bf-6f81bcc0dfe9?orderBy=updateTime&order=desc&tagId=10
---

## JavaScript 中的错误类型

- Error
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

### Error

`Error`是最基本的错误类型，其他的错误类型都继承自该类型。因此，所有错误的类型共享了一组相同的属性。 这个类型的错误很少见。一般使用开发人员自定义抛出的错误。

### EvalError

这个错误会在使用`eval()`函数发生异常时候抛出。两种情况会出错：

```typescript
undefined;
```

上面两个的意思结合就是没有直接调用`eval`函数，而是`new`或者是重新赋值 这个错误基本上不会遇到，因为`eval`函数本来用的就不多。不过需要注意的是，`eval`是一个关键字。

### RangeError

这个错误会在数值超出相应范围时触发。比如使用`new Array()`的时候传递一个负数或者是超过数组最大长度（4,294,967,295）的数，比如 Number.MAX_VALUE，Number.MIN_VALUE。注意递归爆炸也有这个错误。

### ReferenceError

这个错误一般就是出现在变量找不到的情况，比如：

```typescript
undefined;
```

这时候就需要检查一下一个变量了

### SyntaxError

当 Javascript 语言解析代码时,Javascript 引擎发现了不符合语法规范的 tokens 或 token 顺序时抛出 SyntaxError。

### TypeError

这个错误在 JavaScript 中是经常遇到的，不管是初学者还是老手。在变量中保存着以外的类型时，或者在访问不存在的方法时。都会导致这种错误。但是归根结底还是由于在执行特定于类型的操作时，变量的类型并不符合要求所致。比如：

    var o = new 10;
    a.style.widht = "10px";

关于设置样式这个东西，新手会遇到很多，一般这都是由获取不到元素导致的。

### URIError

在使用 encodeURI 或者 decodeURI 因为 URL 格式不正确时，就会导致 URIError 错误。这种错误也很少见。
