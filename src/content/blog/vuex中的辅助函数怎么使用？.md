---
title: vuex中的辅助函数怎么使用？
pubDatetime: 2022-02-27T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 64727a8b66d92adccdbf66f9b1156b8a
description: >-
  在实际开发中，我们经常会用到vuex来对数据进行管理，随着数据越来越多，我们逐渐开始使用一些语法糖来帮助我们快速开发。即vuex中的mapState、mapGetters、mapMutations、m
difficulty: 2
questionNumber: 30
source: >-
  https://fe.ecool.fun/topic-answer/b3e35cf9-1939-4c79-8415-8168c5532779?orderBy=updateTime&order=desc&tagId=14
---

在实际开发中，我们经常会用到 vuex 来对数据进行管理，随着数据越来越多，我们逐渐开始使用一些语法糖来帮助我们快速开发。 即 vuex 中的 mapState、mapGetters、mapMutations、mapActions 等辅助函数是我们经常使用到的。

## 辅助函数

通过辅助函数`mapState`、`mapActions`、`mapMutations`，把`vuex.store`中的属性映射到`vue`实例身上，这样在`vue`实例中就能访问`vuex.store`中的属性了，对于操作`vuex.store`就很方便了。

`state`辅助函数为`mapState`，`actions`辅助函数为`mapActions`，`mutations`辅助函数为`mapMutations`。（`Vuex`实例身上有`mapState`、`mapActions`、`mapMutations`属性，属性值都是函数）

## 如何使用辅助函数

首先，需要在当前组件中引入`Vuex`。

然后，通过 Vuex 来调用辅助函数。

## 辅助函数如何去映射 vuex.store 中的属性

### 1、mapState:把 state 属性映射到 computed 身上

```typescript
undefined;
```

`state`：用来存储公共的状态 在`state`中的数据都是响应式的。

响应式原因：`state`里面有一个`getters`、`setters`方法；`data`中的数据也是响应式的，因为里面也有`getters`和`setters`方法

在`computed`属性中来接收`state`中的数据,接收方式有 2 种（数组和对象，推荐对象）.

优点：

- 本身 key 值是别名，要的是 val 的值，key 的值 a 和 val="a"一样就行，随意写。减少 state 里面长的属性名。
- 可以在函数内部查看 state 中的数据，数组方式的话，必须按照 state 中的属性名。

```typescript
undefined;
```

如果自身组件也需要使用 computed 的话，通过解构赋值去解构出来

```typescript
undefined;
```

### 2、mapAcions：把 actions 里面的方法映射到 methods 中

```typescript
undefined;
```

add、change 为 action 方法别名，直接代用 add 和 change 方法就行，不过要记得在 actions 里面做完数据业务逻辑的操作。

等价于如下的函数调用，

```typescript
undefined;
```

`actions`里面的函数主要用来处理异步的函数以及一些业务逻辑,每一个函数里面都有一个形参，这个形参是一个对象，里面有一个`commit`方法，这个方法用来触发 mutations 里面的方法

### 3、mapMutations：把 mutations 里面的方法映射到 methods 中

只是做简单的数据修改（例如 n++），它没有涉及到数据的处理，没有用到业务逻辑或者异步函数，可以直接调用 mutations 里的方法修改数据。

```typescript
undefined;
```

`mutations`里面的函数主要用来修改`state`中的数据。`mutations`里面的所有方法都会有 2 个参数，一个是`store`中的`state`，另外一个是需要传递的参数。

理解`state`、`actions`、`mutations`，可以参考`MVC`框架。

- `state`看成一个数据库，只是它是响应式的，刷新页面数据就会改变；
- `actions`看成 controller 层，做数据的业务逻辑；
- `mutations`看成 model 层，做数据的增删改查操作。

### 4、mapGetters:把 getters 属性映射到 computed 身上

```typescript
undefined;
```

`getters`类似于组件里面`computed`，同时也监听属性的变化，当`state`中的属性发生改变的时候就会触发`getters`里面的方法。`getters`里面的每一个方法中都会有一个参数 `state`。

### 5、modules 属性: 模块

把公共的状态按照模块进行划分

- 每个模块都相当于一个小型的 Vuex
- 每个模块里面都会有`state` `getters` `actions` `mutations`
- 切记在导出模块的时候加一个 `namespaced:true` 主要的作用是将每个模块都有独立命名空间
- `namespace：true`在多人协作开发的时候，可能子模块和主模块中的函数名字会相同，这样在调用函数的时候，相同名字的函数都会被调用，就会发生问题。为了解决这个问题，导出模块的时候要加`namespace：true`.

那么怎么调用子模块中的函数呢？假如我的子模块名字为 todo.js。 函数名字就需要改成 todo/函数名字。输出模块后的 store 实例如下图所示：

![](https://ae01.alicdn.com/kf/H248f94267f4d4336b43adfce56205262P.png)

预览

可以看到模块化后，store 实例的 state 属性的访问方式也改变了，`this.$store.state.todo.inputVal`

可以简单总结一下辅助函数通过 vuex 使用，比喻成映射关系为：

- `mapState/mapGettes---&gt;computed` ；
- `mapAcions/mapMutations----&gt;methods`

## 命名空间

模块开启命名空间后，享有独自的命名空间。示例代码如下：

```typescript
undefined;
```

`mapState`、`mapGetters`、`mapMutations`、`mapActions`第一个参数是字符串（命名空间名称），第二个参数是数组（不需要重命名）/对象（需要重命名）。

```typescript
undefined;
```
