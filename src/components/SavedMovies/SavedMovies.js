import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filmImg from '../../images/film-img.jpg'

function SavedMovies() {
  const card = {
    img: filmImg,
    name: "Фильм",
    duration: "1ч42м",
  }
  const cards = [...Array(3).keys()].map(i => card)

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={ cards } />
    </main>
  );
}

export default SavedMovies;
