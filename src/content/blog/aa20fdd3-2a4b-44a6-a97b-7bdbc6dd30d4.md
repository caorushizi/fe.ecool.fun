---
title: 输出什么？
pubDatetime: 2021-12-25T17:23:11.000Z
author: caorushizi
tags:
  - 选择题
postSlug: aa20fdd3-2a4b-44a6-a97b-7bdbc6dd30d4
description: >-
  const person = { name: "Lydia Hallie", hobbies: ["coding"] }; function
  addHobby(hobby, hobbies = person.hobbies) { hobbies.push(hobby); return
  hobbies; } addHobby("running", []); addHobby("dancing");
difficulty: 0.5
questionNumber: 146
source: https://fe.ecool.fun/topic/aa20fdd3-2a4b-44a6-a97b-7bdbc6dd30d4
---

```javascript
const person = {
  name: "Lydia Hallie",
  hobbies: ["coding"],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);
```

---

函数 `addHobby` 接受两个参数，`hobby` 和 `hobbies`，其中 `hobbies` 的默认值是 `person` 对象中的 `hobbies` 属性。

首先，我们调用函数 `addHobby`，并给 `hobby` 传递 `"running"` 以及给 `hobbies` 传递一个空数组。因为我们给 `hobbies` 传递了空数组，`"running"` 被添加到这个空数组，该操作不影响 `person` 对象中的 `hobbies` 属性。

然后，我们调用函数 `addHobby`，并给 `hobby` 传递 `"dancing"`。我们不向 `hobbies` 传递值，因此它获取其默认值 —— 对象 `person` 的属性 `hobbies`。我们向数组 `person.hobbies` push `dancing`。

最后，我们调用函数 `addHobby`，并向 `hobby` 传递值 `"baking"`，并且向 `hobbies` 传递 `person.hobbies`。我们向数组 `person.hobbies` push `dancing`。

pushing `dancing` 和 `baking` 之后，`person.hobbies` 的值为 `["coding", "dancing", "baking"]`
