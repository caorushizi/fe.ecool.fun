---
title: 说说webpack中常见的Plugin？解决了什么问题？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: 1e2a6795d5b28cce8569168ffe8c2407
description: >-
  ![](https://static.vue-js.com/8d3978a0-a7c2-11eb-85f6-6fac77c0c9b3.png)预览一、是什么-----`Plugin`（Plug-in）
difficulty: 1.5
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/b8ef6782-9f7e-4bb2-824f-3e0259322dae?orderBy=updateTime&order=desc&tagId=28
---

![](https://static.vue-js.com/8d3978a0-a7c2-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、是什么

`Plugin`（Plug-in）是一种计算机应用程序，它和主应用程序互相交互，以提供特定的功能

是一种遵循一定规范的应用程序接口编写出来的程序，只能运行在程序规定的系统下，因为其需要调用原纯净系统提供的函数库或者数据

`webpack`中的`plugin`也是如此，`plugin`赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 `webpack` 的不同阶段（钩子 / 生命周期），贯穿了`webpack`整个编译周期

![](https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png)

预览

目的在于解决`loader` 无法实现的其他事

### 配置方式

这里讲述文件的配置方式，一般情况，通过配置文件导出对象中`plugins`属性传入`new`实例对象。如下所示：

```typescript
undefined;
```

## 二、特性

其本质是一个具有`apply`方法`javascript`对象

`apply` 方法会被 `webpack compiler` 调用，并且在整个编译生命周期都可以访问 `compiler` 对象

```typescript
undefined;
```

`compiler hook` 的 `tap` 方法的第一个参数，应是驼峰式命名的插件名称

关于整个编译生命周期钩子，有如下：

- entry-option ：初始化 option
- run
- compile： 真正开始的编译，在创建 compilation 对象之前
- compilation ：生成好了 compilation 对象
- make 从 entry 开始递归分析依赖，准备对每个模块进行 build
- after-compile： 编译 build 过程结束
- emit ：在将内存中 assets 内容写到磁盘文件夹之前
- after-emit ：在将内存中 assets 内容写到磁盘文件夹之后
- done： 完成所有的编译过程
- failed： 编译失败的时候

## 三、常见的 Plugin

常见的`plugin`有如图所示：

![](https://static.vue-js.com/bd749400-a7c2-11eb-85f6-6fac77c0c9b3.png)

预览

下面介绍几个常用的插件用法：

### HtmlWebpackPlugin

在打包结束后，⾃动生成⼀个 `html` ⽂文件，并把打包生成的 `js` 模块引⼊到该 `html` 中

```typescript
undefined;
```

```typescript
undefined;
```

```typescript
undefined;
```

在 `html` 模板中，可以通过 `<%=htmlWebpackPlugin.options.XXX%>` 的方式获取配置的值

更多的配置可以自寻查找

### clean-webpack-plugin

删除（清理）构建目录

```typescript
undefined;
```

```typescript
undefined;
```

### mini-css-extract-plugin

提取 `CSS` 到一个单独的文件中

```typescript
undefined;
```

```typescript
undefined;
```

### DefinePlugin

允许在编译时创建配置的全局对象，是一个`webpack`内置的插件，不需要安装

```typescript
undefined;
```

这时候编译`template`模块的时候，就能通过下述形式获取全局对象

```typescript
undefined;
```

### copy-webpack-plugin

复制文件或目录到执行区域，如`vue`的打包过程中，如果我们将一些文件放到`public`的目录下，那么这个目录会被复制到`dist`文件夹中

```typescript
undefined;
```

```typescript
undefined;
```

复制的规则在`patterns`属性中设置：

- from：设置从哪一个源中开始复制
- to：复制到的位置，可以省略，会默认复制到打包的目录下
- globOptions：设置一些额外的选项，其中可以编写需要忽略的文件
