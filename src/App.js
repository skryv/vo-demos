import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-util";

import DoubleModal from "./DoubleModal";
import MultiSelectDisabled from "./MultiSelectDisabled";
import MultiSelectSorting from "./MultiSelectSorting";
import SelectWithoutDefaultValue from "./SelectWithoutDefaultValue";
import Tooltips from "./Tooltips";
import Popover from "./Popover";
import PopoverModifierClasses from "./PopoverModifierClasses";
import ModalPadding from "./ModalPadding";
import DatePicker from "./DatePicker";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: "3rem" }}>
          <ul>
            {
              /* <li>
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
            <li>
              <Link to="/tooltips">
                Tooltips: tooltips keep being added to the DOM
              </Link>
            </li>
            <li>
              <Link to="/double-modal">
                Double modal: a modal that opens on top of a modal
              </Link>
            </li>
            <li>
              <Link to="/modal-padding">Modal: padding</Link>
            </li>
            <li>
              <Link to="/popover">Popover: button inside a popover</Link>
            </li>
            <li>
              <Link to="/popover-modifier-classes">
                Popover: modifier classes
              </Link>
            </li> */
              <li>
                <Link to="/date-picker">Datepicker</Link>
              </li>
            }
          </ul>
        </nav>
        <Switch>
          <Route path="/date-picker">
            <ContentWrapper>
              <DatePicker />
            </ContentWrapper>
          </Route>
          <Route path="/popover-modifier-classes">
            <ContentWrapper>
              <PopoverModifierClasses />
            </ContentWrapper>
          </Route>
          <Route path="/popover">
            <ContentWrapper>
              <Popover />
            </ContentWrapper>
          </Route>
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
          <Route path="/tooltips">
            <ContentWrapper>
              <Tooltips />
            </ContentWrapper>
          </Route>
          <Route path="/modal-padding">
            <ContentWrapper>
              <ModalPadding />
            </ContentWrapper>
          </Route>
          <Route path="/">
            <ContentWrapper>
              <p>
                Please pick one of the demo's in the navigation menu above. If
                none are present, we currently don't have any demos
              </p>
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
        marginTop: "15rem",
      }}
    >
      {children}
    </div>
  );
}

export default App;
