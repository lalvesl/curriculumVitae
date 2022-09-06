import { exec as _exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import promise from "../utils/promise.js";
import jsx2js from "./jsx2js.js";

let exec = promise.promisify(_exec);

let args = { source: "", build: "", libDocument: "", addFolder: "" };
const argv = process.argv.join(" ");
Object.keys(args).forEach((key) => {
  args[key] = path.join(
    (argv.match(new RegExp(`(?<=(${key})\\=)[^\\s]+`)) || [""])[0]
  );
});

let listFiles = async (pathDirOrFile, basePath = "./") => {
  let target = path.join(basePath, pathDirOrFile);
  return await fs.lstat(target).then(async (el) =>
    el.isDirectory()
      ? await fs
          .readdir(target)
          .then((subPath) => subPath.map((el) => listFiles(el, target)))
          .then(promise.all)
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
  function addLibDocument(txtJs, libPath) {
    let _import = `import document from "${path.relative(
      path.dirname(libPath),
      pathLibDocument
    )}";`;
    return txtJs.includes(_import) ? txtJs : _import + txtJs;
  }
  await exec(`rm -r ${args.build}`).catch(() => {});
  let pathBuilds = path.join(args.build, args.source);
  await exec(`mkdir -p ${pathBuilds}`);
  await exec(`cp -r ${args.source}/ ${path.dirname(pathBuilds)}`);
  await exec(`cp -r  ${args.addFolder} ${args.build}/`);
  let pathLibDocument = path.join(args.build, args.libDocument);
  await fs.cp(args.libDocument, pathLibDocument);
  await listFiles(pathBuilds)
    .then((filePaths) =>
      filePaths.map(async (jsFilePath) => {
        return {
          file: await fs.readFile(jsFilePath, "utf-8"),
          pathBuild: jsFilePath,
        };
      })
    )
    .then(promise.all)
    .then((files) => {
      return Promise.all(
        files.map((file) => {
          let newJs = addLibDocument(jsx2js(file.file), file.pathBuild);
          return fs.writeFile(file.pathBuild, newJs);
        })
      );
    });
  console.log("successful builds");
})();
