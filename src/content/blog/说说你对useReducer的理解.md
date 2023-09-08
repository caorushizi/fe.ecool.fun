---
title: 说说你对useReducer的理解
pubDatetime: 2022-11-14T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 2270c83e29010a522029b65f8281f19d
description: >-
  `useReducer`是React提供的一个高级Hook，它不像useEffect、useState、useRef等必须hook一样，没有它我们也可以正常完成需求的开发，但useReducer可以使
difficulty: 3
questionNumber: 30
source: >-
  https://fe.ecool.fun/topic-answer/e2d6e9f5-8166-454e-91ac-79b1816a075f?orderBy=updateTime&order=desc&tagId=13
---

`useReducer`是 React 提供的一个高级 Hook，它不像 useEffect、useState、useRef 等必须 hook 一样，没有它我们也可以正常完成需求的开发，但 useReducer 可以使我们的代码具有更好的可读性、可维护性、可预测性。

### 什么是 reducer

`reducer`的概念是伴随着 Redux 的出现逐渐在 JavaScript 中流行起来。但我们并不需要学习 Redux 去了解 Reducer。

简单来说 reducer 是一个函数`(state, action) => newState`：接收当前应用的 state 和触发的动作 action，计算并返回最新的 state。下面是一段伪代码：

        // 举个栗子 计算器reducer，根据state（当前状态）和action（触发的动作加、减）参数，计算返回newState
        function countReducer(state, action) {
            switch(action.type) {
                case 'add':
                    return state + 1;
                case 'sub':
                    return state - 1;
                default:
                    return state;
            }
        }

上面例子：state 是一个 number 类型的数值，reducer 根据 action 的类型（加、减）对应的修改 state，并返回最终的 state。为了刚接触到`reducer`概念的小伙伴更容易理解,可以将 state 改为 count，但请始终牢记 count 仍然是**state**。

        function countReducer(count, action) {
            switch(action.type) {
                case 'add':
                    return count + 1;
                case 'sub':
                    return count - 1;
                default:
                    return count;
            }
        }

### reducer 的幂等性

从上面的示例可以看到`reducer`本质是一个纯函数，没有任何 UI 和副作用。这意味着相同的输入（state、action），reducer 函数无论执行多少遍始终会返回相同的输出（newState）。因此通过 reducer 函数很容易推测 state 的变化，并且也更加容易单元测试。

        expect(countReducer(1, { type: 'add' })).equal(2); // 成功
        expect(countReducer(1, { type: 'add' })).equal(2); // 成功
        expect(countReducer(1, { type: 'sub' })).equal(0); // 成功

### state 和 newState 的理解

`state`是当前应用状态对象，可以理解就是我们熟知的 React 里面的 state。

在上面的例子中 state 是一个基础数据类型，但很多时候 state 可能会是一个复杂的 JavaScript 对象，如上例中 count 有可能只是 state 中的一个属性。针对这种场景我们可以使用 ES6 的结构赋值：

        // 返回一个 newState (newObject)
        function countReducer(state, action) {
            switch(action.type) {
                case 'add':
                    return { ...state, count: state.count + 1; }
                case 'sub':
                    return { ...state, count: state.count - 1; }
                default:
                    return count;
            }
        }

关于上面这段代码有两个重要的点需要我们记住：

1.  reducer 处理的 state 对象必须是`immutable`，这意味着永远不要直接修改参数中的 state 对象，reducer 函数应该每次都返回一个新的 state object
2.  既然 reducer 要求每次都返回一个新的对象，我们可以使用 ES6 中的[解构赋值方式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread%5Fsyntax)去创建一个新对象，并复写我们需要改变的 state 属性，如上例。

看上去很完美，但如果我们的 state 是多层嵌套，解构赋值实现就非常复杂：

        function bookReducer(state, action) {
            switch(action.type) {
                // 添加一本书
                case 'addBook':
                    return {
                        ...state,
                        books: {
                            ...state.books,
                            [bookId]: book,
                        }
                    };
                case 'sub':
                    // ....
                default:
                    return state;
            }
        }

对于这种复杂 state 的场景推荐使用[immer](https://github.com/immerjs/immer)等 immutable 库解决。

### state 为什么需要 immutable？

- reducer 的幂等性

我们上文提到过 reducer 需要保持幂等性，更加可预测、可测试。如果每次返回同一个 state，就无法保证无论执行多少次都是相同的结果

- React 中的 state 比较方案

React 在比较`oldState`和`newState`的时候是使用 Object.is 函数，如果是同一个对象则不会出发组件的 rerender。 可以参考官方文档[bailing-out-of-a-dispatch](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-dispatch)。

### action 理解

action：用来表示触发的行为。

1.  用 type 来表示具体的行为类型(登录、登出、添加用户、删除用户等)
2.  用 payload 携带的数据（如增加书籍，可以携带具体的 book 信息），我们用上面 addBook 的 action 为例：

        const action = {
            type: 'addBook',
            payload: {
                book: {
                    bookId,
                    bookName,
                    author,
                }
            }
        }
        function bookReducer(state, action) {
            switch(action.type) {
                // 添加一本书
                case 'addBook':
                    const { book } = action.payload;
                    return {
                        ...state,
                        books: {
                            ...state.books,
                            [book.bookId]: book,
                        }
                    };
                case 'sub':
                    // ....
                default:
                    return state;
            }
        }

## 总结

至此基本介绍完了 reducer 相关的内容，简单总结一下：`reducer`是一个利用`action`提供的信息，将`state`从 A 转换到 B 的一个纯函数，具有一下几个特点：

- 语法：(state, action) => newState
- Immutable：每次都返回一个 newState， 永远不要直接修改 state 对象
- Action：一个常规的 Action 对象通常有 type 和 payload（可选）组成
  - type： 本次操作的类型，也是 reducer 条件判断的依据
  - payload： 提供操作附带的数据信息
