---
title: gitpull和gitfetch有什么区别？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工具
postSlug: 1d6ec168e2cf03fbe76cdb6c636f6a2b
description: >-
  gitpull命令从中央存储库中提取特定分支的新更改或提交，并更新本地存储库中的目标分支。gitfetch也用于相同的目的，但它的工作方式略有不同。当你执行gitfetch时，它会从所需的分支中提取所
difficulty: 1
questionNumber: 27
source: >-
  https://fe.ecool.fun/topic-answer/8ba67b8e-c23a-4919-b645-2757fc1e8be4?orderBy=updateTime&order=desc&tagId=29
---

git pull 命令从中央存储库中提取特定分支的新更改或提交，并更新本地存储库中的目标分支。

git fetch 也用于相同的目的，但它的工作方式略有不同。当你执行 git fetch 时，它会从所需的分支中提取所有新提交，并将其存储在本地存储库中的新分支中。如果要在目标分支中反映这些更改，必须在 git fetch 之后执行 git merge。只有在对目标分支和获取的分支进行合并后才会更新目标分支。为了方便起见，请记住以下等式：

> git pull = git fetch + git merge
