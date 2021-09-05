import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  onSubmit,
  onCheck,
  isShort,
  moviesList,
  savedMovies,
  message,
  isLoading,
  onLike,
  onDelete,
}) {

  return (
    <main className="movies">
      <SearchForm onSubmit={ onSubmit } onCheck={ onCheck } isShort={ isShort } />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={ moviesList }
          savedMovies={ savedMovies }
          message={  message }
          onLike={ onLike }
          onDelete={ onDelete }
          isMovies={ true }
        />
      )}
    </main>
  );
}

export default Movies;
