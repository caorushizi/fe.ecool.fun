---
title: 两数相加
pubDatetime: 2021-09-05T20:18:45.000Z
author: caorushizi
tags:
  - leetcode
postSlug: a4eeac78-8db1-44df-ae79-a5adb65eb55b
description: >-
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
  请你将两个数相加，并以相同形式返回一个表示和的链表。 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。 示例 1： 输入：l1 =
  [2,4,3], l2 = [5,6,4] 输出：[7,0,8] 解释：342 + 465 = 807. 示例 2： 输入：l1 = [
difficulty: 3
questionNumber: 613
source: https://fe.ecool.fun/topic/a4eeac78-8db1-44df-ae79-a5adb65eb55b
---

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

- 示例 1：

![image.png](https://i.loli.net/2021/09/05/68MQqU7exR4YzTr.png)

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

- 示例 2：

```
输入：l1 = [0], l2 = [0]
输出：[0]
```

- 示例 3：

```
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

- 提示：
  - 每个链表中的节点数在范围 [1, 100] 内
  - 0 <= Node.val <= 9
  - 题目数据保证列表表示的数字不含前导零

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
```

---

## 思路与算法

由于输入的两个链表都是**逆序**存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。

我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。具体而言，如果当前两个链表处相应位置的数字为 n1,n2，进位值为 carry，则它们的和为 n1+n2+carry；其中，答案链表处相应位置的数字为 (n1+n2+carry) mod 10，而新的进位值为
(n1+n2+carry) / 10 。

如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 00 。

此外，如果链表遍历结束后，有 carry > 0，还需要在答案链表的后面附加一个节点，节点的值为 carry。

## 代码

```javascript
var addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
};
```

## 复杂度分析

- 时间复杂度：O(max(m,n))，其中 m 和 n 分别为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1) 的时间。

- 空间复杂度：O(1)。注意返回值不计入空间复杂度。
