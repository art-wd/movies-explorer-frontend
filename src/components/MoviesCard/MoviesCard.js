import React from 'react';
import './MoviesCard.css';

function MoviesCard({ card }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src={ card.img } alt={ card.name } />
        <figcaption className="card__caption">
          <div className="card__container">
            <h2 className="card__title">{ card.name }</h2>
            <p className="card__subtitle">{ card.duration }</p>
          </div>
          <button className={ `card__button${isLiked ? " card__button_active" : ""}` } type="button" aria-label="Нравится" onClick={ handleLike } />
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
