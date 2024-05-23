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
  RIGHT: "vl-popover--align-right",
  CENTER: "vl-popover--align-center",
};

export const popoverSizes = {
  NORMAL: "",
  LARGE: "vl-popover--large",
};

export default function PopoverModifierClasses() {
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
              <PopoverWithRef ref={popoverRef1} position="LEFT" name="Ref-left">
                <PopoverContentWithRef popoverRef={popoverRef1} />
              </PopoverWithRef>
            </td>
            <td style={tdStyle}>
              <PopoverWithVOJavascript position="LEFT" name="VO-left">
                <PopoverContentWithVOJavascript />
              </PopoverWithVOJavascript>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>vl-popover--align-center</td>
            <td style={tdStyle}>
              <PopoverWithRef
                ref={popoverRef2}
                position="CENTER"
                name="Ref-center"
              >
                <PopoverContentWithRef popoverRef={popoverRef2} />
              </PopoverWithRef>
            </td>
            <td style={tdStyle}>
              <PopoverWithVOJavascript position="CENTER" name="VO-center">
                <PopoverContentWithVOJavascript />
              </PopoverWithVOJavascript>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>vl-popover--align-right</td>
            <td style={tdStyle}>
              <PopoverWithRef
                ref={popoverRef3}
                position="RIGHT"
                name="Ref-right"
              >
                <PopoverContentWithRef popoverRef={popoverRef3} />
              </PopoverWithRef>
            </td>
            <td style={tdStyle}>
              {" "}
              <PopoverWithVOJavascript position="RIGHT" name="VO-right">
                <PopoverContentWithVOJavascript />
              </PopoverWithVOJavascript>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>vl-popover--large</td>
            <td style={tdStyle}>
              <PopoverWithRef ref={popoverRef4} size="LARGE" name="Ref-large">
                <PopoverContentWithRef popoverRef={popoverRef4} />
              </PopoverWithRef>
            </td>
            <td style={tdStyle}>
              <PopoverWithVOJavascript size="LARGE" name="VO-large">
                <PopoverContentWithVOJavascript />
              </PopoverWithVOJavascript>
            </td>
          </tr>
        </tbody>
      </table>
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
          <span className="vl-u-mark vl-u-mark--success">Fixed.</span>
        </p>
        <p>
          We used{" "}
          <span className="vl-u-text--italic">
            window.vl.popover.dressAll()
          </span>{" "}
          inside the popover component. Sometimes this would work and sometimes
          it would not. We have changed this to{" "}
          <span className="vl-u-text--italic">
            window.vl.popover.dress(element)
          </span>{" "}
          where the <span className="vl-u-text--italic">element</span> was
          retrieved using a ref. The popover works consistently now and also
          applies the modifier classes.
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

function PopoverContentWithRef({ popoverRef }) {
  return (
    <>
      <h4 className="vl-u-text--bold">Popover content</h4>

      <div className="vl-action-group vl-action-group--align-right vl-u-spacer-top--xsmall">
        <button
          className="vl-button"
          onClick={() => {
            console.log("You clicked yes!");
            popoverRef.current.closePopover();
          }}
        >
          <span className="vl-button__label">Yes</span>
        </button>
        <button
          className="vl-button vl-button--secondary"
          onClick={() => {
            console.log("You clicked no!");
            popoverRef.current.closePopover();
          }}
        >
          <span className="vl-button__label">No</span>
        </button>
      </div>
    </>
  );
}

function PopoverContentWithVOJavascript() {
  return (
    <>
      <h4 className="vl-u-text--bold">Popover content</h4>

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
    </>
  );
}

const PopoverWithRef = forwardRef(({ position, size, name, children }, ref) => {
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
          "js-vl-popover--open": isOpen,
        }
      )}
    >
      <button
        className="vl-button vl-button--icon-before vl-popover-toggle"
        type="button"
        aria-expanded="false"
        onClick={(e) => {
          console.log("Popover should open");
          e.stopPropagation();
          setIsOpen(true);
        }}
        onKeyPress={(e) => {
          console.log("Popover should open");
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        Open popover {name}
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
});

function PopoverWithVOJavascript({ position, size, name, children }) {
  const popoverRef = useRef();

  useEffect(() => {
    window.vl.popover.dress(popoverRef.current);
  });

  return (
    <div
      className={classNames(
        "vl-popover",
        "vl-popover--single",
        popoverPositions[position] || popoverPositions.RIGHT,
        popoverSizes[size] || popoverSizes.NORMAL
      )}
      data-vl-popover="true"
      data-vl-popover-single="true"
      ref={popoverRef}
    >
      <button
        className="vl-button vl-button--icon-before js-vl-popover__toggle vl-popover-toggle"
        type="button"
        aria-expanded="false"
        onClick={() => console.log("Popover should open")}
      >
        Open popover {name}
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
