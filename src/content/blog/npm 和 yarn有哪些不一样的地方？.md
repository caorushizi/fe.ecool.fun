---
title: npm 和 yarn有哪些不一样的地方？
pubDatetime: 2022-02-16T16:00:00.000Z
author: caorushizi
tags:
  - 工具
postSlug: be111a13ebae797afae728c9fd5b8aeb
description: >-
  早期的npm------其实在最早期的`npm`版本(npmv2)，`npm`的设计可以说是非常的简单，在安装依赖的时候会将依赖放到`node_modules`文件中。同时，如果某个直接依赖A依赖于其
difficulty: 3
questionNumber: 6
source: >-
  https://fe.ecool.fun/topic-answer/afe26637-d92a-43be-a4e4-e55b1a6d3d02?orderBy=updateTime&order=desc&tagId=29
---

## 早期的 npm

其实在最早期的`npm`版本(npm v2)，`npm`的设计可以说是非常的简单，在安装依赖的时候会将依赖放到 `node_modules`文件中。同时，如果某个直接依赖 A 依赖于其他的依赖包 B，那么依赖 B 会作为间接依赖，安装到依赖 A 的文件夹`node_modules`中，然后可能多个包之间也会有出现同样的依赖递归的，如果项目一旦过大,那么必然会形成一棵巨大的依赖树，依赖包会出现重复，形成`嵌套地狱`。

那么我们如何去理解"嵌套地狱"呢？

- 首先,项目的依赖树的层级过于深，如果有问题不利于排查和调试
- 在依赖的分支中,可能会出现同样版本的相互依赖的问题

那么这样的重复问题会带来什么后果呢？

- 首先,会使得安装的结果占据了大量的空间资源,造成了资源的浪费
- 同时,因为安装的依赖重复,会造成在安装依赖时,安装时间过长
- 甚至是,因为目录层级过深,导致文件路径过长,会在`windows`系统下删除`node_modules`文件,出现删除不掉的情况

那么, 后面的版本是如何一步步进行优化的呢？后面会陆续的揭晓。

## npm or yarn 开发中的一点疑惑

你在实际的开发会不会出现这样的一些情况：

1.  当你项目依赖出现问题的时候，我们会不会是直接删除 `node_modules 和 lockfiles`依赖，再重新 `npm install`，删除大法是否真的好用？这样的使用方案会不会带来什么问题？
2.  把所有的依赖包都安装到`dependencies`中，对`devDependencies` 不区分会不会有问题?
3.  一个项目中，你使用 `yarn`，我使用`npm`，会不会有问题呢？
4.  还有一个问题，`lockfiles 文件` 我们提交代码的时候需不需要提交到仓库中呢？

## npm 的安装机制和核心原理

我们可以先来看看 npm 的核心目标

> Bring the best of open source to you, your team and your company.

意思是 给你和你的团队、你的公司带来最好的开源库和依赖。 通过这句话,我们可以了解到 npm 最重要的一点就是安装和维护依赖。那么，让我们先来看一看`npm`的安装机制是怎样的呢？

### npm 的安装机制

下面我们会通过一个流程图来具体学习`npm install`的安装机制

