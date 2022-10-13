import { findGroups } from "../utils/scriptParser.js";

export default function jsx2js(txt = "") {
  txt = txt
    .replace(/\/\*((?!\/\*).)+\*\//gs, "")
    .replace(/^(\s|\t)*\/\/.*/gm, "");
  const metaTexts = [/"/, /'/, /`/].reduce((old, current) => {
    return old.concat(findGroups(txt, current, current, old));
  }, []);
  let allHtmls = findGroups(txt, /\<\w+/, /\/\w*\>/, metaTexts);
  if (allHtmls.length) {
    function sliceSubTxts(txt, findGroupsObj) {
      findGroupsObj = findGroupsObj.sort((a, b) => a.start - b.start);
      const findGroupsObjParents = findGroupsObj.reduce(
        (buffer, current) => {
          return buffer.every((el) => el.end < current.end)
            ? buffer.concat(current)
            : buffer;
        },
        [findGroupsObj.shift()]
      );
      let txtSliced = [];
      [0, ...findGroupsObjParents.map(Object.values).flat(), txt.length].reduce(
        (old, cur) => {
          txtSliced.push(txt.slice(old, cur));
          return cur;
        }
      );
      let txtInside = txtSliced.filter((_, i) => i % 2);
      let txtOutside = txtSliced.filter((_, i) => !(i % 2));
      return [txtInside, txtOutside];
    }

    function bindingTxt(htmlTxts, jsTxts) {
      return Array.from({ length: htmlTxts.length + jsTxts.length })
        .map((_, i) => (i % 2 ? htmlTxts : jsTxts).shift())
        .join("");
    }
    let [txtHtmls, txtSimpleJs] = sliceSubTxts(txt, allHtmls);
    txtHtmls = txtHtmls.map((txtHtml) => {
      let jsInSideHtml = findGroups(txtHtml, /\{/, /\}/);
      jsInSideHtml = jsInSideHtml.filter((el) => el.start !== el.end - 2);
      if (jsInSideHtml.length) {
        let [jss, htmls] = sliceSubTxts(txtHtml, jsInSideHtml);
        htmls = htmls.map((html) =>
          html.replace(/`/g, "\\`").replace(/\n/g, "")
        );
        jss = jss.map((js, i) => {
          const quot = htmls[i][htmls[i].length - 1] === "=" ? '"' : "";
          return quot + `\$\{${jsx2js(js.slice(1, js.length - 1))}\}` + quot;
        });
        txtHtml = bindingTxt(jss, htmls);
      }
      txtHtml =
        `(()=>{
      let a = document.createElement("foo");` +
        `a.innerHTML = \`${txtHtml}\`;` +
        "return a.firstChild})()";
      return txtHtml;
    });
    let jsTranspiled = bindingTxt(txtHtmls, txtSimpleJs);
    return jsTranspiled;
  } else {
    return txt;
  }
}
