// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-util";
import "@govflanders/vl-ui-popover";

export default function Popover() {
  const popoverRef = useRef();

  useEffect(() => {
    window.vl.popover.dress(popoverRef.current);
  });

  function demo() {
    return (
      <div
        className="vl-popover vl-popover--single"
        data-vl-popover="true"
        data-vl-popover-single="true"
        ref={popoverRef}
      >
        <button
          className="js-vl-popover__toggle vl-popover__toggle vl-button vl-button--icon vl-button--tertiary"
          type="button"
          aria-expanded="false"
          onClick={(e) => {
            e.stopPropagation();
            console.log("You opened a popover!");
          }}
        >
          <i className="vl-button__icon vl-vi vl-vi-trash" aria-hidden="true" />
          <span className="vl-u-visually-hidden">Are you sure?</span>
        </button>
        <div className="vl-popover__content">
          <div className="vl-action-group vl-action-group--align-right vl-u-spacer-top--xsmall">
            <button
              className="vl-button"
              onClick={(e) => {
                e.stopPropagation();
                console.log("You clicked yes!");
              }}
            >
              <span className="vl-button__label">Yes</span>
            </button>
            <button
              className="vl-button vl-button--secondary"
              onClick={(e) => {
                e.stopPropagation();
                console.log("You clicked no!");
              }}
            >
              <span className="vl-button__label">No</span>
            </button>
          </div>
          <button
            className="vl-popover__close-btn vl-vi vl-vi-cross"
            tabIndex="0"
          >
            <span className="vl-u-visually-hidden">Close popover</span>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Problem statement */}
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          Problem: Suppose you have a popover with a button inside. The onClick
          handler on this button is not called. In this demo, three onClick
          handlers are added:
        </p>
        <ul>
          <li>
            - one that should be called when clicking the delete button (this
            opens the popover, but the handler itself is not called),
          </li>
          <li> - one when clicking "Yes" inside the popover and </li>
          <li> - one when clicking "No" inside the popover.</li>
        </ul>
        <p>All three onClick handlers should print something in the console.</p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/Popover.js"
          target="_blank"
          rel="noreferrer"
        >
          Go to the code
        </a>
      </div>

      {/* Current status */}
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          <span>Current status: </span>
          <span className="vl-u-mark vl-u-mark--success">
            Fixed in @govflanders/vl-ui-popover v15.0.0
          </span>
        </p>
      </div>

      {/* Demo */}
      <div>
        <p>Demo:</p>
        {demo()}
      </div>
    </div>
  );
}
