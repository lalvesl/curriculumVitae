import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import inlineCss from "inline-css";
import { curriculumVitae } from "./curriculumVitae.js";
import devServer from "../dev/server.js";

let curriculum = curriculumVitae();

const fileName = "curriculumVitae";
console.log(process.env.NODE_ENV);

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const htmlWithCssInline = await inlineCss(
    curriculum.documentElement.innerHTML,
    { url: "/" }
  );
  await page.setContent(htmlWithCssInline, {
    waitUntil: "networkidle0", //await completely load html
  });
  await page.pdf({
    path: fileName + ".pdf",
    format: "A4",
    printBackground: true,
    pageRanges: "1-1",
  });
  await browser.close();
  console.log("pdf loaded");
})();

fs.writeFile(fileName + ".html", curriculum.documentElement.innerHTML).then(
  () => console.log("html loaded")
);

if (process.env.NODE_ENV === "development") {
  devServer(curriculum);
}
