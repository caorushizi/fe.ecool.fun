---
title: object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别是什么？
pubDatetime: 2021-08-22T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 96d890fe2f63658bfd8d7acbaac3601c
description: >-
  *扩展运算符```typescriptundefined```*Object.assign()```typescriptundefined```可以看到，两者都是浅拷贝。Object.assign()
difficulty: 3
questionNumber: 16
source: >-
  https://fe.ecool.fun/topic-answer/8244fd41-2b94-4179-887f-177501ddf280?orderBy=updateTime&order=desc&tagId=24
---

- 扩展运算符

```typescript
undefined;
```

- Object.assign()

```typescript
undefined;
```

可以看到，两者都是浅拷贝。

Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。

扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制 ES6 的 symbols 属性。
