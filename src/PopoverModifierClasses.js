import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-popover";
import "@govflanders/vl-ui-util";

export const popoverPositions = {
  LEFT: "vl-popover--align-left",
  RIGHT: "vl-popover--align-center",
  CENTER: "vl-popover--align-right",
};

export const popoverSizes = {
  NORMAL: "",
  LARGE: "vl-popover--large",
};

export default function PopoverModifierClasses() {
  const [forceOpen, setForceOpen] = useState(false);
  const popoverRef1 = useRef();
  const popoverRef2 = useRef();
  const popoverRef3 = useRef();
  const popoverRef4 = useRef();

  const tdStyle = {
    verticalAlign: "top",
    padding: "1rem",
  };
  const thStyle = {
    ...tdStyle,
    textAlign: "left",
    fontWeight: "bold",
  };

  function demo() {
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={forceOpen}
            onChange={() => setForceOpen(!forceOpen)}
          />
          Force popovers open
        </label>

        <table>
          <thead>
            <tr>
              <th></th>
              <th style={thStyle}>Popover with Reacts Ref system</th>
              <th style={thStyle}>Popover with VO Javascript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>vl-popover--align-left</td>
              <td style={tdStyle}>
                <PopoverWithRef
                  forceOpen={forceOpen}
                  ref={popoverRef1}
                  position="LEFT"
                >
                  <PopoverContent popoverRef={popoverRef1} />
                </PopoverWithRef>
              </td>
              <td style={tdStyle}>
                <PopoverWithVOJavascript forceOpen={forceOpen} position="LEFT">
                  <PopoverContent popoverRef={popoverRef1} />
                </PopoverWithVOJavascript>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>vl-popover--align-center</td>
              <td style={tdStyle}>
                <PopoverWithRef
                  forceOpen={forceOpen}
                  ref={popoverRef2}
                  position="CENTER"
                >
                  <PopoverContent popoverRef={popoverRef2} />
                </PopoverWithRef>
              </td>
              <td style={tdStyle}>
                <PopoverWithVOJavascript
                  forceOpen={forceOpen}
                  position="CENTER"
                >
                  <PopoverContent popoverRef={popoverRef2} />
                </PopoverWithVOJavascript>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>vl-popover--align-right</td>
              <td style={tdStyle}>
                <PopoverWithRef
                  forceOpen={forceOpen}
                  ref={popoverRef3}
                  position="RIGHT"
                >
                  <PopoverContent popoverRef={popoverRef3} />
                </PopoverWithRef>
              </td>
              <td style={tdStyle}>
                {" "}
                <PopoverWithVOJavascript forceOpen={forceOpen} position="RIGHT">
                  <PopoverContent popoverRef={popoverRef3} />
                </PopoverWithVOJavascript>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>vl-popover--large</td>
              <td style={tdStyle}>
                <PopoverWithRef
                  forceOpen={forceOpen}
                  ref={popoverRef4}
                  size="LARGE"
                >
                  <PopoverContent popoverRef={popoverRef4} />
                </PopoverWithRef>
              </td>
              <td style={tdStyle}>
                <PopoverWithVOJavascript forceOpen={forceOpen} size="LARGE">
                  <PopoverContent popoverRef={popoverRef4} />
                </PopoverWithVOJavascript>
              </td>
            </tr>
          </tbody>
        </table>
      </>
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
          Problem: The Popover component does not change its appearance when
          adding the following modifier classes
        </p>
        <ul>
          <li>
            - <b>vl-popover--align-left</b>: to align the popover with the left
            side of your container
          </li>
          <li>
            {" "}
            - <b>vl-popover--align-center</b>: to align the popover with the
            center of your container{" "}
          </li>
          <li>
            {" "}
            - <b>vl-popover--align-right</b>: to align the popover with the
            right side of your container
          </li>
        </ul>
        <p>We have two implementations of the Popover component: .</p>
        <ol>
          <li>
            - One uses Reacts Ref system. Here, the popover opens and closes
            correctly (we handle this ourselves), but the modifier classes for
            position don't work. The class <b>vl-popover--large</b> does work.
          </li>
          <li>
            - The other implementation relies on the VO Javascript. Here, the
            popover does not open. When the popover is forced open, the modifier
            classes don't seem to do anything either.
          </li>
        </ol>
        <p></p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/PopoverModifierClasses.js"
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
          <span className="vl-u-mark vl-u-mark--error">Not fixed</span>
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

function PopoverContent({ popoverRef }) {
  return (
    <>
      <h4 className="vl-u-text--bold">Popover content</h4>

      <div className="vl-action-group vl-action-group--align-right vl-u-spacer-top--xsmall">
        <button
          className="vl-button"
          onClick={() => {
            console.log("Yes");
            popoverRef.current.closePopover();
          }}
        >
          <span className="vl-button__label">Yes</span>
        </button>
        <button
          className="vl-button vl-button--secondary"
          onClick={() => {
            console.log("No");
            popoverRef.current.closePopover();
          }}
        >
          <span className="vl-button__label">No</span>
        </button>
      </div>
    </>
  );
}

const PopoverWithRef = forwardRef(
  ({ forceOpen, position, size, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target) &&
          isOpen
        ) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, isOpen]);

    useImperativeHandle(ref, () => ({
      closePopover() {
        setIsOpen(false);
      },
    }));

    return (
      <div
        className={classNames(
          "vl-popover",
          "vl-popover--single",
          popoverPositions[position] || popoverPositions.RIGHT,
          popoverSizes[size] || popoverSizes.NORMAL,
          {
            "js-vl-popover--open": forceOpen || isOpen,
          }
        )}
      >
        <button
          className="vl-button vl-button--icon-before vl-popover-toggle"
          type="button"
          aria-expanded="false"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          onKeyPress={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          Open popover
        </button>
        <div
          className={classNames("vl-popover__content", {
            "vl-popover__content--close": isOpen,
          })}
        >
          <div ref={wrapperRef} className="vl-popover__content-overflow">
            {children}
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
);

function PopoverWithVOJavascript({ forceOpen, position, size, children }) {
  useEffect(() => {
    setTimeout(() => {
      // a timeout is required to make sure the popovers are present before we try to dress them
      // all VO Javascript packages Nod to be dressed after render or they will not be activated
      window.vl.modal.dressAll();
    }, 100);
  }, []);

  return (
    <div
      className={classNames(
        "vl-popover",
        "vl-popover--single",
        popoverPositions[position] || popoverPositions.RIGHT,
        popoverSizes[size] || popoverSizes.NORMAL,
        {
          "js-vl-popover--open": forceOpen,
        }
      )}
      data-vl-popover
    >
      <button
        className="vl-button vl-button--icon-before js-vl-popover__toggle vl-popover-toggle"
        type="button"
        aria-expanded="false"
      >
        Open popover
      </button>
      <div className="vl-popover__content">
        {children}
        <button className="vl-button vl-button--naked-action vl-button--icon-after vl-popover__close-btn">
          <span className="vl-button__label vl-u-hidden vl-u-visible--s">
            Close popover
          </span>
          <i
            className="vl-button__icon vl-button__icon--after vl-vi vl-vi-cross"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
}
