import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useRouteMatch } from 'react-router-dom';

function SearchForm({ onSubmit, onCheck, isShort }) {
  const { values, setValues, errors, isValid, setIsValid, handleChange } = useFormWithValidation();
  const isMovies = useRouteMatch('/movies')?.isExact;

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('query'));
    if (data && isMovies) {
      setValues({ query: data });
      setIsValid(true);
    }
  }, [setValues, setIsValid, isMovies]);

  const handleCheck = (evt) => {
    onCheck(evt.target.checked);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(values.query);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={ handleSubmit }>
        <div className="search__container">
          <input
            className="search__input"
            name="query"
            type="text"
            placeholder="Фильм"
            required
            value={ values.query || '' }
            onChange={ handleChange }
          />
          <button className={`search__submit${ !isValid ? " search__submit_disabled" : "" }`} disabled={ !isValid } />
          <span className="search__error">
            { errors.query || '' }
          </span>
        </div>

        <FilterCheckbox onChange={ handleCheck } isShort={ isShort } />
      </form>
    </section>
  );
}

export default SearchForm;
