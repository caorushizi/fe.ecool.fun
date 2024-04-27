import path from "path";
import { marked } from "marked";
import { load } from "cheerio";
import moment from "moment";
import prettier from "prettier";

export function getContent(markdown: null | string | (string | null)[]) {
  if (!markdown) {
    return "";
  }
  return Array.isArray(markdown)
    ? markdown.filter((r) => r).join("\n\n---\n\n")
    : markdown;
}

export async function sleep(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const projectRoot = process.cwd();
export const metadataPath = path.join(projectRoot, "metadata");
export const postsPath = path.resolve(
  projectRoot,
  "../website/src/content/blog",
);
export const visitedUrlsFilePath = path.join(projectRoot, "visitedUrls.txt");

export async function getSummary(markdown: string): Promise<string> {
  const html = await marked(markdown);
  const $ = load(html);
  const text = $.text();
  return text
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\r/g, "")
    .slice(0, 200);
}

export function postUpdated(remoteDate: string, localDate: string): boolean {
  return moment(remoteDate).isAfter(localDate);
}

export function replaceMarkdownCodeFormat(content: string): string {
  const mappings: Record<string, string> = {
    "react.js": "jsx",
    JavaScript: "javascript",
    react: "jsx",
    JS: "javascript",
    pgsql: "sql",
    mysql: "sql",
    clang: "c",
    processing: "css",
    cons: "jsx",
  };

  for (const key in mappings) {
    const origin = new RegExp("```" + key, "g");
    const target = "```" + mappings[key];
    content = content.replace(origin, target);
  }

  return content;
}

export function fixImageUrl(content: string): string {
  return content.replace(/!\[\]\((\/\/[^)]+)\)/g, "![](https:$1)");
}

export async function formatMarkdown(content: string): Promise<string> {
  return prettier.format(content, {
    parser: "markdown",
  });
}
