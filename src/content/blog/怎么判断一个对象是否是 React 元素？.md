---
title: 怎么判断一个对象是否是 React 元素？
pubDatetime: 2023-05-24T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: f729adbce0fc337c8b32a24816e46f55
description: >-
  如果想要判断一个对象是否是React元素，可以使用`React.isValidElement()`方法进行判断。该方法接收一个参数，返回一个布尔值，用于表示指定的对象是否是React元素。以下是一个示
difficulty: 0.5
questionNumber: 7
source: >-
  https://fe.ecool.fun/topic-answer/8c396acb-2093-4216-8d4a-f8fec4e64f26?orderBy=updateTime&order=desc&tagId=13
---

如果想要判断一个对象是否是 React 元素，可以使用 `React.isValidElement()` 方法进行判断。该方法接收一个参数，返回一个布尔值，用于表示指定的对象是否是 React 元素。

以下是一个示例代码：

```typescript
undefined;
```

在上述代码中，定义了一个简单的组件 `MyComponent`，并通过 JSX 语法创建了一个 React 元素 `elem`。然后，使用 `React.isValidElement()` 方法对 `elem` 和一个普通对象 `{}` 进行判断，并输出结果。

需要注意的是，`React.isValidElement()` 方法只能用于判断是否为 React 元素，并不能判断元素的类型和其他属性。如果需要获取元素的类型或其他属性，可以直接访问元素的属性，例如 `type`、`props`、`key` 等。
