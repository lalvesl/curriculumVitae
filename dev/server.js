import http from "http";
import { JSDOM } from "jsdom";
const PORT = process.env.PORT || 3000;

/**
 *
 * @param {Document} document
 * @return {void}
 */

export default function (document) {
  let newDocument = new JSDOM(document.documentElement.innerHTML).window
    .document;
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
  const newDocumentHtml = newDocument.documentElement.innerHTML;
  http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(newDocumentHtml);
      res.end();
    })
    .listen(PORT);
}
