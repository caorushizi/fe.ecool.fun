---
title: 说说你对 pnpm 的了解
pubDatetime: 2022-10-10T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 082bd22b7efe9f9f5ca0a946be698adb
description: >-
  pnpm的官方文档是这样说的:>Fast,diskspaceefficientpackagemanagerpnpm本质上就是一个包管理器，这一点跟npm/yarn没有区别，但它作为杀手锏的两个优势在于
difficulty: 3.5
questionNumber: 69
source: >-
  https://fe.ecool.fun/topic-answer/92fa7f2d-4f03-469b-84bd-82d693022802?orderBy=updateTime&order=desc&tagId=10
---

pnpm 的官方文档是这样说的:

> Fast, disk space efficient package manager

pnpm 本质上就是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:

- 包安装速度极快；
- 磁盘空间利用非常高效。

pnpm 与 npm/yarn 相似，也是一个包管理器，但与他们不同的是，作者设计了一套理论上更完善的依赖结构以及高效的文件复用，来解决 npm/yarn 未打算解决或还不够完善的问题。

### 嵌套 + 扁平 + pnpm-lock.yaml

打开通过 pnpm 安装的项目 node_modules 文件夹，你会发现几乎只会有当前 **package.json** 中所声明的各个依赖（的软连接），而 "真正" 的模块文件，存在于 **node_modules/.pnpm**，由 **模块名@版本号** 形式的文件夹**扁平化**存储（解决依赖重复安装）。

这样的设计，很好的避免了项目中 **跨声明访问** 的问题，因为当前项目 **node_modules** 只有声明的依赖可以访问。

而 **pnpm-lock.yaml** 文件如同 yarn.lock、package-lock.json 一样，可以为项目提供一份各个依赖稳定的版本信息。

### 硬链接与更高效的复用

与 yarn 的 **PnP 模式** 效果类似，为了提升**文件存储效率**以及降低文件**IO 开销**，**node_modules/.pnpm** 中存储的文件其实是 pnpm 实际缓存文件的 **硬链接**，从而避免了多个项目带来多份相同文件引起的空间浪费问题。

pnpm 还额外的使用了 **内容寻址的文件系统** 来存储依赖文件。当遇到**两个版本**的 **a 模块** 依赖，但两个版本之前只有**一个文件**存在差异时，pnpm 只会新增一个差异文件，最大化的提升文件存储效率。
