import React from 'react';
import './Input.css';

function Input({
  label,
  name,
  type,
  isRequired,
  minLength,
  maxLength
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
        minLength={ minLength }
        maxLength={ maxLength }
      />
      <span className="input__error">Здесь будет сообщение об ошибке валидации</span>
    </label>
  );
}

export default Input;
