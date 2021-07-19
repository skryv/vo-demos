import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-util";

import MultiSelectDisabled from "./MultiSelectDisabled";
import MultiSelectSorting from "./MultiSelectSorting";
import SelectWithoutDefaultValue from "./SelectWithoutDefaultValue";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/select-without-default-value">
                Select: the first item in the list is by default always selected
              </Link>
            </li>
            <li>
              <Link to="/multi-select-disabled">
                MultiSelect: disable an option dynamically
              </Link>
            </li>
            <li>
              <Link to="/multi-select-sorting">
                MultiSelect: options are automatically sorted
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/select-without-default-value">
            <SelectWithoutDefaultValue />
          </Route>
          <Route path="/multi-select-disabled">
            <MultiSelectDisabled />
          </Route>
          <Route path="/multi-select-sorting">
            <MultiSelectSorting />
          </Route>
          <Route path="/">
            <p
              style={{
                "margin-left": "20rem",
                "margin-right": "20rem",
                "margin-top": "25rem",
              }}
            >
              Please pick one of the demo's in the navigation menu above
            </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
