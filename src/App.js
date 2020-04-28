import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./components/main.js";
import "./styles/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
