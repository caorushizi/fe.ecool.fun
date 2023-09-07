---
title: 为什么 useState 返回的是数组而不是对象？
pubDatetime: 2022-01-16T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 53fc7f95c93cad648e776f21a96fa08c
description: >-
  useState的用法：```typescriptundefined```可以看到useState返回的是一个数组，那么为什么是返回数组而不是返回对象呢？要回答这个问题得弄明白ES6的解构赋值(des
difficulty: 3.5
questionNumber: 51
source: >-
  https://fe.ecool.fun/topic-answer/d7dc9c83-0fa2-4510-b098-e92de7637209?orderBy=updateTime&order=desc&tagId=13
---

useState 的用法：

```typescript
undefined;
```

可以看到 useState 返回的是一个数组，那么为什么是返回数组而不是返回对象呢？

要回答这个问题得弄明白 ES6 的解构赋值(destructring assignment)语法 , 来看 2 个简单的示例：

- 数组的解构赋值：

```typescript
undefined;
```

- 对象的解构赋值：

```typescript
undefined;
```

搞清楚了解构赋值，那上面的问题就比较好解释了。

如果 `useState` 返回数组，那么你可以顺便对数组中的变量命名，代码看起来也比较干净。而如果是对象的话返回的值必须和 `useState` 内部实现返回的对象同名，这样你只能在 `function component` 中使用一次，想要多次使用 `useState` 必须得重命名返回值。

```typescript
undefined;
```

当然事情总是有两面性的，使用 array 也存在一些问题：

- 返回值强顺序，灵活性比较低。array\[0\] 为值，array\[1\] 为改变值的方法。
- 返回的值基本都得使用，对于有些返回值不想使用的话代码看起来有些怪，比如只想用 setState, 就得这么写：`const [, setState] = useState(false)`。
- 返回的参数不能太多，否则处理上面 2 个场景会很麻烦。

如果在自定义的 Hook 中遇到了以上几个问题，不妨试试返回 object。

简单总结一下，在自定义 hook 的时候可以遵循一个简单原则：当参数大于 2 个的时候返回值的类型返回 `object`， 否则返回数组。
