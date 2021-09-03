import React from 'react';
import './Input.css';

function Input({
  label,
  name,
  type,
  isRequired,
  pattern,
  minLength,
  maxLength,
  value,
  error,
  errorMessage,
  onChange,
}) {
  return (
    <label className="input">
      <span className="input__label">{ label }</span>
      <input
        className="input__input"
        type={ type }
        name={ name }
        aria-label={ label }
        required={ isRequired }
        pattern={ pattern }
        minLength={ minLength }
        maxLength={ maxLength }
        value={ value || '' }
        onChange={ onChange }
      />
      <span className="input__error">{ error ? errorMessage : '' }</span>
    </label>
  );
}

export default Input;
