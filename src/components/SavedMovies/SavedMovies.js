import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  onSubmit,
  onCheck,
  moviesList,
  message,
  onDelete
}) {
  return (
    <main className="saved-movies">
      <SearchForm onSubmit={ onSubmit } onCheck={ onCheck } />
      <MoviesCardList
        cards={ moviesList }
        savedMovies={ moviesList }
        message={ message }
        onDelete={ onDelete }
      />
    </main>
  );
}

export default SavedMovies;
