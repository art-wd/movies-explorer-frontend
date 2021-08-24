import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link" to={{ pathname: "https://art-wd.github.io/how-to-learn/" }} target="_blank">
            Статичный сайт<span className="portfolio__north-east-arrow">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to={{ pathname: "https://art-wd.github.io/russian-travel/" }} target="_blank">
            Адаптивный сайт<span className="portfolio__north-east-arrow">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to={{ pathname: "https://art-wd.github.io/mesto/" }} target="_blank">
            Одностраничное приложение<span className="portfolio__north-east-arrow">&#8599;</span>
          </Link>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
