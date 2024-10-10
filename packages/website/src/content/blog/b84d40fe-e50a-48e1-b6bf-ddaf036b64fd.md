---
title: Service Worker 是如何缓存 http 请求资源的？
pubDatetime: 2024-08-15T09:39:41.000Z
author: caorushizi
tags:
  - 性能优化
postSlug: b84d40fe-e50a-48e1-b6bf-ddaf036b64fd
description: >-
  Service Worker 的缓存机制是通过缓存 API 实现的，它允许开发者拦截和缓存 HTTP 请求，以提高离线体验和加速页面加载。以下是
  Service Worker 缓存 HTTP 请求资源的基本流程和原理： 1. 注册 Service Worker 首先，Service Worker
  需要在浏览器中注册。通常在主线程（如 JavaScript 入口文件）中进行注册： if ('serv
difficulty: 3.5
questionNumber: 2641
source: https://fe.ecool.fun/topic/b84d40fe-e50a-48e1-b6bf-ddaf036b64fd
---

Service Worker 的缓存机制是通过缓存 API 实现的，它允许开发者拦截和缓存 HTTP 请求，以提高离线体验和加速页面加载。以下是 Service Worker 缓存 HTTP 请求资源的基本流程和原理：

### **1. 注册 Service Worker**

首先，Service Worker 需要在浏览器中注册。通常在主线程（如 JavaScript 入口文件）中进行注册：

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
```

### **2. 安装 Service Worker**

在 Service Worker 脚本中，首先会触发 `install` 事件。在这个事件中，可以预缓存一些资源，以便在 Service Worker 激活后立即可用：

```javascript
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/styles/main.css",
        "/scripts/main.js",
        "/images/logo.png",
      ]);
    }),
  );
});
```

### **3. 激活 Service Worker**

`activate` 事件在 Service Worker 安装完成后触发。可以在这个事件中进行缓存清理，删除旧的缓存：

```javascript
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // 这里可以指定要删除的缓存
            return cacheName !== "my-cache-v1";
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          }),
      );
    }),
  );
});
```

### **4. 拦截和缓存请求**

`fetch` 事件允许 Service Worker 拦截所有的网络请求。可以根据需要从缓存中返回资源，或将请求转发到网络：

```javascript
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        // 如果缓存中有匹配的资源，直接返回
        if (cachedResponse) {
          return cachedResponse;
        }

        // 否则，发起网络请求
        return fetch(event.request).then((response) => {
          // 克隆响应对象，因为响应只能被消费一次
          const responseClone = response.clone();

          // 将网络请求的结果缓存
          caches.open("my-cache-v1").then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        });
      })
      .catch(() => {
        // 网络和缓存都失败的情况
        return new Response("Oops, something went wrong.");
      }),
  );
});
```

### **5. 资源管理**

- **缓存清理**：定期删除过期或不再需要的缓存，保持缓存的健康状态。
- **缓存策略**：可以实现不同的缓存策略，如缓存优先、网络优先、缓存和网络同时等。
