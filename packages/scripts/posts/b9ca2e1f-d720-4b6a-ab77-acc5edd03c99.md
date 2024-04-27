---
title: 树转数组
pubDatetime: 2023-08-20T21:21:17.000Z
author: caorushizi
tags:
  - 编程题
postSlug: b9ca2e1f-d720-4b6a-ab77-acc5edd03c99
description: >-
  将以下结构的数据转成数组。 const listTree = [ { id: 1, name: '部门1', pid: 0, children: [ {
  id: 2, name: '部门1-1', pid: 1, children: [ { id: 4, name: '部门1-1-1', pid: 2,
  children: [] } ] }, { id: 3, name: '部门1-2', pid
difficulty: 2
questionNumber: 1954
source: https://fe.ecool.fun/topic/b9ca2e1f-d720-4b6a-ab77-acc5edd03c99
---

将以下结构的数据转成数组。

```js
const listTree = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门1-1",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门1-1-1",
            pid: 2,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "部门1-2",
        pid: 1,
        children: [
          {
            id: 5,
            name: "部门1-2-1",
            pid: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "部门2",
    pid: 0,
    children: [
      {
        id: 7,
        name: "部门2-1",
        pid: 6,
        children: [],
      },
    ],
  },
  {
    id: 8,
    name: "部门3",
    pid: 0,
    children: [],
  },
];
```

期望结果：

```js
const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门1-1", pid: 1 },
  { id: 3, name: "部门1-2", pid: 1 },
  { id: 4, name: "部门1-1-1", pid: 2 },
  { id: 5, name: "部门1-2-1", pid: 3 },
  { id: 6, name: "部门2", pid: 0 },
  { id: 7, name: "部门2-1", pid: 6 },
  { id: 8, name: "部门3", pid: 0 },
];
```

---

## reduce取树行数据的所有子集

```js
function treeTransList(tree, key) {
  return tree
    .reduce(function (con, item) {
      var callee = arguments.callee;
      con.push(item);
      if (item[key] && item[key].length > 0) item[key].reduce(callee, con);
      return con;
    }, [])
    .map(function (item) {
      item[key] = [];
      return item;
    });
}
treeTransList(listTree, "children");
```

## 递归实现

```js
function getItem(tree, result) {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      getItem(tree[i].children, result);
      delete tree[i].children;
    }
    result.push(tree[i]);
  }
  return result;
}

function treeToList(tree) {
  const result = [];
  getItem(tree, result);
  return result;
}
treeToList(listTree);
```

## 广度优先遍历法

```js
function treeToList(tree, childName = "children") {
  // 设置临时数组，用来存放队列
  let queen = [];
  // 设置输出数组，用来存放要输出的一维数组
  const result = [];
  queen = queen.concat(tree);
  // 对树对象进行广度优先的遍历
  while (queen.length) {
    const first = queen.shift();
    if (first[childName]) {
      queen = queen.concat(first[childName]);
      delete first[childName];
    }
    result.push(first);
  }
  return result;
}
treeToList(listTree, "children");
```
