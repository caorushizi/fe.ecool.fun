---
title: css选择器有哪些？优先级分别是什么？哪些属性可以继承？
pubDatetime: 2022-10-09T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 969b91c76075af073c682066e82b5cbd
description: >-
  一、选择器-----CSS选择器是CSS规则的第一部分它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式选择器所选择的元素，叫做“选择器的对象”我们从一个`
difficulty: 1.5
questionNumber: 13
source: >-
  https://fe.ecool.fun/topic-answer/376fe4ce-b43c-45b3-834b-28da33c56920?orderBy=updateTime&order=desc&tagId=11
---

## 一、选择器

CSS 选择器是 CSS 规则的第一部分

它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式

选择器所选择的元素，叫做“选择器的对象”

我们从一个`Html`结构开始

```typescript
undefined;
```

关于`css`属性选择器常用的有：

```typescript
undefined;
```

还有一些使用频率相对没那么多的选择器：

- 伪类选择器

```typescript
undefined;
```

- 伪元素选择器

```typescript
undefined;
```

- 属性选择器

```typescript
undefined;
```

在`CSS3`中新增的选择器有如下：

- 层次选择器（p~ul），选择前面有 p 元素的每个 ul 元素
- 伪类选择器

```typescript
undefined;
```

- 属性选择器

```typescript
undefined;
```

## 二、优先级

相信大家对`CSS`选择器的优先级都不陌生：

> 内联 > ID 选择器 > 类选择器 > 标签选择器

到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

- 如果存在内联样式，那么 A = 1, 否则 A = 0
- B 的值等于 ID 选择器出现的次数
- C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数
- D 的值等于 标签选择器 和 伪元素 出现的总次数

这里举个例子：

```typescript
undefined;
```

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：

- 因为没有内联样式 ，所以 A = 0
- ID 选择器总共出现了 1 次， B = 1
- 类选择器出现了 1 次， 属性选择器出现了 0 次，伪类选择器出现 0 次，所以 C = (1 + 0 + 0) = 1
- 标签选择器出现了 3 次， 伪元素出现了 0 次，所以 D = (3 + 0) = 3

上面算出的`A` 、 `B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`

知道了优先级是如何计算之后，就来看看比较规则：

- 从左往右依次进行比较 ，较大者优先级更高
- 如果相等，则继续往右移动一位进行比较
- 如果 4 位全部相等，则后面的会覆盖前面的

经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`

## 三、继承属性

在`css`中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性 关于继承属性，可以分成：

- 字体系列属性

```typescript
undefined;
```

- 文本系列属性

```typescript
undefined;
```

- 元素可见性

```typescript
undefined;
```

- 表格布局属性

```typescript
undefined;
```

- 列表属性

```typescript
undefined;
```

- 引用

```typescript
undefined;
```

- 光标属性

```typescript
undefined;
```

继承中比较特殊的几点：

- a 标签的字体颜色不能被继承
- h1-h6 标签字体的大下也是不能被继承的

## 无继承的属性

- display
- 文本属性：vertical-align、text-decoration
- 盒子模型的属性：宽度、高度、内外边距、边框等
- 背景属性：背景图片、颜色、位置等
- 定位属性：浮动、清除浮动、定位 position 等
- 生成内容属性：content、counter-reset、counter-increment
- 轮廓样式属性：outline-style、outline-width、outline-color、outline
- 页面样式属性：size、page-break-before、page-break-after
