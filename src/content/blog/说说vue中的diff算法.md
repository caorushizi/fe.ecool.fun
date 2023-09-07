---
title: 说说vue中的diff算法
pubDatetime: 2022-06-24T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 8b5e4d81a6a92fbb10500e7fa0c329b4
description: >-
  ![](https://static.vue-js.com/5e858e30-4585-11eb-85f6-6fac77c0c9b3.png)预览一、是什么-----`diff`算法是一种通过同层的树
difficulty: 3
questionNumber: 14
source: >-
  https://fe.ecool.fun/topic-answer/7d27dc57-5d95-4e3f-88a7-eb685b7c21e4?orderBy=updateTime&order=desc&tagId=14
---

![](https://static.vue-js.com/5e858e30-4585-11eb-85f6-6fac77c0c9b3.png)

预览

## 一、是什么

`diff` 算法是一种通过同层的树节点进行比较的高效算法

其有两个特点：

- 比较只会在同层级进行, 不会跨层级比较
- 在 diff 比较的过程中，循环从两边向中间比较

`diff` 算法的在很多场景下都有应用，在 `vue` 中，作用于虚拟 `dom` 渲染成真实 `dom` 的新旧 `VNode` 节点比较

## 二、比较方式

`diff`整体策略为：深度优先，同层比较

1.  比较只会在同层级进行, 不会跨层级比较

![](https://static001.infoq.cn/resource/image/91/54/91e9c9519a11caa0c5bf70714383f054.png)

预览

2.  比较的过程中，循环从两边向中间收拢

![](https://static001.infoq.cn/resource/image/2d/ec/2dcd6ad5cf82c65b9cfc43a27ba1e4ec.png)

预览

下面举个`vue`通过`diff`算法更新的例子：

新旧`VNode`节点如下图所示：

![](https://static001.infoq.cn/resource/image/80/6d/80dc339f73b186479e6d1fc18bfbf66d.png)

预览

第一次循环后，发现旧节点 D 与新节点 D 相同，直接复用旧节点 D 作为`diff`后的第一个真实节点，同时旧节点`endIndex`移动到 C，新节点的 `startIndex` 移动到了 C

![](https://static001.infoq.cn/resource/image/76/54/76032c78c8ef74047efd42c070e48854.png)

预览

第二次循环后，同样是旧节点的末尾和新节点的开头(都是 C)相同，同理，`diff` 后创建了 C 的真实节点插入到第一次创建的 B 节点后面。同时旧节点的 `endIndex` 移动到了 B，新节点的 `startIndex` 移动到了 E

![](https://static001.infoq.cn/resource/image/1c/d7/1c76e7489660188d35f0a38ea8c8ecd7.png)

预览

第三次循环中，发现 E 没有找到，这时候只能直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 `startIndex` 移动到了 A。旧节点的 `startIndex` 和 `endIndex` 都保持不动

![](https://static001.infoq.cn/resource/image/4b/08/4b622c0d61673ec5474465d82305d308.png)

预览

第四次循环中，发现了新旧节点的开头(都是 A)相同，于是 `diff` 后创建了 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 `startIndex` 移动到了 B，新节点的 `startIndex` 移动到了 B

![](https://static001.infoq.cn/resource/image/59/b4/5982417c3e0b2fa9ae940354a0e67ab4.png)

预览

第五次循环中，情形同第四次循环一样，因此 `diff` 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 `startIndex` 移动到了 C，新节点的 startIndex 移动到了 F

![](https://static001.infoq.cn/resource/image/16/86/16cf0ef90f6e19d26c0ddffeca067e86.png)

预览

新节点的 `startIndex` 已经大于 `endIndex` 了，需要创建 `newStartIdx` 和 `newEndIdx` 之间的所有节点，也就是节点 F，直接创建 F 节点对应的真实节点放到 B 节点后面

![](https://static001.infoq.cn/resource/image/dc/ad/dc215b45682cf6c9cc4700a5425673ad.png)

预览

## 三、原理分析

当数据发生改变时，`set`方法会调用`Dep.notify`通知所有订阅者`Watcher`，订阅者就会调用`patch`给真实的`DOM`打补丁，更新相应的视图

源码位置：src/core/vdom/patch.js

```typescript
undefined;
```

`patch`函数前两个参数位为`oldVnode` 和 `Vnode` ，分别代表新的节点和之前的旧节点，主要做了四个判断：

- 没有新节点，直接触发旧节点的`destory`钩子
- 没有旧节点，说明是页面刚开始初始化的时候，此时，根本不需要比较了，直接全是新建，所以只调用 `createElm`
- 旧节点和新节点自身一样，通过 `sameVnode` 判断节点是否一样，一样时，直接调用 `patchVnode` 去处理这两个节点
- 旧节点和新节点自身不一样，当两个节点不一样的时候，直接创建新节点，删除旧节点

下面主要讲的是`patchVnode`部分

```typescript
undefined;
```

`patchVnode`主要做了几个判断：

- 新节点是否是文本节点，如果是，则直接更新`dom`的文本内容为新节点的文本内容
- 新节点和旧节点如果都有子节点，则处理比较更新子节点
- 只有新节点有子节点，旧节点没有，那么不用比较了，所有节点都是全新的，所以直接全部新建就好了，新建是指创建出所有新`DOM`，并且添加进父节点
- 只有旧节点有子节点而新节点没有，说明更新后的页面，旧节点全部都不见了，那么要做的，就是把所有的旧节点删除，也就是直接把`DOM` 删除

子节点不完全一致，则调用`updateChildren`

```typescript
undefined;
```

`while`循环主要处理了以下五种情景：

- 当新老 `VNode` 节点的 `start` 相同时，直接 `patchVnode` ，同时新老 `VNode` 节点的开始索引都加 1
- 当新老 `VNode` 节点的 `end`相同时，同样直接 `patchVnode` ，同时新老 `VNode` 节点的结束索引都减 1
- 当老 `VNode` 节点的 `start` 和新 `VNode` 节点的 `end` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldEndVnode` 的后面，同时老 `VNode` 节点开始索引加 1，新 `VNode` 节点的结束索引减 1
- 当老 `VNode` 节点的 `end` 和新 `VNode` 节点的 `start` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldStartVnode` 的前面，同时老 `VNode` 节点结束索引减 1，新 `VNode` 节点的开始索引加 1
- 如果都不满足以上四种情形，那说明没有相同的节点可以复用，则会分为以下两种情况：
  - 从旧的 `VNode` 为 `key` 值，对应 `index` 序列为 `value` 值的哈希表中找到与 `newStartVnode` 一致 `key` 的旧的 `VNode` 节点，再进行`patchVnode` ，同时将这个真实 `dom` 移动到 `oldStartVnode` 对应的真实 `dom` 的前面
  - 调用 `createElm` 创建一个新的 `dom` 节点放到当前 `newStartIdx` 的位置

### 小结

- 当数据发生改变时，订阅者`watcher`就会调用`patch`给真实的`DOM`打补丁
- 通过`isSameVnode`进行判断，相同则调用`patchVnode`方法
- `patchVnode`做了以下操作：
  - 找到对应的真实`dom`，称为`el`
  - 如果都有都有文本节点且不相等，将`el`文本节点设置为`Vnode`的文本节点
  - 如果`oldVnode`有子节点而`VNode`没有，则删除`el`子节点
  - 如果`oldVnode`没有子节点而`VNode`有，则将`VNode`的子节点真实化后添加到`el`
  - 如果两者都有子节点，则执行`updateChildren`函数比较子节点
- `updateChildren`主要做了以下操作：
  - 设置新旧`VNode`的头尾指针
  - 新旧头尾指针进行比较，循环向中间靠拢，根据情况调用`patchVnode`进行`patch`重复流程、调用`createElem`创建一个新节点，从哈希表寻找 `key`一致的`VNode` 节点再分情况操作
