---
title: React中的类组件和函数组件之间有什么区别？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 199a56299a1b66948714d149f833d983
description: >-
  类组件（Classcomponents）---------------------*无论是使用函数或是类来声明一个组件，它决不能修改它自己的props。*所有React组件都必须是纯函数，并禁止修改其
difficulty: 1
questionNumber: 99
source: >-
  https://fe.ecool.fun/topic-answer/702b094e-0bdc-4be6-b8c7-e2a70dc13688?orderBy=updateTime&order=desc&tagId=13
---

## 类组件（Class components）

- 无论是使用函数或是类来声明一个组件，它决不能修改它自己的 props。
  - 所有 React 组件都必须是纯函数，并禁止修改其自身 props。
- React 是单项数据流，父组件改变了属性，那么子组件视图会更新。
  - 属性 props 是外界传递过来的，状态 state 是组件本身的，状态可以在组件中任意修改
  - 组件的属性和状态改变都会更新视图。

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome {this.props.name}</h1>;
  }
}
ReactDOM.render(<Welcome name="react" />, document.getElementById("root"));
```

## 函数组件（functional component）

函数组件接收一个单一的 props 对象并返回了一个 React 元素

```jsx
function Welcome(props) {
  return <h1>Welcome {props.name}</h1>;
}
ReactDOM.render(<Welcome name="react" />, document.getElementById("root"));
```

## 区别

- 语法上

两者最明显的不同就是在语法上，函数组件是一个纯函数，它接收一个 props 对象返回一个 react 元素。而类组件需要去继承 React.Component 并且创建 render 函数返回 react 元素，这将会要更多的代码，虽然它们实现的效果相同。

- 状态管理

因为函数组件是一个纯函数，你不能在组件中使用 setState()，这也是为什么把函数组件称作为无状态组件。

如果你需要在你的组件中使用 state，你可以选择创建一个类组件或者将 state 提升到你的父组件中，然后通过 props 对象传递到子组件。

- 生命周期钩子

你不能在函数组件中使用生命周期钩子，原因和不能使用 state 一样，所有的生命周期钩子都来自于继承的 React.Component 中。

因此，如果你想使用生命周期钩子，那么需要使用类组件。

**注意**：在 react16.8 版本中添加了 hooks，使得我们可以在函数组件中使用 useState 钩子去管理 state，使用 useEffect 钩子去使用生命周期函数。因此，2、3 两点就不是它们的区别点。从这个改版中我们可以看出作者更加看重函数组件，而且 react 团队曾提及到在 react 之后的版本将会对函数组件的性能方面进行提升。

- 调用方式

如果 SayHi 是一个函数，React 需要调用它：

```jsx
// 你的代码
function SayHi() {
  return <p>Hello, React</p>;
}
// React内部
const result = SayHi(props); // » <p>Hello, React</p>
```

如果 SayHi 是一个类，React 需要先用 new 操作符将其实例化，然后调用刚才生成实例的 render 方法：

```jsx
// 你的代码
class SayHi extends React.Component {
  render() {
    return <p>Hello, React</p>;
  }
}
// React内部
const instance = new SayHi(props); // » SayHi {}
const result = instance.render(); // » <p>Hello, React</p>
```

可想而知，函数组件重新渲染将重新调用组件方法返回新的 react 元素，类组件重新渲染将 new 一个新的组件实例，然后调用 render 类方法返回 react 元素，这也说明为什么类组件中 this 是可变的。
