import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Message from '../Message/Message';

import { throttle, fixMovie } from '../../utils/utils';

function MoviesCardList({ cards, savedMovies, message, onLike, onDelete, isMovies }) {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  const [shownCards, setShownCards] = React.useState([]);
  const [maxCards, setMaxCards] = React.useState(0);
  const [moreCards, setMoreCards] = React.useState(0);

  React.useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (windowSize > 1296) {
      setMaxCards(12);
      setMoreCards(4);
    } else if (windowSize > 1006) {
      setMaxCards(12);
      setMoreCards(3);
    } else if (windowSize > 646) {
      setMaxCards(8);
      setMoreCards(2);
    } else {
      setMaxCards(5);
      setMoreCards(2);
    }
  }, [windowSize]);

  React.useEffect(() => {
    setShownCards(cards.slice(0, maxCards));
  }, [cards, maxCards]);

  const handleClick = () => {
    setMaxCards(maxCards + moreCards);
  };

  return (
    <section className="cards">
      <Message message={ message } />
      <ul className="cards__list">
        { isMovies ? (
            shownCards.map((movie) => fixMovie(movie)).map(({ movieId, ...card }) => (
              <MoviesCard
                key={ movieId }
                card={ { movieId, ...card } }
                onLike={ onLike }
                isLiked={ savedMovies.find((movie) => movie.movieId === movieId) }
                onDelete={ onDelete }
                isMovies={ isMovies }
              />)
            )
          ) : (
            shownCards.map(( { movieId, ...card } ) => (
              <MoviesCard
                key={ movieId }
                card={ { movieId, ...card } }
                isLiked={ savedMovies.find((movie) => movie.movieId === movieId) }
                onDelete={ onDelete }
              />)
            )
        )}
      </ul>

      <button
        className={
          `cards__button
          ${ (!isMovies || !cards.length || cards.length === shownCards.length)
            ? " cards__button_hidden"
            : ""
          }`
        }
        type="button"
        onClick={ handleClick }
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
