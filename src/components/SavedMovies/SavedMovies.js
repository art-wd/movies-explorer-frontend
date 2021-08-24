import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filmImg from '../../images/film-img.jpg'

function SavedMovies() {
  const isSavedPath = useRouteMatch("/saved-movies")?.isExact;

  const card = {
    img: filmImg,
    name: "Фильм",
    duration: "1ч42м",
  }
  const cards = [...Array(3).keys()].map(i => card)

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={ cards } isSavedPath={isSavedPath} />
    </main>
  );
}

export default SavedMovies;
