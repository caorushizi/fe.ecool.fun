---
title: 说说对 ES6 中rest参数的理解
pubDatetime: 2022-04-10T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 4c1cf6a926644a68d7a967a03e23d63d
description: >-
  ES6引入rest参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。```types
difficulty: 2
questionNumber: 13
source: >-
  https://fe.ecool.fun/topic-answer/80e34587-60c8-4788-af46-96eec6f5f887?orderBy=updateTime&order=desc&tagId=24
---

ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```typescript
undefined;
```

上面代码的`add`函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

下面是一个 rest 参数代替`arguments`变量的例子。

```typescript
undefined;
```

上面代码的两种写法，比较后可以发现，rest 参数的写法更自然也更简洁。

`arguments`对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用`Array.prototype.slice.call`先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。下面是一个利用 rest 参数改写数组`push`方法的例子。

```typescript
undefined;
```

注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

```typescript
undefined;
```

函数的`length`属性，不包括 rest 参数。

```typescript
undefined;
```

> 箭头函数不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
