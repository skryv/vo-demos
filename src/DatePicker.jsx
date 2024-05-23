import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import Cleave from "cleave.js";
import classNames from "classnames";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-datepicker";
import "@govflanders/vl-ui-tooltip";
import "@govflanders/vl-ui-util";

function datepickerToOutputFormat(value) {
  console.log(
    "🚀 ~ datepickerToOutputFormat ~ moment:",
    moment(value, "D/M/YYYY", true)
  );

  return moment(value, "D/M/YYYY", true).isValid()
    ? moment(value, "D/M/YYYY", true).toDate()
    : undefined;
}

function inputToDatepickerFormat(value) {
  if (!value) return "";
  return moment(new Date(value)).format("DD/MM/YYYY");
}

export default function DatePicker() {
  useEffect(() => {
    console.log("test");
    setTimeout(() => {
      window.vl.datepicker.dressAll();
      window.vl.tooltip.dressAll();
    });
  });

  return (
    <div>
      <p
        style={{
          "margin-bottom": "5rem",
        }}
      >
        Problem: These MultiSelects have three options. One of these can be
        disabled by pushing a button. This works only if we dress and undress
        the component on that occasion, otherwise the option will not get
        disabled. However, some strange behavior is still to be seen: the first
        option in the list seems to be selected automatically and it seems to be
        duplicated in the list of options.
      </p>
      <Date
        onChange={(value) => {
          console.log("onze value", value);
        }}
      />
    </div>
  );
}

function Date({
  id,
  name,
  value,
  isRequired,
  onChange: parentOnChange,
  label,
  helpInLine,
  help,
  errorMessages,
  warningMessages,
  nested,
}) {
  const fieldRef = useRef(null);
  const [datePickerValue, setDatePickerValue] = useState(
    inputToDatepickerFormat(value)
  );
  const [inputValue, setInputValue] = useState(inputToDatepickerFormat(value));

  const isInError = errorMessages ? errorMessages.length > 0 : false;
  const tooltipLabel = "Pick a date in the calendar";

  useEffect(() => {
    // activate Cleave to make sure the mask is applied correctly
    // we cannot use the Cleave react component (as in TextInput), because the date picker expects an input field
    if (fieldRef.current) {
      new Cleave(fieldRef.current, {
        placeholder: "DD/MM/YYYY",
        delimiter: "/",
        blocks: [2, 2, 4],
      });
    }
    // it is needed to dress the tooltips in order for them to stay up to date with changed section titles
    // it is needed to undress first so the old tooltips are removed from the DOM
    window.vl.tooltip.undressAll();
    window.vl.datepicker.dressAll();
    window.vl.tooltip.dressAll();
  });

  useEffect(() => {
    setInputValue(inputToDatepickerFormat(value));
  }, [value]);

  function onChange(event) {
    debugger;
    // test if input has numbers or slashes
    // if not, don't show the value in input field and pass an empty string
    const re = /\d/g;
    if (
      !(
        re.test(event.target.value) ||
        event.target.value === "/" ||
        event.target.value === ""
      )
    ) {
      parentOnChange("");
      return;
    }

    const dateIsComplete =
      datepickerToOutputFormat(event.target.value) !== undefined;

    setInputValue(event.target.value);
    setDatePickerValue(event.target.value);

    if (dateIsComplete) {
      parentOnChange(datepickerToOutputFormat(event.target.value));
    }
  }

  function dateInput() {
    return (
      <div className="datepicker input-component">
        <div
          className="vl-input-group vl-datepicker js-vl-datepicker"
          data-vl-datepicker
          data-vl-datepicker-format="d/m/Y"
          data-vl-datepicker-selected-date={datePickerValue}
        >
          <button
            type="button"
            name="button"
            data-vl-tooltip-content={tooltipLabel}
            className="vl-input-addon js-vl-datepicker-toggle js-vl-tooltip"
          >
            <i className="vl-vi vl-vi-calendar" aria-hidden="true" />
            <span className="vl-u-visually-hidden">{tooltipLabel}</span>
          </button>
          <input
            id={id}
            ref={fieldRef}
            name={name}
            value={inputValue}
            options={{
              placeholder: "DD/MM/YYYY",
              delimiter: "/",
              blocks: [2, 2, 4],
            }}
            placeholder={"DD/MM/YYYY"}
            onChange={onChange}
            // the VO datepicker throws an onInput event when a value is selected, no onChange event
            onInput={onChange}
            type="text"
            data-vl-js-dress="false"
            className={classNames(
              "vl-input-field vl-input-field--block js-vl-datepicker-input",
              { "vl-input-field--error": isInError }
            )}
            aria-required={isRequired}
            aria-invalid={isInError}
          />
        </div>
      </div>
    );
  }

  return dateInput();
}
