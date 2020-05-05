import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./components/main.js";
import { Finance } from "./components/financing.js";
import "./styles/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/finance" component={Finance} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
