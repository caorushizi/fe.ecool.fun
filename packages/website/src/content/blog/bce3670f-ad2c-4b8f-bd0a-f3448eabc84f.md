---
title: Electron 中的主进程和渲染进程分别是什么？
pubDatetime: 2024-08-10T17:07:19.000Z
author: caorushizi
tags:
  - 跨端技术
postSlug: bce3670f-ad2c-4b8f-bd0a-f3448eabc84f
description: >-
  在 Electron 中，应用程序的架构分为两个主要进程：主进程和渲染进程。这两个进程分别承担不同的职责，并且有不同的角色和功能。 1. 主进程（Main
  Process） 定义：主进程是 Electron 应用的核心进程，它负责创建和管理应用窗口，以及控制整个应用的生命周期。 职责： 创建窗口：主进程使用
  BrowserWindow 类创建和管理应用窗口。 管理窗口：处理窗口的创建、关闭、最小化
difficulty: 1.5
questionNumber: 1991
source: https://fe.ecool.fun/topic/bce3670f-ad2c-4b8f-bd0a-f3448eabc84f
---

在 Electron 中，应用程序的架构分为两个主要进程：**主进程**和**渲染进程**。这两个进程分别承担不同的职责，并且有不同的角色和功能。

### **1. 主进程（Main Process）**

- **定义**：主进程是 Electron 应用的核心进程，它负责创建和管理应用窗口，以及控制整个应用的生命周期。
- **职责**：

  - **创建窗口**：主进程使用 `BrowserWindow` 类创建和管理应用窗口。
  - **管理窗口**：处理窗口的创建、关闭、最小化、最大化等操作。
  - **处理系统事件**：例如，处理应用程序的启动、退出、系统托盘图标等。
  - **与渲染进程通信**：通过 IPC（进程间通信）与渲染进程进行通信。
  - **访问 Node.js API**：可以使用 Node.js 的核心模块，如文件系统、网络、进程管理等。

- **示例代码**：

  ```javascript
  // main.js
  const { app, BrowserWindow } = require("electron");

  function createWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
    mainWindow.loadFile("index.html");
  }

  app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
  ```

### **2. 渲染进程（Renderer Process）**

- **定义**：渲染进程是为每个应用窗口创建的独立进程，它负责渲染窗口的内容并处理用户界面（UI）的逻辑。
- **职责**：

  - **渲染内容**：负责显示 HTML、CSS 和 JavaScript 内容，类似于传统的浏览器渲染页面。
  - **处理用户交互**：处理用户的输入事件，如点击、键盘输入等。
  - **与主进程通信**：通过 IPC 与主进程进行通信，实现数据交换和功能调用。
  - **访问 Web API**：使用浏览器环境提供的 API，如 `document`、`window`、`fetch` 等。

- **示例代码**：

  ```javascript
  // renderer.js
  const { ipcRenderer } = require("electron");

  // 发送消息到主进程
  ipcRenderer.send("message", "Hello from renderer");

  // 监听主进程的消息
  ipcRenderer.on("reply", (event, data) => {
    console.log(`Received reply: ${data}`);
  });
  ```

### **进程间通信（IPC）**

- **主进程与渲染进程通信**：使用 IPC 模块进行进程间通信。主进程和渲染进程通过 `ipcMain` 和 `ipcRenderer` 对象发送和接收消息。

  - **主进程发送消息**：

    ```javascript
    // main.js
    const { ipcMain } = require("electron");

    ipcMain.on("message", (event, arg) => {
      console.log(arg); // 'Hello from renderer'
      event.reply("reply", "Hello from main");
    });
    ```

  - **渲染进程发送消息**：

    ```javascript
    // renderer.js
    const { ipcRenderer } = require("electron");

    ipcRenderer.send("message", "Hello from renderer");
    ipcRenderer.on("reply", (event, arg) => {
      console.log(arg); // 'Hello from main'
    });
    ```
