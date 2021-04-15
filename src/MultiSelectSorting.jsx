import React, { useEffect } from "react";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-multiselect";
import "@govflanders/vl-ui-pill-input";
import "@govflanders/vl-ui-select";
import "@govflanders/vl-ui-util";

export default function MultiSelect() {
  const options = [
    {
      label: "Monday",
      key: "monday",
    },
    {
      label: "Tuesday",
      key: "tuesday",
    },
    {
      label: "Wednesday",
      key: "wednesday",
    },
    {
      label: "Thursday",
      key: "thursday",
    },
    {
      label: "Friday",
      key: "friday",
    },
    {
      label: "Saturday",
      key: "saturday",
    },
    {
      label: "Sunday",
      key: "sunday",
    },
  ];

  useEffect(() => {
    window.vl.multiSelect.dressAll();
  }, []);

  return (
    <div
      style={{
        "margin-left": "20rem",
        "margin-right": "20rem",
        "margin-top": "25rem",
      }}
    >
      <p
        style={{
          "margin-bottom": "5rem",
        }}
      >
        Problem: These MultiSelects have an option for each day of the week. The
        options are provided in the order they appear in a week, but the
        component <b>sorts them alphabetically</b> instead.
      </p>
      <div
        style={{
          display: "flex",
          gap: "5rem",
        }}
      >
        <div>
          <p>
            This Multiselect is provided the days of the week dynamically: i.e.
            a list of options is mapped over by React.
          </p>
          <div className="vl-form__input">
            <div className="js-vl-multiselect">
              <select
                className="vl-multiselect"
                id="mapped-vl-select"
                name="mapped-vl-select"
                tabIndex="0"
                multiple
                data-vl-multiselect
              >
                {options.map((option) => (
                  <option
                    className="vl-select__item--selectable"
                    key={option.key}
                    value={option.key}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <p>
            This Multiselect is provided the days of the week statically: i.e.
            the options are hard coded in the code.
          </p>
          <div className="vl-form__input">
            <div className="js-vl-multiselect">
              <select
                className="vl-multiselect"
                id="static-vl-select"
                name="static-vl-select"
                tabIndex="0"
                multiple
                data-vl-multiselect
              >
                <option
                  className="vl-select__item--selectable"
                  key="monday"
                  value="monday"
                >
                  Monday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="tuesday"
                  value="tuesday"
                >
                  Tuesday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="wednesday"
                  value="wednesday"
                >
                  Wednesday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="thursday"
                  value="thursday"
                >
                  Thursday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="friday"
                  value="friday"
                >
                  Friday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="saturday"
                  value="saturday"
                >
                  Saturday
                </option>
                <option
                  className="vl-select__item--selectable"
                  key="sunday"
                  value="sunday"
                >
                  Sunday
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
