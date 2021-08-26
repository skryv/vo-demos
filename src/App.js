import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-util";

import DoubleModal from "./DoubleModal";
import MultiSelectDisabled from "./MultiSelectDisabled";
import MultiSelectSorting from "./MultiSelectSorting";
import SelectWithoutDefaultValue from "./SelectWithoutDefaultValue";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: "3rem" }}>
          <ul>
            {/* <li>
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
            </li> */}
            <li>
              <Link to="/double-modal">
                Double modal: a modal that opens on top of a modal
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/select-without-default-value">
            <ContentWrapper>
              <SelectWithoutDefaultValue />
            </ContentWrapper>
          </Route>
          <Route path="/multi-select-disabled">
            <ContentWrapper>
              <MultiSelectDisabled />
            </ContentWrapper>
          </Route>
          <Route path="/multi-select-sorting">
            <ContentWrapper>
              <MultiSelectSorting />
            </ContentWrapper>
          </Route>
          <Route path="/double-modal">
            <ContentWrapper>
              <DoubleModal />
            </ContentWrapper>
          </Route>
          <Route path="/">
            <ContentWrapper>
              <p>Please pick one of the demo's in the navigation menu above</p>
            </ContentWrapper>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ContentWrapper({ children }) {
  return (
    <div
      style={{
        marginLeft: "20rem",
        marginRight: "20rem",
        marginTop: "25rem",
      }}
    >
      {children}
    </div>
  );
}

export default App;
