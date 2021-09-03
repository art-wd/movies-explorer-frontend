import React from 'react';
import './Form.css';
import Logo from '../Logo/Logo';

function Form({
  children,
  title,
  onSubmit,
}) {
  return (
    <form className="form" onSubmit={ onSubmit }>
      <Logo />
      <h1 className="form__title">{ title }</h1>
      { children }
    </form>
  );
}

export default Form;