![](https://ae04.alicdn.com/kf/H5f7e9047bb794016a6464c7b93f79938p.png)

`npm install`执行之后，首先会检查和获取 `npm的配置`，这里的优先级为：

`项目级的.npmrc文件 > 用户级的 .npmrc文件 > 全局级的 .npmrc > npm内置的 .npmrc 文件`

然后检查项目中是否有 `package-lock.json`文件

- 如果有，检查 `package-lock.json`和 `package.json`声明的依赖是否一致：

  - 一致。直接使用`package-lock.json`中的信息,从网络或者缓存中加载依赖。
  - 不一致。根据上述流程中的不同版本进行处理。

- 如果没有，那么会根据`package.json`递归构建依赖树，然后就会根据构建好的依赖去下载完整的依赖资源，在下载的时候，会检查有没有相关的资源缓存：

  - 存在。直接解压到`node_modules`文件中。
  - 不存在。从 npm 远端仓库下载包，校验包的完整性，同时添加到缓存中，解压到 `node_modules`中。

最后，生成 `package-lock.json` 文件。

其实，在我们实际的项目开发中，使用 npm 作为团队的最佳实践: `同一个项目团队，应该保持npm 版本的一致性`。

从上面的安装流程，不知道大家注意到了一点没有，在实际的项目开发中，如果每次都去安装对应依赖时，如果相关的依赖包体积过大或者是依赖于网络，无疑会增加安装的时间成本。那么，缓存在这里的就是一个解决问题的好办法。

## yarn 的出现

yarn 是一个由`Facebook`、`Google`、`Exponent`和`Tilde`构建的新的 JavaScript 包管理器。它的出现是为了解决历史上`npm`的某些不足(比如 npm 对于依赖的完整性和一致性的保证,以及 npm 安装过程中速度很慢的问题)

当 npm 还处于`v3`时期的时候，一个叫`yarn`的包管理工具横空出世。在 2016 年，npm 还没有 package-lock.json 文件，安装的时候速度很慢，稳定性很差，`yarn`的出现很好的解决了一下的一些问题：

- **确定性:** 通过 yarn.lock 等机制，即使是不同的安装顺序，相同的依赖关系在任何的环境和容器中，都可以以相同的方式安装。(那么,此时的 npm v5 之前,并没有 package-lock.json 机制，只有默认并不会使用 npm-shrinkwrap.json)
- **采用模块扁平化的安装模式:** 将不同版本的依赖包，按照一定的策略，归结为单个版本。以避免创建多个版本造成工程的冗余(目前的 npm 也有相同的优化)
- **网络性能更好:** `yarn`采用了请求排队的理念，类似于并发池连接，能够更好的利用网络资源；同时也引入了一种安装失败的重试机制。
- **采用缓存机制，实现了离线模式** (目前的 npm 也有类似的实现)

我们可以来看一下 `yarn.lock`的结构：

    "@babel/cli@^7.1.6", "@babel/cli@^7.5.5":
      version "7.8.4"
      resolved "http://npm.in.zhihu.com/@babel%2fcli/-/cli-7.8.4.tgz#505fb053721a98777b2b175323ea4f090b7d3c1c"
      integrity sha1-UF+wU3IamHd7KxdTI+pPCQt9PBw=
      dependencies:
        commander "^4.0.1"
        convert-source-map "^1.1.0"
        fs-readdir-recursive "^1.1.0"
        glob "^7.0.0"
        lodash "^4.17.13"
        make-dir "^2.1.0"
        slash "^2.0.0"
        source-map "^0.5.0"
      optionalDependencies:
        chokidar "^2.1.8"

熟悉 npm 的`package-lock.json`文件的朋友，可能一眼就看到了一些不同; `package-lock.json`采用的是`JSON`的结构，而`yarn`并没有采用这种结构，而是一种自定义的标记方式;我们可以看出新的自定义的方式，也同样保持了高度的可读性。

**相比于 npm,Yarn 另一个显著的区别就是 yarn.lock 的子依赖的版本不是固定的版本**。这其实就说明了一个问题：一个单独的`yarn.lock`的问题并不能确定`node_modules`的文件结构，还需要`package.json`的配合。

### yarn 的安装机制

上面一小节我们对 npm 的安装机制有了一些基本的了解,现在让我们先来简单的看一下`Yarn`的安装理念。

简单来说, `Yarn`的安装大致分为 5 个步骤：

![](https://ae01.alicdn.com/kf/H6a301654aeb54b1ebe0d58ceed2280a28.png)

检测(checking) ---> 解析包(Resolving Packages) ---> 获取包(Fetching) ---> 链接包(Linking Packages) ---> 构建包(Building Packages)

那么接下来我们要开始具体分析这些过程中都做了哪些事情:

**检测包**

这一步，最主要的目的就是检测我们的项目中是否存在 npm 相关的文件,比如`package-lock.json`等;如果有,就会有相关的提示用户注意：这些文件可能会存在冲突。在这一步骤中 也会检测系统 OS, CPU 等信息。

**解析包**

这一步会解析依赖树中的每一个包的信息:

首先呢,获取到`首层依赖`: 也就是我们当前所处的项目中的`package.json`定义的`dependencies`、`devDependencies`、`optionalDependencies`的内容。

紧接着**会采用遍历首层依赖的方式来获取包的依赖信息**,以及递归查找每个依赖下嵌套依赖的版本信息，并将解析过的包和正在进行解析包呢`用Set数据结构进行存储`,这样就可以保证`同一版本范围内的包`不会进行重复的解析:

- 对于没有解析过的包 A, 首次尝试从 `yarn.lock`中获取版本信息,并且标记为已解析
- 如果在`yarn.lock`中没有找到包 A， 则向`Registry`发起请求获取满足版本范围内的已知的最高版本的包信息,获取之后将该包标记为已解析。

总之，经过解析包这一步之后呢,我们就已经确定了解析包的具体版本信息和包的下载地址。

![](https://ae03.alicdn.com/kf/Heea67a28e5cb49aa91e2e7aa4adc0f501.png)

**获取包**

这一步首先我们会检查缓存中是否有当前依赖的包,同时呢将缓存中不存在的包下载到缓存的目录中。但是这里有一个小问题需要大家思考一下:

比如: 如何去判断缓存中有当前的依赖包呢？

**其实呢,在 Yarn 中会根据 cacheFolder+[slug](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FTrott%2Fslug "https://github.com/Trott/slug")+node_modules+pkg.name 生成一个路径;判断系统中是否存在该 path,如果存在证明已经有缓存,不用重新下载。这个 path 也就是依赖包缓存的具体路径。**

那么对于没有命中的缓存包呢？在 `Yarn` 中存在一个 Fetch 队列,按照具体的规则进行网络请求。如果下载的包是一个 file 协议,或者是相对路径,就说明指向一个本地目录,此时会调用 Fetch From Local 从离线缓存中获取包;否则调用 Fetch From External 获取包,最终获取的结果使用 fs.createWriteStream 写入到缓存目录。

![](https://ae03.alicdn.com/kf/H68e74a66cd20480b8cf42ef5a5b55c5fD.png)

**链接包**

我们上一步已经把依赖放到了缓存目录,那么下一步,我们应该要做什么事情呢？是不是应该把项目中的依赖复制到`node_modules`目录下呢,没错;只不过此时需要遵循一个扁平化的原则。复制依赖之前, `Yarn`会先解析 `peerDepdencies`，如果找不到符合要求的`peerDepdencies`的包,会有 `warning`提示，并最终拷贝依赖到项目中。

![](https://ae01.alicdn.com/kf/H6aae377c6c0340eab0b429874dfafd25p.png)

**构建包**

如果依赖包中存在二进制包需要进行编译，那么会在这一步进行。

> 作者：酒窝 yun 过去了
>
> 链接：[https://juejin.cn/post/7060844948316225572](https://juejin.cn/post/7060844948316225572)
