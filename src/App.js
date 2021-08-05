import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Breweries from "./components/Breweries";

// import Details from "./components/Details";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
