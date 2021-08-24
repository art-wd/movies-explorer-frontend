import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import me from '../../images/me.jpg';
import Portfolio from '../Portfolio/Portfolio';
import Title from '../Title/Title';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Title title="Студент" />
      <article className="about-me__article">
        <div className="about-me__container">
          <h3 className="about-me__title">Артём</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик</p>
          <p className="about-me__paragraph">Вырос и живу в Волгограде. Люблю слушать музыку и прогулки на свежем воздухе. С 2020 года работаю в образовательной поддержке. Примерно в это же время начал кодить.</p>
          <ul className="about-me__list">
            <li className="about-me__item">
              <Link className="about-me__link" to={{ pathname: "https://t.me/artchgn" }} target="_blank">Telegram</Link>
            </li>
            <li className="about-me__item">
              <Link className="about-me__link" to={{ pathname: "https://github.com/art-wd" }} target="_blank">Github</Link>
            </li>
          </ul>
        </div>
        <img className="about-me__image" src={me} alt="Студент" />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
