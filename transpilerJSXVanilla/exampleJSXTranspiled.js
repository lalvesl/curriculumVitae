import document from "../../../utils/document.js";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (() => {
    let htmlElement = document.createElemen("div");
    htmlElement.innerHTML = `<div className="App">
      <header className="App-header">
        <img src=${logo} className="App-logo" alt="logo" />
        <p123>
          Edit <code>src/App.js</code> and save to reload.
        </p123>
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
    </div>`;
    return htmlElement;
  })();
}

function App2() {
  return (() => {
    let htmlElement = document.createElemen("div");
    htmlElement.innerHTML = `<div className="App">
      <header className="App-header">
        <img
          src=${() => {
            console.log("batata");
          }}
          className="App-logo"
          alt="logo"
        />
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
    </div>`;
    return htmlElement;
  })();
}
App2();
const simpleHtmlTxt = "<div><h1>garai</h1></div>";
export default App;
