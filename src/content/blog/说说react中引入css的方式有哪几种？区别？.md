---
title: 说说react中引入css的方式有哪几种？区别？
pubDatetime: 2021-10-24T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: e23b9aab30f11490f0bf7141aa452e60
description: >-
  一、是什么-----组件式开发选择合适的`css`解决方案尤为重要通常会遵循以下规则：*可以编写局部css，不会随意污染其他组件内的原生；*可以编写动态的css，可以获取当前组件的一些状态，根据状态的
difficulty: 1.5
questionNumber: 62
source: >-
  https://fe.ecool.fun/topic-answer/44c29904-83b1-4e51-905e-2bd3599f9e45?orderBy=updateTime&order=desc&tagId=13
---

## 一、是什么

组件式开发选择合适的`css`解决方案尤为重要

通常会遵循以下规则：

- 可以编写局部 css，不会随意污染其他组件内的原生；
- 可以编写动态的 css，可以获取当前组件的一些状态，根据状态的变化生成不同的 css 样式；
- 支持所有的 css 特性：伪类、动画、媒体查询等；
- 编写起来简洁方便、最好符合一贯的 css 风格特点

在这一方面，`vue`使用`css`起来更为简洁：

- 通过 style 标签编写样式
- scoped 属性决定编写的样式是否局部有效
- lang 属性设置预处理器
- 内联样式风格的方式来根据最新状态设置和改变 css

而在`react`中，引入`CSS`就不如`Vue`方便简洁，其引入`css`的方式有很多种，各有利弊

## 二、方式

常见的`CSS`引入方式有以下：

- 在组件内直接使用
- 组件中引入 .css 文件
- 组件中引入 .module.css 文件
- CSS in JS

### 在组件内直接使用

直接在组件中书写`css`样式，通过`style`属性直接引入，如下：

```typescript
undefined;
```

上面可以看到，`css`属性需要转换成驼峰写法

这种方式优点：

- 内联样式, 样式之间不会有冲突
- 可以动态获取当前 state 中的状态

缺点：

- 写法上都需要使用驼峰标识
- 某些样式没有提示
- 大量的样式, 代码混乱
- 某些样式无法编写(比如伪类/伪元素)

### 组件中引入 css 文件

将`css`单独写在一个`css`文件中，然后在组件中直接引入

`App.css`文件：

```typescript
undefined;
```

组件中引入：

```typescript
undefined;
```

这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响

### 组件中引入 .module.css 文件

将`css`文件作为一个模块引入，这个模块中的所有`css`，只作用于当前组件。不会影响当前组件的后代组件

这种方式是`webpack`特工的方案，只需要配置`webpack`配置文件中`modules:true`即可

```typescript
undefined;
```

这种方式能够解决局部作用域问题，但也有一定的缺陷：

- 引用的类名，不能使用连接符(.xxx-xx)，在 JavaScript 中是不识别的
- 所有的 className 都必须使用 {style.className} 的形式来编写
- 不方便动态来修改某些样式，依然需要使用内联样式的方式；

### CSS in JS

CSS-in-JS， 是指一种模式，其中`CSS`由 `JavaScript` 生成而不是在外部文件中定义

此功能并不是 React 的一部分，而是由第三方库提供，例如：

- styled-components
- emotion
- glamorous

下面主要看看`styled-components`的基本使用

本质是通过函数的调用，最终创建出一个组件：

- 这个组件会被自动添加上一个不重复的 class
- styled-components 会给该 class 添加相关的样式

基本使用如下：

创建一个`style.js`文件用于存放样式组件：

```typescript
undefined;
```

引入样式组件也很简单：

```typescript
undefined;
```

## 三、区别

通过上面四种样式的引入，可以看到：

- 在组件内直接使用`css`该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱
- 组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠
- 引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写
- 通过 css in js 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等

至于使用`react`用哪种方案引入`css`，并没有一个绝对的答案，可以根据各自情况选择合适的方案
