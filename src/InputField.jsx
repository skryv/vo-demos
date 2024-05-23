import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import { TranslationsContext } from "@skryv/core-react/src/services/translations";

import Help from "./inlines/Help/Help";
import InlineErrors from "./inlines/InlineErrors/InlineErrors";
import InlineHelp from "./inlines/InlineHelp/InlineHelp";
import InputLabel from "./inlines/InputLabel/InputLabel";

import "./InputField.scss";

function InputField({
  id,
  label,
  isInline,
  isRequired,
  helpInLine,
  help,
  errorMessages,
  warningMessages,
  shouldUseFullWidth,
  children,
}) {
  const { gettext } = useContext(TranslationsContext);
  const translatedLabel = gettext(label);
  const translatedHelp = gettext(help);

  const isInError =
    (errorMessages ? errorMessages.length > 0 : false) ||
    (warningMessages ? warningMessages.length > 0 : false);

  function renderInlineInput() {
    return (
      <div className="input-component-wrapper is-inline">
        <div className="input-component-content">
          <div>{children}</div>
          <div>
            <InputLabel
              htmlFor={id}
              label={translatedLabel}
              isRequired={isRequired}
            ></InputLabel>
            {help && !helpInLine && <Help helpText={translatedHelp} />}
          </div>
        </div>
        {helpInLine && <InlineHelp helpText={translatedHelp}></InlineHelp>}
      </div>
    );
  }

  function renderDefaultInput() {
    return (
      <>
        <div className="input-component-wrapper">
          <InputLabel
            htmlFor={id}
            label={translatedLabel}
            isRequired={isRequired}
          />
          {help && !helpInLine && <Help helpText={translatedHelp} />}
        </div>
        {helpInLine && <InlineHelp helpText={translatedHelp}></InlineHelp>}
        {children}
      </>
    );
  }

  return (
    <div
      className={classNames("input-component vl-col--1-1--s", {
        "vl-col--1-2": !shouldUseFullWidth,
      })}
      id={"editor-" + id}
    >
      {isInline ? renderInlineInput() : renderDefaultInput()}
      {isInError && (
        <InlineErrors
          errorMessages={errorMessages}
          warningMessages={warningMessages}
        ></InlineErrors>
      )}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isInline: PropTypes.bool,
  isRequired: PropTypes.bool,
  helpInLine: PropTypes.bool,
  help: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  errorMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      key: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  warningMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      key: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  shouldUseFullWidth: PropTypes.bool,
};

export default InputField;
