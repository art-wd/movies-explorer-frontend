import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__item">
           <Link className="footer__link" to={{ pathname: "https://practicum.yandex.ru" }} target="_blank">Яндекс.Практикум</Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to={{ pathname: "https://github.com/art-wd" }} target="_blank">Github</Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to={{ pathname: "https://t.me/artchgn" }} target="_blank">Telegram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
