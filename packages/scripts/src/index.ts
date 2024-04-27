import { writeFile, readFile } from "fs-extra";
import yaml from "js-yaml";
import {
  fixImageUrl,
  formatMarkdown,
  getContent,
  getSummary,
  metadataPath,
  postUpdated,
  postsPath,
  replaceMarkdownCodeFormat,
  sleep,
} from "./utils";
import path from "path";
import { isUrlVisited, markUrlAsVisited } from "./cache";
import axios from "axios";
import { parse } from "./parse";
import moment from "moment";
import chalk from "chalk";

const PAGE_SIZE = 10;

interface Tag {
  id: number;
  tagName: string;
  type: number | string;
  exerciseCount: number;
}

interface Post {
  exerciseKey: string;
  category: string;
  title: string;
  level: number;
  updateAt: string;
}

interface Metadata {
  data: {
    id: number;
    exerciseKey: string;
    category: string;
    renderType: string;
    title: string;
    desc: string | null;
    options: null;
    explanation: string | null;
    level: number;
    status: number;
    appId: number;
    createAt: string;
    updateAt: string;
    updateUserId: number;
    isCollected: boolean;
    currentIndex: number;
    prev: string;
    next: string;
  };
  post: Post;
  tag: Tag;
}

const host = "https://fe.ecool.fun";

async function writeMarkdown(meta: Metadata) {
  const { data, post, tag } = meta;

  const postPath = path.join(postsPath, `${post.exerciseKey}.md`);
  const content = getContent([data.desc, data.explanation]);
  const summary = await getSummary(content);

  const metadata = {
    title: data.title.replace(/\n/g, ""),
    pubDatetime: moment(data.updateAt).toDate(),
    author: "caorushizi",
    tags: [tag.tagName],
    postSlug: post.exerciseKey,
    description: summary,
    difficulty: data.level,
    questionNumber: data.id,
    source: new URL(`topic/${post.exerciseKey}`, host).toString(),
  };

  // 对 markdown 进行格式化
  let markdown = `---\n${yaml.dump(metadata)}---\n\n${content}\n`;
  markdown = await formatMarkdown(markdown);
  markdown = fixImageUrl(markdown);
  markdown = replaceMarkdownCodeFormat(markdown);
  await writeFile(postPath, markdown);
}

async function parsePage(
  post: Post,
  tag: Tag,
  force: boolean = false,
): Promise<Metadata> {
  const filepath = path.join(metadataPath, `${post.exerciseKey}.json`);
  if (isUrlVisited(post.exerciseKey) && !force) {
    const data = await readFile(filepath);
    return JSON.parse(data.toString());
  }

  const resp = await axios.get(`${host}/topic/${post.exerciseKey}`);
  const text = resp.data;
  const data = parse(text);

  data.post = post;
  data.tag = tag;

  await writeFile(filepath, JSON.stringify(data, null, 2));
  await sleep();

  markUrlAsVisited(post.exerciseKey);
  return data;
}

async function parseTags(): Promise<Tag[]> {
  const url = `${host}/topic-list?pageNumber=1&orderBy=updateTime&order=desc&tagId=0`;
  const resp = await axios.get(url);
  const text = resp.data;

  const data = parse(text);
  return data.tagList;
}

async function parsePageList(tag: Tag, pageNum: number): Promise<Post[]> {
  const url = `${host}/topic-list?pageNumber=${pageNum}&orderBy=updateTime&order=desc&tagId=${tag.id}`;
  const resp = await axios.get(url);
  const text = resp.data;
  const posts = parse(text);
  return posts.exerciseList;
}

async function start() {
  let tags: Tag[] = await parseTags();
  tags = tags.filter((item) => item.id !== 0 && item.exerciseCount > 0);

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const totalPage = Math.ceil(tag.exerciseCount / PAGE_SIZE);

    for (let j = 0; j < totalPage; j++) {
      const posts = await parsePageList(tag, j + 1);
      console.log(
        chalk.green.bgBlue(
          `开始解析 ${tag.tagName}(${i + 1}/${tags.length}) 第 ${
            j + 1
          }/${totalPage} 页，本页共有 ${posts.length} 条数据`,
        ),
      );

      for (let k = 0; k < posts.length; k++) {
        const post = posts[k];
        console.log(chalk.yellow(` ${k + 1}.${post.title.replace(/\n/g, "")}`));
        let meta = await parsePage(post, tag);

        // TODO: 验证是否需要更新
        if (postUpdated(post.updateAt, meta.post.updateAt)) {
          meta = await parsePage(post, tag, true);
        }

        await writeMarkdown(meta);
      }
    }
  }
}

start();
