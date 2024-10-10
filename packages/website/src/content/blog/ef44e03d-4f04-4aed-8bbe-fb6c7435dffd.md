---
title: 衡量页面性能的指标有哪些？
pubDatetime: 2024-09-05T01:25:42.000Z
author: caorushizi
tags:
  - 性能优化
postSlug: ef44e03d-4f04-4aed-8bbe-fb6c7435dffd
description: >-
  衡量页面性能的指标有助于评估网页的加载速度、响应能力和用户体验。 以下是一些常见的性能指标： 1. 加载时间指标 Page Load
  Time：页面从开始加载到完全加载所需的时间。包括所有资源（HTML、CSS、JavaScript、图片等）的下载时间。 Time to First
  Byte (TTFB)：从发出请求到接收到第一个字节的时间。衡量服务器响应速度。 First Contentful
difficulty: 2
questionNumber: 2395
source: https://fe.ecool.fun/topic/ef44e03d-4f04-4aed-8bbe-fb6c7435dffd
---

衡量页面性能的指标有助于评估网页的加载速度、响应能力和用户体验。

以下是一些常见的性能指标：

### **1. 加载时间指标**

- **Page Load Time**：页面从开始加载到完全加载所需的时间。包括所有资源（HTML、CSS、JavaScript、图片等）的下载时间。
- **Time to First Byte (TTFB)**：从发出请求到接收到第一个字节的时间。衡量服务器响应速度。
- **First Contentful Paint (FCP)**：页面上首次呈现内容（文本、图片等）的时间。
- **Largest Contentful Paint (LCP)**：页面上最大内容元素（如大图像或大文本块）的渲染时间。
- **DOM Content Loaded (DCL)**：HTML 文档被完全加载和解析完成（不包括样式表、图像等）的时间。
- **Fully Loaded Time**：页面所有资源（包括图像、样式表、脚本等）加载完成的时间。

### **2. 用户体验指标**

- **First Interactive**：页面开始响应用户交互（点击、滚动等）的时间。
- **First Meaningful Paint (FMP)**：页面上主要内容首次呈现的时间。比 FCP 更能反映页面实际内容的显示情况。
- **Time to Interactive (TTI)**：页面变得完全可交互（用户可以开始与页面交互，所有脚本已加载并执行）的时间。
- **Cumulative Layout Shift (CLS)**：页面内容在加载过程中发生的意外布局偏移量。衡量页面视觉稳定性。

### **3. 网络性能指标**

- **Total Page Size**：页面的总大小，包括所有资源（HTML、CSS、JavaScript、图片等）的大小。
- **Number of Requests**：页面加载过程中发出的请求总数。请求数量多可能会影响加载性能。
- **Resource Load Time**：各个资源（如 CSS、JavaScript 文件、图片）的加载时间。

### **4. JavaScript 性能指标**

- **JavaScript Execution Time**：页面中 JavaScript 代码的执行时间。长时间运行的脚本可能会阻塞页面渲染。
- **Script Parse and Compile Time**：解析和编译 JavaScript 脚本所需的时间。

### **5. 性能工具和指标**

- **Web Vitals**：Google 提供的一组关键 Web 性能指标，包括 LCP、FCP、CLS 等。
- **Lighthouse**：Google 提供的开源自动化工具，分析网页性能、可访问性和 SEO 等方面。
- **PageSpeed Insights**：Google 的工具，提供页面性能评分和优化建议。
- **Chrome DevTools**：浏览器开发者工具，用于实时分析和调试网页性能问题。
