---
title: POST请求的Content-Type有哪几种？
pubDatetime: 2022-07-23T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: b6ac01b86df487218d960760cd5d7d94
description: >-
  HTTP中，提交数据的方式，最常用的就是GET和POST。GET方式，是把参数按键值对通过QueryString的方式放在URL尾部，比如：`http://www.example.com/test.h
difficulty: 3
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/c1480af9-8901-495f-8a26-f6c5e530a6a2?orderBy=updateTime&order=desc&tagId=16
---

HTTP 中，提交数据的方式，最常用的就是 GET 和 POST。

GET 方式，是把参数按键值对通过 QueryString 的方式放在 URL 尾部，比如： `http://www.example.com/test.html?a=1&b=2`

POST 方法，通常是把要提交的表单放在一个 Form 中，指明 action 后就可以提交数据。

提交数据时需要通过表单`enctype`属性（规定在发送到服务器之前应该如何对表单数据进行编码）根据`content type`进行编码。

并且，如果是 GET，用”?”连接，编码方式为“application/x-www-form-urlencoded”；如果是 POST，则根据`enctype`属性确定`content type`，默认也为”application/x-www-form-urlencoded”。

![](https://pic.rmb.bdstatic.com/bjh/8a58af0592547e14f61032bce95f158b.png)

预览

## 关于 Content-Type

Content-Type 是\*\*实体头域（或称为实体头部，entity header）\*\*用于向接收方指示实体（entity body）的介质类型的，或称为资源的 MIME 类型，现在通常称 media type 更为合适。（例如，指定 HEAD 方法送到接收方的实体介质类型，或 GET 方法发送的请求介质类型，表示后面的文档属于什么 MIME 类型。）

**在响应中**，Content-Type 标头告诉客户端实际返回的内容的内容类型。浏览器会在某些情况下进行 MIME 嗅探，并不一定遵循此标题的值; 为了防止这种行为，可以将标题 X-Content-Type-Options 设置为 nosniff。

**在请求中** (如 POST 或 PUT)，客户端告诉服务器实际发送的数据类型。

#### 语法

```css
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something[1 to 70 characters]
```

**media-type** 资源或数据的 media type

**charset** 字符编码标准

**boundary** 对于多部分（multipart）实体，boundary 是必需的，它用于封装消息的多个部分的边界。其由 1 到 70 个字符组成，浏览器自动生成，该字符集对于通过网关鲁棒性良好，不以空白结尾。

### 例子

`Content-Type` 在 HTML 表单中，在通过 HTML form 提交生成的 POST 请求中，请求头的 Content-Type 由元素上的 enctype 属性指定：

```ini
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text">
  <input type="file" name="myFile">
  <button type="submit">Submit</button>
</form>

```

### application/x-www-form-urlencoded

最常见的 POST 提交数据的方式，原生 Form 表单，如果不设置 enctype 属性，默认为 application/x-www-form-urlencoded 方式提交数据

```perl
POST http://www.example.com HTTP/1.1
Content-Type: application/x-www-form-urlencoded;charset=utf-8

name=test&val1=1&val2=%E6%B5%8B%E8%AF%95&val3%5B%5D=2
```

首先，Content-Type 被指定为 application/x-www-form-urlencoded；其次，提交的表单数据会转换为键值对并按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。

另外，如利用 AJAX 提交数据时，也可使用这种方式。例如 jQuery，Content-Type 默认值都是”application/x-www-form-urlencoded;charset=utf-8”。

### multipart/form-data

另一个常见的 POST 数据提交的方式， Form 表单的 enctype 设置为 `multipart/form-data`，它会将表单的数据处理为一条消息，以标签为单元，用分隔符（这就是`boundary`的作用）分开，类似我们上面`Content-Type`中的例子。

由于这种方式将数据有很多部分，它既可以上传键值对，也可以上传文件，甚至多个文件。当上传的字段是文件时，会有`Content-Type`来说明文件类型；`Content-disposition`，用来说明字段的一些信息。每部分都是以 `–boundary` 开始，紧接着是内容描述信息，然后是回车，最后是字段具体内容（字段、文本或二进制等）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 `–boundary–` 标示结束。

### application/json

`Content-Type: application/json` 作为响应头比较常见。

实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串，其中一个好处就是 JSON 格式支持比键值对复杂得多的结构化数据。

由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持`JSON.stringify`，服务端语言也都有处理 JSON 的函数，使用起来没有困难。

Google 的 AngularJS 中的 Ajax 功能，默认就是提交 JSON 字符串。

### text/xml

XML 的作用不言而喻，用于传输和存储数据，它非常适合万维网传输，提供统一的方法来描述和交换独立于应用程序或供应商的结构化数据，在 JSON 出现之前是业界一大标准（当然现在也是），相比 JSON 的优缺点大家有兴趣可以上网 search。因此，在 POST 提交数据时，xml 类型也是不可缺少的一种，虽然一般场景上使用 JSON 可能更轻巧、灵活。

### binary (application/octet-stream)

在 Chrome 浏览器的 Postman 工具中，还可以看到”binary“这一类型，指的就是一些二进制文件类型。如`application/pdf`，指定了特定二进制文件的 MIME 类型。就像对于 text 文件类型若没有特定的子类型（subtype），就使用 `text/plain`。类似的，二进制文件没有特定或已知的 `subtype`，即使用 `application/octet-stream`，这是应用程序文件的默认值，一般很少直接使用 。

对于`application/octet-stream`，只能提交二进制，而且只能提交一个二进制，如果提交文件的话，只能提交一个文件，后台接收参数只能有一个，而且只能是流（或者字节数组）。

很多 web 服务器使用默认的 `application/octet-stream` 来发送未知类型。出于一些安全原因，对于这些资源浏览器不允许设置一些自定义默认操作，导致用户必须存储到本地以使用。一般来说，设置正确的 MIME 类型很重要。
