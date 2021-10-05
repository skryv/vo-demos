import React, { useEffect } from "react";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-util";
import "@govflanders/vl-ui-popover";

export default function Popover() {

  useEffect(() => {
    setTimeout(() => {
      let popovers = document.getElementsByClassName("vl-popover");
      if (popovers) window.vl.popover.dress(popovers[0]);
    }, 1);
  })

  return (
    <div
      className="vl-popover vl-popover--single"
      data-vl-popover
      data-vl-popover-single
    >
      <button
        className="js-vl-popover__toggle vl-popover__toggle vl-button vl-button--icon vl-button--tertiary"
        type="button"
        aria-expanded="false"
        onClick={(e) => {
          console.log("You opened a popover!")
        }}
      >
        <i
          className="vl-button__icon vl-vi vl-vi-trash"
          aria-hidden="true" />
        <span className="vl-u-visually-hidden">Are you sure?</span>
      </button>
      <div className="vl-popover__content">
        <ul className="vl-popover__link-list">
          <li className="vl-popover__link-list__item">
            <a
              role="button"
              className="vl-button"
              onClick={(e) => {
                console.log('You clicked yes!')
              }}
            >
              <span className="vl-button__label">Yes</span>
            </a>
          </li>
          <li className="vl-popover__link-list__item">
            <button
              className="vl-button vl-button--secondary"
              onClick={() => console.log("You clicked no!")}
            >
              <span className="vl-button__label">No</span>
            </button>
          </li>
        </ul>
        <button
          className="vl-popover__close-btn vl-vi vl-vi-cross"
          tabIndex="0"
        >
          <span className="vl-u-visually-hidden">Close popover</span>
        </button>
      </div>
    </div>
  )
}