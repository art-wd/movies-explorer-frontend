import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filmImg from '../../images/film-img.jpg'

function Movies() {
  const card = {
    img: filmImg,
    name: "Фильм",
    duration: "1ч42м",
  }
  const cards = [...Array(16).keys()].map(i => card)

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={ cards } />
    </main>
  );
}

export default Movies;
