---
title: mouseEnter 和 mouseOver 有什么区别？
pubDatetime: 2024-05-22T11:13:30.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: d754a6cd-fffc-496b-92f2-b4a9bedcf15c
description: " mouseenter 和 mouseover 是两个用于处理鼠标进入元素时的事件，但它们在一些关键点上有所不同： 事件冒泡： mouseenter：这个事件在鼠标指针首次进入特定元素（或其子元素）时触发。当鼠标进入元素时，会触发该元素的 mouseenter 事件，但不会在元素的子元素上冒泡。因此，该事件通常用于检测鼠标首次进入元素时的动作。 mouseover：这个事件在鼠标指针移动到某个元素"
difficulty: 1
questionNumber: 1978
source: https://fe.ecool.fun/topic/d754a6cd-fffc-496b-92f2-b4a9bedcf15c
---

`mouseenter` 和 `mouseover` 是两个用于处理鼠标进入元素时的事件，但它们在一些关键点上有所不同：

1. **事件冒泡**：

   - `mouseenter`：这个事件在鼠标指针首次进入特定元素（或其子元素）时触发。当鼠标进入元素时，会触发该元素的 `mouseenter` 事件，但不会在元素的子元素上冒泡。因此，该事件通常用于检测鼠标首次进入元素时的动作。

   - `mouseover`：这个事件在鼠标指针移动到某个元素上时触发，不论它是直接在这个元素上触发还是在其子元素上触发。当鼠标进入一个元素时，它会在该元素上触发 `mouseover` 事件，然后冒泡到父元素。

2. **事件触发范围**：

   - `mouseenter`：当鼠标进入元素自身时触发，只在目标元素上触发，不会因为鼠标移动到其子元素上而再次触发。

   - `mouseover`：不仅在目标元素上触发，也在其子元素上触发。所以，如果鼠标从一个子元素移动到另一个子元素，这些元素的父元素会触发多个 `mouseover` 事件。

3. **事件对象的属性**：

   - `mouseenter`：事件对象通常会有 `relatedTarget` 属性，它指向鼠标移动前的那个元素。如果 `relatedTarget` 指向目标元素或为 `null`，那么事件就不会触发。

   - `mouseover`：事件对象也会有 `relatedTarget` 属性，通常指向从中离开的那个元素。

### 使用场景

- `mouseenter` 更适合用来检测鼠标首次进入某个元素时的行为。
- `mouseover` 更适合用来检测鼠标在元素或其子元素之间移动时的行为，因为它冒泡。

在实际使用时，如果你只想在鼠标首次进入元素时触发某些行为（比如显示一个提示），可以使用 `mouseenter`；如果你希望在鼠标移动到某个元素或其子元素上时都触发某些行为（比如动态改变样式），可以使用 `mouseover`。
