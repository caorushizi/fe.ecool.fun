---
title: 相邻的两个inline-block节点为什么会出现间隔，该如何解决？
pubDatetime: 2022-02-16T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 0e3132caedd64eee754eb2ed69d67992
description: >-
  ###一、现象描述真正意义上的inline-block水平呈现的元素间，换行显示或空格分隔的情况下会有间距，很简单的个例子：```html<input/><inputtype="submit"/>``
difficulty: 2
questionNumber: 43
source: >-
  https://fe.ecool.fun/topic-answer/5f8efe01-0851-4c6f-87bc-f50d6e3ca279?orderBy=updateTime&order=desc&tagId=11
---

### 一、现象描述

真正意义上的 inline-block 水平呈现的元素间，换行显示或空格分隔的情况下会有间距，很简单的个例子：

```html
<input /> <input type="submit" />
```

间距就来了~~

![](https://ae03.alicdn.com/kf/H9025a1fdfd824425a4ec2637e144e1a4k.png)

预览

我们使用 CSS 更改非 inline-block 水平元素为 inline-block 水平，也会有该问题：

```css
.space a {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #cad5eb;
}
```

```html
<div class="space">
  <a href="##">惆怅</a>
  <a href="##">淡定</a>
  <a href="##">热血</a>
</div>
```

![](https://ae01.alicdn.com/kf/H095ea2ba25c340c39b5c57613113df1c5.png)

预览

这种表现是符合规范的应该有的表现。

元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据 white-space 的处理方式（默认是 normal，合并多余空白），原来 HTML 代码中的回车换行被转成一个空白符，在字体不为 0 的情况下，空白符占据一定宽度，所以 inline-block 的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素 font-size:16px 时，间距为 8px。

不过，这类间距有时会对我们布局，或是兼容性处理产生影响，以下展示 N 种方法去掉。

### 二、方法之移除空格

元素间留白间距出现的原因就是标签段之间的空格，因此，去掉 HTML 中的空格，自然间距就木有了。考虑到代码可读性，显然连成一行的写法是不可取的，我们可以：

```html
<div class="space">
  <a href="##"> 惆怅</a><a href="##"> 淡定</a><a href="##"> 热血</a>
</div>
```

或者是：

```html
<div class="space">
  <a href="##">惆怅</a><a href="##">淡定</a><a href="##">热血</a>
</div>
```

或者是借助 HTML 注释：

```html
<div class="space">
  <a href="##">惆怅</a
  ><!--
    --><a href="##">淡定</a
  ><!--
    --><a href="##">热血</a>
</div>
```

等。

### 三、使用 margin 负值

```css
.space a {
  display: inline-block;
  margin-right: -3px;
}
```

margin 负值的大小与上下文的字体和文字大小相关：

![](https://ae01.alicdn.com/kf/H51d0ccb7893842379f8fda6772f86eecs.png)

预览

例如，对于 12 像素大小的上下文，Arial 字体的`margin`负值为`-3`像素，Tahoma 和 Verdana 就是`-4`像素，而 Geneva 为`-6`像素。

由于外部环境的不确定性，以及最后一个元素多出的父 margin 值等问题，这个方法不适合大规模使用。

### 四、让闭合标签吃胶囊

如下处理：

```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血</a>
</div>
```

注意，为了向下兼容 IE6/IE7 等喝蒙牛长大的浏览器，最后一个列表的标签的结束（闭合）标签不能丢。

在 HTML5 中，我们直接：

```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血
</div>
```

好吧，虽然感觉上有点怪怪的，但是，这是 OK 的。

![](https://ae04.alicdn.com/kf/H91cdd7d8e97943719f8f05ea7aac44c89.png)

预览

### 五、使用 font-size:0

类似下面的代码：

```css
.space {
  font-size: 0;
}
.space a {
  font-size: 12px;
}
```

这个方法，基本上可以解决大部分浏览器下 inline-block 元素之间的间距(IE7 等浏览器有时候会有 1 像素的间距)。

### 六、使用 letter-spacing

类似下面的代码：

```css
.space {
  letter-spacing: -3px;
}
.space a {
  letter-spacing: 0;
}
```

根据我去年的测试，该方法可以搞定基本上所有浏览器。

### 七、使用 word-spacing

类似下面代码：

```css
.space {
  word-spacing: -6px;
}
.space a {
  word-spacing: 0;
}
```

一个是字符间距(`letter-spacing`)一个是单词间距(`word-spacing`)，大同小异。据我测试，`word-spacing`的负值只要大到一定程度，其兼容性上的差异就可以被忽略。因为，貌似，`word-spacing`即使负值很大，也不会发生重叠。

与上面 demo 一样的效果，这里就不截图展示了。如果您使用 Chrome 浏览器，可能看到的是间距依旧存在。确实是有该问题，原因我是不清楚，不过我知道，可以添加`display: table;`或`display:inline-table;`让 Chrome 浏览器也变得乖巧。

```css
.space {
  display: inline-table;
  word-spacing: -6px;
}
```

### 八、其他成品方法

下面展示的是 YUI 3 CSS Grids 使用`letter-spacing`和`word-spacing`去除格栅单元见间隔方法（注意，其针对的是 block 水平的元素，因此对 IE8-浏览器做了 hack 处理）：

```css
.yui3-g {
  letter-spacing: -0.31em; /* webkit */
  *letter-spacing: normal; /* IE < 8 重置 */
  word-spacing: -0.43em; /* IE < 8 && gecko */
}

.yui3-u {
  display: inline-block;
  zoom: 1;
  *display: inline; /* IE < 8: 伪造 inline-block */
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
}
```

以下是一个名叫 RayM 的人提供的方法：

```css
li {
  display: inline-block;
  background: orange;
  padding: 10px;
  word-spacing: 0;
}
ul {
  width: 100%;
  display: table; /* 调教webkit*/
  word-spacing: -1em;
}

.nav li {
  *display: inline;
}
```

也就是上面一系列 CSS 方法的组组合合。

> by zhangxinxu from [http://www.zhangxinxu.com](http://www.zhangxinxu.com)
>
> 本文地址：[http://www.zhangxinxu.com/wordpress/?p=2357](http://www.zhangxinxu.com/wordpress/?p=2357)
