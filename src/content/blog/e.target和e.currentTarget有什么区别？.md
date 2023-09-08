---
title: e.target和e.currentTarget有什么区别？
pubDatetime: 2022-04-19T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 395b402e8f3dfddc09d933d69d19e52b
description: >-
  冒泡&捕获-------当你触发一个元素的事件的时候，该事件从该元素的祖先元素传递下去，此过程为`捕获`，而到达此元素之后，又会向其祖先元素传播上去，此过程为`冒泡````html<divid="a"
difficulty: 0.5
questionNumber: 110
source: >-
  https://fe.ecool.fun/topic-answer/4b1cefdc-57fd-443e-94ff-df06135cf5ac?orderBy=updateTime&order=desc&tagId=10
---

## 冒泡 & 捕获

当你触发一个元素的事件的时候，该事件从该元素的祖先元素传递下去，此过程为`捕获`，而到达此元素之后，又会向其祖先元素传播上去，此过程为`冒泡`

```html
<div id="a">
  <div id="b">
    <div id="c">
      <div id="d">哈哈哈哈哈</div>
    </div>
  </div>
</div>
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2298b84cc0e484a85d4c8e18674ea34~tplv-k3u1fbpfcp-zoom-1.image)

预览

## addEventListener

`addEventListener`是为元素绑定事件的方法，他接收三个参数：

- 第一个参数：绑定的事件名
- 第二个参数：执行的函数
- 第三个参数：
  - false：默认，代表冒泡时绑定
  - true：代表捕获时绑定

## target & currentTarget

### false

我们给四个 div 元素绑定事件，且`addEventListener`第三个参数不设置，则默认设置为`false`

```js
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
a.addEventListener("click", e => {
  const { target, currentTarget } = e;
  console.log(`target是${target.id}`);
  console.log(`currentTarget是${currentTarget.id}`);
});
b.addEventListener("click", e => {
  const { target, currentTarget } = e;
  console.log(`target是${target.id}`);
  console.log(`currentTarget是${currentTarget.id}`);
});
c.addEventListener("click", e => {
  const { target, currentTarget } = e;
  console.log(`target是${target.id}`);
  console.log(`currentTarget是${currentTarget.id}`);
});
d.addEventListener("click", e => {
  const { target, currentTarget } = e;
  console.log(`target是${target.id}`);
  console.log(`currentTarget是${currentTarget.id}`);
});
```

现在我们点击，看看输出的东西，可以看出触发的是 d，而执行的元素是冒泡的顺序

```js
target是d currentTarget是d
target是d currentTarget是c
target是d currentTarget是b
target是d currentTarget是a

```

### true

我们把四个事件第三个参数都设置为`true`，我们看看输出结果，可以看出触发的是 d，而执行的元素是捕获的顺序

```js
target是d currentTarget是a
target是d currentTarget是b
target是d currentTarget是c
target是d currentTarget是d

```

### 区别

我们可以总结出：

- `e.target`：**触发**事件的元素
- `e.currentTarget`：**绑定**事件的元素
