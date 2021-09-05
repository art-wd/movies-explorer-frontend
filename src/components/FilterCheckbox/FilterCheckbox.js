import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChange, isShort }) {
  return (
    <div className="filter">
      <p className="filter__title">Короткометражки</p>
      <label className="filter__switch">
        <input
          className="filter__checkbox"
          type="checkbox"
          onChange={ onChange }
          checked={ isShort }
        />
        <span  className="filter__slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
