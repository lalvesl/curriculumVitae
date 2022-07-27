let js = `import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p123>
          Edit <code>src/App.js</code> and save to reload.
        </p123>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React function name(params) {}
          asd asd asd asd adsdasdasd asd asd
        </a>
        function name(params) {}
      </header>
    </div>
  );
}


aasdfaSDFASDFASDFAdsfgdfsdf

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={()=>{
          console.log("batata")
        }} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-l\\"ink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <b>Learn React</b>
        </a>
        function name(params) {}
      </header>
    </div>
  );
}
App2();
export default App;
`;

function regex2Index(regexs) {
  return [...regexs].map((regex) => {
    return regex.index;
  });
}

class blob {
  constructor(start, txt) {
    this.start = start;
    this.txt = txt;
  }
  get length() {
    return this.txt.length;
  }
}

function schOffset(txt, pattern, offset) {
  offset = offset || 0;
  let index = 0;
  while (true) {
    index = txt.slice(offset).search(pattern);
    if (txt[index - 1] !== "\\") break;
    offset = index + 1;
  }
  return index + offset;
}

function findBlobs(txt = "", startPattern, endPattern) {
  endPattern = endPattern || startPattern;
  let start = txt.search(startPattern);
  if (start == -1) return [];
  let end = schOffset(txt, endPattern, start + 1);
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
  let newStart = schOffset(txt, startPattern, start + 1);
  const middles =
    end < newStart
      ? findBlobs(txt.slice(start + 1), startPattern, endPattern)
      : [];
  return [new blob(start, txt.slice(start, end + 1))].concat(
    middles,
    findBlobs(txt.slice(end + 1), startPattern, endPattern)
  );
}

export default function jsx2js() {
  const metaTexts = [/"/, /'/, /`/].reduce((old, current) => {
    return old.concat(findBlobs(js, current)).map((el) => {
      js = js.replace(el.txt, "");
      return el;
    });
  }, []);
  let starts = regex2Index(js.matchAll(/<(?=\w+)/g));
  let ends = regex2Index(js.matchAll(/(?<=\/(\w*))>/g));
  let htmlIndexes = starts.map((start, i) => {
    return { start: start, end: ++ends[i] };
  });
  let htmlObjs = htmlIndexes.reduce(
    (old, current) => {
      const oldEl = old.pop();
      return old.concat(
        oldEl.start <= current.start && oldEl.end >= current.start
          ? [{ start: oldEl.start, end: current.end }]
          : [oldEl, current]
      );
    },
    [htmlIndexes[0]]
  );
  htmlObjs.forEach((htmlObj) => {
    let newCode = "";
    let textHtml = js.slice(htmlObj.start, htmlObj.end);
    const el = textHtml.match(/\w+/)[0]; //document.createElement(textHtml.match(/\w+/));
    newCode += "(()=>{let el document.createElement(" + el + ");\n";
    newCode += "";
    // console.log(
    // findBlobs(textHtml, '"').forEach(
    //   (el) => (textHtml = textHtml.replace(el.txt, ""))
    // );
    console.log(textHtml);
    // let textWithoutUncertainties = textHtml.replace(
    //   /((\"[^\"]*\")|(\'[^\']*\')|(\`[^\`]*\`))*/gm,
    //   ""
    // );
    // textWithoutUncertainties.match(/[^\{\}]+|\{(?R)*\}/gm).map((match) => {});
    // textHtml.split(/\{.*\}/g);
    // console.log(textHtml.split(/(?!=\\)(?=\{)|(?<=[^\\]\})/g));
    newCode += "})()";
  });
}

//import process for npx prettier --write .
