---
title: 实现一个useTimeoutHook
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 50a55d7f0d272140857536eade3b9da4
description: >-
  `useTimeout`是可以在函数式组件中，处理`setTimeout`计时器函数解决了什么问题？--------如果直接在函数式组件中使用`setTimeout`，会遇到以下问题：*多次调用set
difficulty: 3
questionNumber: 21
source: >-
  https://fe.ecool.fun/topic-answer/0295b261-f56a-41fd-847b-7f6947284279?orderBy=updateTime&order=desc&tagId=13
---

`useTimeout` 是可以在函数式组件中，处理 `setTimeout` 计时器函数

## 解决了什么问题？

如果直接在函数式组件中使用 `setTimeout` ，会遇到以下问题：

- 多次调用 setTimeout

```js
function App() {
  const [state, setState] = useState(1);
  setTimeout(() => {
    setState(state + 1);
  }, 3000);
  return (
    // 我们原本的目的是在页面渲染完3s后修改一下state，但是你会发现当state+1后，触发了页面的重新渲染，就会重新有一个3s的定时器出现来给state+1，既而变成了每3秒+1。
    <div> {state} </div>
  );
}
```

- hooks 的闭包缺陷

```js
function App() {
  const [count, setCount] = useState(0);
  const [countTimeout, setCountTimeout] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCountTimeout(count);
    }, 3000);
    setCount(5);
  }, []);
  return (
    //count发生了变化，但是3s后setTimout的count却还是0
    <div>
      Count: {count}
      <br />
      setTimeout Count: {countTimeout}
    </div>
  );
}
```

## useTimeout 实现

```js
function useTimeout(callback, delay) {
  const memorizeCallback = useRef();

  useEffect(() => {
    memorizeCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => {
        memorizeCallback.current();
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [delay]);
}
```

## 如何使用

```js
// callback 回调函数， delay 延迟时间
useTimeout(callback, delay);
```
