---
title: 如何在React中应用样式？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: ffe3fbbb2e3df0dca3546d59c70f0630
description: >-
  将样式应用于React组件有三种方法。外部样式表-----在此方法中，你可以将外部样式表导入到组件使用类中。但是你应该使用className而不是class来为React元素应用样式,这里有一个例子。
difficulty: 2
questionNumber: 92
source: >-
  https://fe.ecool.fun/topic-answer/1892b9be-4b0d-4a4c-8522-182ed46e4df2?orderBy=updateTime&order=desc&tagId=13
---

将样式应用于 React 组件有三种方法。

## 外部样式表

在此方法中，你可以将外部样式表导入到组件使用类中。 但是你应该使用 className 而不是 class 来为 React 元素应用样式, 这里有一个例子。

```typescript
undefined;
```

## 内联样式

在这个方法中，我们可以直接将 props 传递给 HTML 元素，属性为 style。这里有一个例子。这里需要注意的重要一点是，我们将 javascript 对象传递给 style，这就是为什么我们使用 `backgroundColor` 而不是 CSS 方法`backbackground-color`。

```typescript
undefined;
```

## 定义样式对象并使用它

因为我们将 javascript 对象传递给 style 属性，所以我们可以在组件中定义一个 style 对象并使用它。下面是一个示例，你也可以将此对象作为 props 传递到组件树中。

```typescript
undefined;
```
