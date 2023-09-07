---
title: e.target 和 e.currentTarget  有什么区别？
pubDatetime: 2022-04-19T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: da05949f2b2e2ec2085aa9fd62916403
description: >-
  冒泡&捕获-------当你触发一个元素的事件的时候，该事件从该元素的祖先元素传递下去，此过程为`捕获`，而到达此元素之后，又会向其祖先元素传播上去，此过程为`冒泡````typescriptunde
difficulty: 0.5
questionNumber: 110
source: >-
  https://fe.ecool.fun/topic-answer/4b1cefdc-57fd-443e-94ff-df06135cf5ac?orderBy=updateTime&order=desc&tagId=10
---

## 冒泡 & 捕获

当你触发一个元素的事件的时候，该事件从该元素的祖先元素传递下去，此过程为`捕获`，而到达此元素之后，又会向其祖先元素传播上去，此过程为`冒泡`

```typescript
undefined;
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

```typescript
undefined;
```

现在我们点击，看看输出的东西，可以看出触发的是 d，而执行的元素是冒泡的顺序

```typescript
undefined;
```

### true

我们把四个事件第三个参数都设置为`true`，我们看看输出结果，可以看出触发的是 d，而执行的元素是捕获的顺序

```typescript
undefined;
```

### 区别

我们可以总结出：

- `e.target`：**触发**事件的元素
- `e.currentTarget`：**绑定**事件的元素
