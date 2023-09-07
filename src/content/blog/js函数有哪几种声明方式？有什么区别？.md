---
title: js函数有哪几种声明方式？有什么区别？
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 8f048fc19f7e641c88b5bd8fb58028ce
description: >-
  有`表达式`和`声明式`两种函数声明方式*函数的声明式写法为：`functiontest(){}`，这种写法会导致函数提升，所有通过`function`关键字声明的变量都会被解释器优先编译，不管声明在
difficulty: 1
questionNumber: 41
source: >-
  https://fe.ecool.fun/topic-answer/86c1abd9-9552-42ab-93d5-16076a877db0?orderBy=updateTime&order=desc&tagId=10
---

有 `表达式` 和 `声明式` 两种函数声明方式

- 函数的声明式写法为：`function test(){}`，这种写法会导致函数提升，所有通过`function`关键字声明的变量都会被解释器优先编译，不管声明在什么位置都可以调用它，但是它本身并不会被执行。

```typescript
undefined;
```

- 函数的表达式写法为：`var test = function(){}`，这种写法不会导致函数提升，必须先声明后调用，不然就会报错。

```typescript
undefined;
```

## 二者的区别

```typescript
undefined;
```

1.  函数声明式变量会声明提前 函数表达式变量不会声明提前
2.  **函数声明**中的`函数名`是必需的，而**函数表达式**中的`函数名则是可选的`。
3.  函数表达式可以在定义的时候直接在表达式后面加()执行，而函数声明则不可以。

```typescript
undefined;
```

4.  自执行函数即使带有函数名，它里面的函数还是属于函数表达式。

```typescript
undefined;
```

因为函数只是整个自执行函数的一部分。
