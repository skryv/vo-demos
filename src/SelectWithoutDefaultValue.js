import React, { useEffect } from 'react';

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-select";
import "@govflanders/vl-ui-util";

export default function SelectWithoutDefaultValue() {
  useEffect(() => {
    window.vl.select.dressAll();
  }, []);

  return (
    <>
      <label for="vl-select-select-2" class="vl-form__label">
        Kies een land
      </label>
      <select name="vl-select-select-2" id="vl-select-select-2" class="vl-select vl-select--block" tabindex="0" data-vl-select data-vl-select-search-empty-text="Geen resultaten gevonden">
        <option value="België">België</option>
        <option value="Frankrijk">Frankrijk</option>
        <option value="Spanje">Spanje</option>
      </select>
    </>
  )
}
