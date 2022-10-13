import { promises as fs } from "fs";
import path from "path";
import puppeteer from "puppeteer";
import inlineCss from "inline-css";
import devServer from "../utils/server.js";
import {} from "../utils/dom.js";

async function generatePdf(html, pathToFile) {
  return new Promise(async (resolve) => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    const htmlWithCssInline = await inlineCss(html, { url: "/" });
    await page.setContent(htmlWithCssInline, {
      waitUntil: "networkidle0", //await completely load html
    });
    await page.pdf({
      path: pathToFile,
      format: "A4",
      printBackground: true,
      pageRanges: "1-1",
    });
    await browser.close();
    resolve();
  });
}

const PATH_CURRICULA = "./src/curricula/";
const PATH_BUILDS = "../curriculaBuilt/";

async function buildCurricula() {
  let curriculaFiles = await fs.readdir(PATH_CURRICULA);
  return Promise.all(
    await curriculaFiles.map(async (curriculumFile) => {
      return new Promise(async (resolve) => {
        function buildPathExtension(extension) {
          return path.resolve(
            PATH_BUILDS,
            curriculumFile.replace("js", extension)
          );
        }
        let curriculumPath = path.resolve(PATH_CURRICULA, curriculumFile);
        let htmlModule = new (await import(curriculumPath)).default().render();
        await fs.writeFile(buildPathExtension("html"), htmlModule);
        await generatePdf(htmlModule, buildPathExtension("pdf"));
        console.log("Curriculum Built " + curriculumFile.replace(".js", ""));
        resolve();
      });
    })
  ).then(() => console.log("All curricula built"));
}
buildCurricula()
  .catch(console.log)
  .then(() => {
    if (process.env.NODE_ENV === "development") {
      devServer(PATH_BUILDS);
    }
  });
