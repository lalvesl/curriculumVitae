import { exec as _exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import promise from "../utils/promise.js";
import jsx2js from "./jsx2js.js";

let exec = promise.promisify(_exec);

let args = { source: "", build: "", libDocument: "" };
const argv = process.argv.join(" ");
Object.keys(args).forEach((key) => {
  args[key] = (argv.match(new RegExp(`(?<=(${key})\\=)[^\\s]+`)) || [""])[0];
});

let listFiles = async (pathDirOrFile, basePath = "./") => {
  let target = path.join(basePath, pathDirOrFile);
  return await fs.lstat(target).then(async (el) =>
    el.isDirectory()
      ? await fs
          .readdir(target)
          .then((subPath) => subPath.map((el) => listFiles(el, target)))
          .then(Promise.all)
          .then((el) =>
            el
              .flat()
              .filter(
                (file) => file.includes(".js") & (file !== args.libDocument)
              )
          )
      : target
  );
};

(async () => {
  await exec(`rm -r ${args.build}`).catch(() => {});
  await exec(`cp -r ${args.source} ${args.build}`);
  (await listFiles(args.build))
    .map((filePath) => {
      // await  fs.mkdir
      return filePath;
    })
    .map(async (jsFilePath) => {
      return {
        file: await fs.readFile(jsFilePath, "utf-8"),
        path: jsFilePath,
      };
    })
    .then(Promise.all)
    .then((jsFiles) =>
      jsFiles.forEach((jsFile) => {
        console.log(jsFile.file);
      })
    );
})()
  .then(console.log)
  .catch(console.log);

// const libJsdom = `import { JSDOM } from "jsdom";`;
// txt = fs.readFileSync("./test.jsx", "utf-8");
// const regexFindLib = new RegExp(libJsdom.replace(/\s/g, ".?"), "g");
// if (!regexFindLib.test(txt)) txt = libJsdom + txt;
