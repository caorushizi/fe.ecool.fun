import path from "path";
import { marked } from "marked";
import { load } from "cheerio";
import moment from "moment";

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
