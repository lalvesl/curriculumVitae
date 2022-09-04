import { exec as _exec } from "child_process";
import Promise from "../utils/promise.js";
let exec = Promise.promisify(_exec);

exec("node -v").then(console.log);
