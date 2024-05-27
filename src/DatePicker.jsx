import React, { useEffect } from "react";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-datepicker";
import "@govflanders/vl-ui-tooltip";
import "@govflanders/vl-ui-util";

export default function DatePicker() {
  return (
    <div>
      <Date />
    </div>
  );
}

function Date() {
  useEffect(() => {
    // it is needed to dress the tooltips in order for them to stay up to date with changed section titles
    // it is needed to undress first so the old tooltips are removed from the DOM
    window.vl.tooltip.undressAll();
    window.vl.datepicker.dressAll();
    window.vl.tooltip.dressAll();
  });

  function dateInput() {
    return (
      <>
        <label htmlFor="datepicker-1" className="vl-form__label">
          Datum evenement (dd.mm.jjjj)
        </label>
        <div className="vl-input-group vl-datepicker" data-vl-datepicker>
          <input
            className="vl-datepicker__input-field vl-input-field vl-input-field--block js-vl-datepicker-input"
            type="text"
            id="datepicker-1"
            name="datepicker-1"
          />
          <button
            type="button"
            name="button"
            className="vl-input-addon js-vl-datepicker-toggle js-vl-tooltip"
            data-vl-tooltip-content="Kies datum"
          >
            <i className="vl-vi vl-vi-calendar" aria-hidden="true"></i>
            <span className="vl-u-visually-hidden">Kies datum</span>
          </button>
        </div>
      </>
    );
  }

  return dateInput();
}
