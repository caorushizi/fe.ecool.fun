---
title: 谈谈你知道的DOM常见的操作
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 727e7d33623c1b6ad7bf278c08de8d88
description: >-
  ![](https://static.vue-js.com/a89c99a0-7fdc-11eb-ab90-d9ae814b240d.png)预览一、DOM-----文档对象模型(DOM)是`HTML
difficulty: 1.5
questionNumber: 318
source: >-
  https://fe.ecool.fun/topic-answer/138cc142-490a-4ca9-8221-5f13429c807f?orderBy=updateTime&order=desc&tagId=10
---

![](https://static.vue-js.com/a89c99a0-7fdc-11eb-ab90-d9ae814b240d.png)

预览

## 一、DOM

文档对象模型 (DOM) 是 `HTML` 和 `XML` 文档的编程接口

它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容

任何 `HTML` 或`XML`文档都可以用 `DOM` 表示为一个由节点构成的层级结构

节点分很多类型，每种类型对应着文档中不同的信息和（或）标记，也都有自己不同的特性、数据和方法，而且与其他类型有某种关系，如下所示：

```typescript
undefined;
```

`DOM`像原子包含着亚原子微粒那样，也有很多类型的`DOM`节点包含着其他类型的节点。接下来我们先看看其中的三种：

```typescript
undefined;
```

上述结构中，`div`、`p`就是元素节点，`content`就是文本节点，`title`就是属性节点

## 二、操作

日常前端开发，我们都离不开`DOM`操作

在以前，我们使用`Jquery`，`zepto`等库来操作`DOM`，之后在`vue`，`Angular`，`React`等框架出现后，我们通过操作数据来控制`DOM`（绝大多数时候），越来越少的去直接操作`DOM`

但这并不代表原生操作不重要。相反，`DOM`操作才能有助于我们理解框架深层的内容

下面就来分析`DOM`常见的操作，主要分为：

- 创建节点
- 查询节点
- 更新节点
- 添加节点
- 删除节点

### 创建节点

#### createElement

创建新元素，接受一个参数，即要创建元素的标签名

```typescript
undefined;
```

#### createTextNode

创建一个文本节点

```typescript
undefined;
```

#### createDocumentFragment

用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到`DOM`中

```typescript
undefined;
```

当请求把一个`DocumentFragment` 节点插入文档树时，插入的不是 `DocumentFragment` 自身，而是它的所有子孙节点

#### createAttribute

创建属性节点，可以是自定义属性

```typescript
undefined;
```

### 获取节点

#### querySelector

传入任何有效的 `css` 选择器，即可选中单个 `DOM` 元素（首个）：

```typescript
undefined;
```

如果页面上没有指定的元素时，返回 `null`

#### querySelectorAll

返回一个包含节点子树内所有与之相匹配的`Element`节点列表，如果没有相匹配的，则返回一个空节点列表

```typescript
undefined;
```

需要注意的是，该方法返回的是一个 `NodeList` 的静态实例，它是一个静态的“快照”，而非“实时”的查询

关于获取`DOM`元素的方法还有如下，就不一一述说

```typescript
undefined;
```

除此之外，每个`DOM`元素还有`parentNode`、`childNodes`、`firstChild`、`lastChild`、`nextSibling`、`previousSibling`属性，关系图如下图所示

![](https://static.vue-js.com/c100f450-7fdc-11eb-ab90-d9ae814b240d.png)

预览

### 更新节点

#### innerHTML

不但可以修改一个`DOM`节点的文本内容，还可以直接通过`HTML`片段修改`DOM`节点内部的子树

```typescript
undefined;
```

#### innerText、textContent

自动对字符串进行`HTML`编码，保证无法设置任何`HTML`标签

    // 获取<p id="p-id">...</p >
    var p = document.getElementById('p-id');
    // 设置文本:
    p.innerText = '<script>alert("Hi")</script>';
    // HTML被自动编码，无法设置一个<script>节点:
    // <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >

两者的区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本

#### style

`DOM`节点的`style`属性对应所有的`CSS`，可以直接获取或设置。遇到`-`需要转化为驼峰命名

```typescript
undefined;
```

### 添加节点

#### innerHTML

如果这个 DOM 节点是空的，例如，`<div></div>`，那么，直接使用`innerHTML = '<span>child</span>'`就可以修改`DOM`节点的内容，相当于添加了新的`DOM`节点

如果这个 DOM 节点不是空的，那就不能这么做，因为`innerHTML`会直接替换掉原来的所有子节点

#### appendChild

把一个子节点添加到父节点的最后一个子节点

举个例子

```typescript
undefined;
```

添加一个`p`元素

```typescript
undefined;
```

现在`HTML`结构变成了下面

```typescript
undefined;
```

上述代码中，我们是获取`DOM`元素后再进行添加操作，这个`js`节点是已经存在当前文档树中，因此这个节点首先会从原先的位置删除，再插入到新的位置

如果动态添加新的节点，则先创建一个新的节点，然后插入到指定的位置

```typescript
undefined;
```

#### insertBefore

把子节点插入到指定的位置，使用方法如下：

```typescript
undefined;
```

子节点会插入到`referenceElement`之前

#### setAttribute

在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

```typescript
undefined;
```

### 删除节点

删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的`removeChild`把自己删掉

```typescript
undefined;
```

删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置
