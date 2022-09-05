import { exec as _exec } from "child_process";
import fs from "fs/promises";
import promise from "../utils/promise.js";
let exec = promise.promisify(_exec);

(async () => {
  await exec(
    'node transpilerJSXVanilla/index.js source="transpilerJSXVanilla/example" build="jsBuilded" libDocument="utils/document.js"'
  );
  let source = fs.readFile(
    "transpilerJSXVanilla/example/exampleJSX.js",
    "utf-8"
  );
  let builded = fs.readFile(
    "jsBuilded/transpilerJSXVanilla/example/exampleJSX.js"
  );
  if (source === builded)
    throw new Error("Test error, not match example with builded");
})()
  .then(() => {
    console.log("Tested Successful");
  })
  .catch(console.log);
