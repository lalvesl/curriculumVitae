const js = `import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
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

export default function jsx2js() {
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
    function findEndBlob(txt, specialCaracter) {}
    let newCode = "";
    const textHtml = js.slice(htmlObj.start, htmlObj.end);
    const el = textHtml.match(/\w+/)[0]; //document.createElement(textHtml.match(/\w+/));
    newCode += "(()=>{let el document.createElement(" + el + ");\n";
    newCode += "";
    let textWithoutUncertainties = textHtml.replace(
      /((\"[^\"]*\")|(\'[^\']*\')|(\`[^\`]*\`))*")/gm,
      ""
    );
    textWithoutUncertainties.match(/[^\{\}]+|\{(?R)*\}/gm).map((match) => {});
    // textHtml.split(/\{.*\}/g);
    // console.log(textHtml.split(/(?!=\\)(?=\{)|(?<=[^\\]\})/g));
    newCode += "})()";
  });
}

//import process for npx prettier --write .
