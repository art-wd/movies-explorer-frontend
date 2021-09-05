import React from 'react';
import './MoviesCard.css';

import { convertDuration } from '../../utils/utils';

function MoviesCard({ card, onLike, onDelete, isLiked, isMovies }) {
  const handleLike = () => {
    onLike(card);
  };

  const handleDelete = () => {
    onDelete(isLiked._id);
  };

  return (
    <li className="card">
      <figure className="card__figure">
        <a className="card__trailer-link" target="_blank" href={ card.trailer } rel="noreferrer">
          <img className="card__image" src={ card.image } alt={ card.nameRU } />
        </a>
        <figcaption className="card__caption">
          <div className="card__container">
            <h2 className="card__title">{ card.nameRU }</h2>
            <p className="card__subtitle">{ convertDuration(card.duration) }</p>
          </div>
          <button
            className={
              `card__button
              ${ isLiked ? " card__button_active" : ""}
              ${ !isMovies ? " card__button_remove" : "" }
              `
            }
            type="button"
            aria-label="Нравится"
            onClick={ !isMovies || isLiked ? handleDelete : handleLike }
          />
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
