---
title: 你在React项目中是如何使用Redux的? 项目结构是如何划分的？
pubDatetime: 2021-10-24T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 262407ce9296cb82e3586dfa17adb2e6
description: >-
  一、背景----`redux`是用于数据状态管理，而`react`是一个视图层面的库如果将两者连接在一起，可以使用官方推荐`react-redux`库，其具有高效且灵活的特性`react-redux`
difficulty: 2.5
questionNumber: 57
source: >-
  https://fe.ecool.fun/topic-answer/89865bbd-72ac-4866-b4f6-a24f9c594d07?orderBy=updateTime&order=desc&tagId=13
---

## 一、背景

`redux`是用于数据状态管理，而`react`是一个视图层面的库

如果将两者连接在一起，可以使用官方推荐`react-redux`库，其具有高效且灵活的特性

`react-redux`将组件分成：

- 容器组件：存在逻辑处理
- UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制

通过`redux`将整个应用状态存储到`store`中，组件可以派发`dispatch`行为`action`给`store`

其他组件通过订阅`store`中的状态`state`来更新自身的视图

## 二、如何做

使用`react-redux`分成了两大核心：

- Provider
- connection

### Provider

在`redux`中存在一个`store`用于存储`state`，如果将这个`store`存放在顶层元素中，其他组件都被包裹在顶层元素之上

那么所有的组件都能够受到`redux`的控制，都能够获取到`redux`中的数据

使用方式如下：

```typescript
undefined;
```

### connection

`connect`方法将`store`上的`getState` 和 `dispatch` 包装成组件的`props`

导入`conect`如下：

```typescript
undefined;
```

用法如下：

```typescript
undefined;
```

可以传递两个参数：

- mapStateToProps
- mapDispatchToProps

### mapStateToProps

把`redux`中的数据映射到`react`中的`props`中去

如下：

```typescript
undefined;
```

组件内部就能够通过`props`获取到`store`中的数据

```typescript
undefined;
```

### mapDispatchToProps

将`redux`中的`dispatch`映射到组件内部的`props`中

```typescript
undefined;
```

```typescript
undefined;
```

### 小结

整体流程图大致如下所示：

![](https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png)

预览

## 三、项目结构

可以根据项目具体情况进行选择，以下列出两种常见的组织结构

#### 按角色组织（MVC）

角色如下：

- reducers
- actions
- components
- containers

参考如下：

```typescript
undefined;
```

#### 按功能组织

使用`redux`使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码

`Redux`中，不同的角色就是`reducer`、`actions`和视图，而应用功能对应的就是用户界面的交互模块

参考如下：

```typescript
undefined;
```

每个功能模块对应一个目录，每个目录下包含同样的角色文件：

- actionTypes.js 定义 action 类型
- actions.js 定义 action 构造函数
- reducer.js 定义这个功能模块如果响应 actions.js 定义的动作
- views 包含功能模块中所有的 React 组件，包括展示组件和容器组件
- index.js 把所有的角色导入，统一导出

其中`index`模块用于导出对外的接口

```typescript
undefined;
```

导入方法如下：

```typescript
undefined;
```
