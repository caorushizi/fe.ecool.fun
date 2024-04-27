import { readFileSync } from "fs-extra";
import path from "path";
import { parse } from ".";

// 获取当前文件路径
const __dirname = process.cwd();

function testParse(type: string) {
  const testFile = readFileSync(
    path.join(__dirname, `src/parse/example/${type}.html`),
    "utf-8",
  );
  const data = parse(testFile);
  console.log(data);
}

testParse("page");
testParse("list");
