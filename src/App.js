import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Breweries from "./components/Breweries";

import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Breweries} exact />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
