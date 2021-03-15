import React, { useState, useEffect, useRef } from 'react';

import '@govflanders/vl-ui-core';
import '@govflanders/vl-ui-multiselect';
import '@govflanders/vl-ui-pill-input';
import '@govflanders/vl-ui-select';
import '@govflanders/vl-ui-util';

import './MultiSelectRepro.scss';

export default function MultiSelect() {
  const [ isDisabled, setDisabled ] = useState(false);
  const reference = useRef();

  useEffect(() => {
    dress();
  });

  function undress() {
    window.vl.multiSelect.undressAll();
  }

  function dress() {
    window.vl.multiSelect.dress(reference.current);
  }

  return (
    <div className="multichoice">
      <label className="vl-form__label" htmlFor="stuff">
        select one
      </label>
      <div className="vl-form__input">
        <div className="js-vl-multiselect">
          <select id="stuff" multiple name="multiselect" className="vl-multiselect" data-vl-multiselect ref={ reference }>
            <option value="België">België</option>
            <option value="Duitsland" disabled={ isDisabled }>Duitsland</option>
            <option value="Frankrijk">Frankrijk</option>
          </select>
        </div>
      </div>
      <div className="actions">
        <button className="vl-button vl-form-col" onClick={ () => setDisabled(!isDisabled) }>
          <span className="vl-button__label">
            { isDisabled ? 'Enable Duitsland' : 'Disable Duitsland' }
          </span>
        </button>
        <button className="vl-button" onClick={ () => undress() }>
          <span className="vl-button__label">
            Undress component
          </span>
        </button>
        <button className="vl-button" onClick={ () => dress() }>
          <span className="vl-button__label">
            Dress component
          </span>
        </button>
      </div>
    </div>
  );
}