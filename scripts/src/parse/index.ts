import jsdom from "jsdom";
import vm from "node:vm";

const { JSDOM } = jsdom;

function getPlainObject(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function parse(content: string) {
  const dom = new JSDOM(content);

  const scripts = dom.window.document.querySelectorAll("script");
  let jsCode = "";
  scripts.forEach((script) => {
    jsCode += script.textContent;
  });

  const sandbox = {
    console: console,
    window: dom.window,
    document: dom.window.document,
  };
  vm.createContext(sandbox);
  vm.runInContext(jsCode, sandbox);

  const data = sandbox.window.g_initialProps;

  return getPlainObject(data);
}
