import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({
  buttonTitle,
  buttonSubtitle,
  linkTitle,
  linkPath,
 }) {
  return (
    <>
      <button className="button" type="submit">{ buttonTitle }</button>
      <div className="button__subtitle">
        <p className="button__question">{ buttonSubtitle }</p>
        <Link className="button__link" to={ linkPath }>{ linkTitle }</Link>
      </div>
    </>
  );
}

export default Button;
