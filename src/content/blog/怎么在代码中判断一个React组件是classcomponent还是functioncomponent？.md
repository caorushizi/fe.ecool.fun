---
title: 怎么在代码中判断一个React组件是classcomponent还是functioncomponent？
pubDatetime: 2023-06-25T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 23c2d4a7d4e8155e8ecc8309e65a07cb
description: >-
  可以使用JavaScript的`typeof`运算符和React的`Component`类来进行判断。下面是一个示例的判断方法：```javascriptfunctionisClassComponen
difficulty: 2
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/02cde100-0c41-4036-b224-31895cd8c339?orderBy=updateTime&order=desc&tagId=13
---

可以使用 JavaScript 的`typeof`运算符和 React 的`Component`类来进行判断。

下面是一个示例的判断方法：

```javascript
function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

// 示例用法
const MyComponent = () => <div>Hello, I'm a function component!</div>;
const MyClassComponent = class extends React.Component {
  render() {
    return <div>Hello, I'm a class component!</div>;
  }
};

console.log(isClassComponent(MyComponent)); // false
console.log(isClassComponent(MyClassComponent)); // true
```

上面定义了一个名为`isClassComponent`的函数，它接受一个组件作为参数。函数内部使用`typeof`运算符来判断该组件是否为函数类型，并通过检查`component.prototype.isReactComponent`属性来确定是否为 Class 组件。
