import http from "http";
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
const PORT = process.env.PORT || 3000;

export default function (PATH_BUILDS) {
  function renderNewHtml(documentHtml) {
    let newDocument = new JSDOM(documentHtml).window.document;
    let devReloadScript = newDocument.createElement("script");
    devReloadScript.innerHTML =
      "(" +
      (() => {
        let toggle = false;
        let controller = new AbortController();
        let signal = controller.signal;
        setInterval(() => {
          var timeout = setTimeout(() => {
            controller.abort();
          }, 200);
          fetch("/waitRes", { signal })
            .then(() => {
              clearInterval(timeout);
              if (toggle) {
                location.reload();
              } else {
              }
            })
            .catch(() => {
              clearInterval(timeout);
              controller = new AbortController();
              signal = controller.signal;
              toggle = true;
            });
        }, 750);
      }).toString() +
      ")()";
    newDocument.head.appendChild(devReloadScript);
    return newDocument.documentElement.innerHTML;
  }
  http
    .createServer((req, res) => {
      if (req.url === "/waitRes") {
        res.end();
      } else {
        let file = "";
        try {
          file = fs.readFileSync(
            path.resolve(PATH_BUILDS, req.url.replace("/", ""))
          );
          if (req.url.includes(".html")) {
            file = renderNewHtml(file);
            res.setHeader("Content-Type", "text/html");
          } else {
            res.setHeader("Content-Type", "application/pdf");
          }
          res.statusCode = 200;
          res.write(file);
          res.end();
        } catch (err) {
          res.statusCode = 404;
          res.write(err.toString());
          res.end();
        }
      }
    })
    .listen(PORT);
}
