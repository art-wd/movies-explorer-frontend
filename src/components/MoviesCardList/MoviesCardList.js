import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  const isHidden = cards.length < 4;

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card, i) => (
          <MoviesCard
            key={i}
            card={ card }
          />))}
      </ul>

      <button className={`cards__button${isHidden ? ' cards__button_hidden' : ''}`} type="button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
