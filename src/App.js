import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heder">
          {" "}
          <a className="App-link" href="https://www.linkedin.com/">
            LinkedIn
          </a>
        </h1>
        <div className="input-container">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <input className="App-input" /> */}
        </div>

        <div className="input-container1">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <input className="App-input" /> */}
        </div>

        <div className="button-container">
          <button className="App-button">Sign in</button>
        </div>
      </header>
    </div>
  );
}

export default App;
