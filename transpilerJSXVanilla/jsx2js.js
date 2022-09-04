export default function jsx2js(txt) {
  function searchPattern(pattern, offset = 0, filter = []) {
    let index = 0;
    while (true) {
      index = txt.slice(offset).search(pattern);
      if (index == -1) break;
      index += offset;
      if (
        (txt[index - 1] === "\\") |
        filter.some((group) => group.start <= index && index < group.end)
      ) {
        offset = index + 1;
        continue;
      }
      break;
    }
    return index;
  }
  class groupTxt {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  function findGroups(startPattern, endPattern, filter = []) {
    let offset = 0;
    let groups = [];
    let startLifo = [];
    do {
      let startEnd = 0;
      let start = searchPattern(startPattern, offset, filter);
      if ((start === -1) & !startLifo.length) break;
      if (start !== -1)
        startEnd = txt.slice(start).match(startPattern)[0].length + start;
      let end = searchPattern(endPattern, offset, filter);
      if (end == -1)
        throw new Error(
          'syntax with error in "' +
            startPattern +
            '" to "' +
            endPattern +
            '" caracter start/end at ' +
            start +
            ' in "' +
            txt.toString() +
            '"'
        );
      let endEnd = txt.slice(end).match(endPattern)[0].length + end;
      if ((start > end) | (start === -1)) {
        if (startLifo.length) {
          groups.push(new groupTxt(startLifo.pop().start, endEnd));
        }
        offset = endEnd;
        continue;
      }
      if (end > start) {
        let nextStart = searchPattern(startPattern, startEnd, filter);
        if ((nextStart < end) & (nextStart !== -1)) {
          startLifo.push({ start: start, startEnd: startEnd });
          offset = startEnd;
        } else {
          groups.push(new groupTxt(start, endEnd));
          offset = endEnd;
        }
        continue;
      }
      if (start === end) {
        end = searchPattern(endPattern, startEnd, filter);
        let endEnd = txt.slice(end).match(endPattern)[0].length + end;
        groups.push(new groupTxt(start, endEnd));
        offset = endEnd;
        continue;
      }
    } while (true);
    return groups;
  }
  const metaTexts = [/"/, /'/, /`/].reduce((old, current) => {
    return old.concat(findGroups(current, current, old));
  }, []);
  let allHtmls = findGroups(/\<\w+/, /\/\w*\>/, metaTexts);
  allHtmls = allHtmls.sort((a, b) => a.start - b.start);
  const htmls = allHtmls.reduce(
    (buffer, current) => {
      return buffer.every((el) => el.end < current.end)
        ? buffer.concat(current)
        : buffer;
    },
    [allHtmls.shift()]
  );
  let txtSliced = [];
  [0, ...htmls.map(Object.values).flat(), txt.length].reduce((old, cur) => {
    txtSliced.push(txt.slice(old, cur));
    return cur;
  });
  let txtHtmls = txtSliced.filter((_, i) => i % 2);
  let txtSimpleJs = txtSliced.filter((_, i) => !(i % 2));
  txtHtmls = txtHtmls.map((txtHtml) => {
    txtHtml =
      `()=>{
      let htmlElement = document.createElemen("${
        txtHtml.match(/(?<=<)\w+/)[0]
      }");` +
      `htmlElement.innerHTML = "${txtHtml}";` +
      "return htmlElement})()";
    return txtHtml;
  });
  let jsTranspiled = txtSliced
    .map((_, i) => (i % 2 ? txtHtmls : txtSimpleJs).shift())
    .join("");
  console.log(jsTranspiled);
  return jsTranspiled;
}
