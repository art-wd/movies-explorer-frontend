import React from 'react';
import './AboutProject.css';
import Article from '../Article/Article';
import ProgressBar from '../ProgressBar/ProgressBar';
import Title from '../Title/Title';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <Title title="О проекте" />
      <div className="about-project__articles">
        <Article
          title={'Дипломный проект включал 5 этапов'}
          paragraph={'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'}
        />
        <Article
          title={'На выполнение диплома ушло 5 недель'}
          paragraph={'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'}
        />
      </div>
      <div className="about-project__progress-bars">
        <ProgressBar
          title={'1 неделя'}
          caption={'Back-end'}
          isSmall={true}
        />
        <ProgressBar
          title={'4 недели'}
          caption={'Front-end'}
          isSmall={false}
        />
      </div>
    </section>
  );
}

export default AboutProject;
