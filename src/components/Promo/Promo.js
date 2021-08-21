import React from 'react';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <img className="promo__logo" src={landingLogo} alt="Промо логотип" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;
