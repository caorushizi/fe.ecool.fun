---
title: 说说你对dangerouslySetInnerHTML的理解
pubDatetime: 2022-08-22T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 5661226238e25ad2cad3bd94fd1f9cd6
description: >-
  本文介绍了在React应用程序中使用`dangerouslySetInnerHTML`属性的原因，它相当于浏览器DOM中的`innerHTML`属性。什么是`dangerouslySetInnerHT
difficulty: 1
questionNumber: 35
source: >-
  https://fe.ecool.fun/topic-answer/4f82e436-764e-401e-933d-e46f05512720?orderBy=updateTime&order=desc&tagId=13
---

本文介绍了在 React 应用程序中使用`dangerouslySetInnerHTML` 属性的原因，它相当于浏览器 DOM 中的`innerHTML` 属性。

## 什么是`dangerouslySetInnerHTML` ？

`dangerouslySetInnerHTML` 是一个属性，你可以在 React 应用程序中的 HTML 元素上使用，以编程方式设置其内容。你可以直接在元素上使用这个属性，而不是使用选择器来抓取 HTML 元素，然后设置其`innerHTML` 。

当使用`dangerouslySetInnerHTML` ，React 也知道该特定元素的内容是动态的，对于该节点的子节点，它只是跳过与虚拟 DOM 的比较，以获得一些额外的性能。

正如该属性的名称所暗示的，使用它可能是危险的，因为它使你的代码容易受到跨站脚本（XSS）攻击。特别是当你从第三方来源获取数据或渲染用户提交的内容时，这就成为一个问题。

## 何时使用`dangerouslySetInnerHTML`

你需要设置 DOM 元素的 HTML 内容的一个用例是当你用来自富文本编辑器的数据填充一个`<div>` 。想象一下，你有一个网页，人们可以提交评论，你允许他们使用一个富文本编辑器。在这种情况下，富文本编辑器的输出很可能是带有标签的 HTML，如`<p>`,`<b>`, 和`<img>` 。

考虑一下下面的代码片段，它将在不知道其中的`<b>` 标签的情况下渲染字符串--意味着输出的只是字符串本身，没有任何粗体字，就像这样：lorem **ipsum**。

```javascript
const App = () => {
  const data = "lorem <b>ipsum</b>";

  return <div>{data}</div>;
};

export default App;
```

但当使用`dangerouslySetInnerHTML` ，React 就会意识到 HTML 标签，并正确渲染它们。这一次，输出将以粗体文本正确呈现（即 lorem**ipsum**）。

```ini
const App = () => {
  const data = 'lorem <b>ipsum</b>';

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}

export default App;

```

请注意，它应该是一个带有传递给`__html` 键的对象`dangerouslySetInnerHTML` 。除此之外，你使用`dangerouslySetInnerHTML` 属性的元素不应该有任何孩子，因此要使用`<div>` 元素作为自闭标签。

传递对象的要求只是另一种保障措施，以防止开发者在没有阅读文档和意识到潜在危险的情况下使用它。

## 使用时的消毒`dangerouslySetInnerHTML`

上面的例子在渲染时不会造成危险。然而，在某些情况下，HTML 元素可能会执行一个脚本。

考虑一下下面的例子，一个 JavaScript 事件被附加到一个 HTML 元素上。虽然这些是无害的例子，但它们是概念的证明，表明一个 HTML 元素如何被利用来运行恶意脚本。

```ini
const App = () => {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}

export default App;


const App = () => {
  const data = `lorem ipsum <img src="" onerror="alert('message');" />`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}

export default App;

```

幸运的是，有针对 HTML 的净化工具，可以检测出 HTML 代码中潜在的恶意部分，然后输出一个干净安全的版本。最受欢迎的 HTML 净化工具是[DOMPurify](https://github.com/cure53/DOMPurify)。

让我们使用它的[在线演示](https://cure53.de/purify)来对上述 HTML 代码进行消毒，看看它是如何检测并过滤掉代码中可能在执行时产生危险的部分的。

```less
Original
lorem <b onmouseover="alert('mouseover');">ipsum</b>

Sanitized
lorem <b>ipsum</b>
```

```ini
Original
lorem ipsum <img src="" onerror="alert('message');" />

Sanitized
lorem ipsum <img src="">
```

即使在我们信任数据来源的情况下，使用消毒剂也是很好的做法。在使用 DOMPurify 包的情况下，上面的一个例子会是这样的。

```javascript
import DOMPurify from "dompurify";

const App = () => {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data),
  });

  return <div dangerouslySetInnerHTML={sanitizedData()} />;
};

export default App;
```

`sanitizedData` 函数返回一个带有`__html` 键的对象，它有一个从`DOMPurify.sanitize` 函数返回的值。

正如预期的那样，当我们将鼠标悬停在粗体字上时，并没有执行警报函数。

请注意，由于 DOMPurify 需要一个 DOM 树，而 Node 环境没有，你要么使用`jsdom` 包来创建一个`window` 对象，并用它来初始化`DOMPurify` ，要么单独使用`isomorphic-dompurify` 包来代替，它同时封装了`DOMPurify` 和`jsdom` 包。

如果你喜欢第一种选择，你可以参考以下来自`DOMPurify` 的文档片段。

```ini
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const clean = DOMPurify.sanitize(dirty);
```

## 结论

总之，`dangerouslySetInnerHTML` 只不过是 React 中`innerHTML` 的替代品，应该谨慎使用。虽然这个名字暗示了使用它的危险性，但通过使用一个完善的净化器采取必要的措施，确保代码是干净的，在 React 节点内呈现时不会运行意外的脚本。
