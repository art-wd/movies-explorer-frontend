import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            className="search__input"
            name="film"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search__submit" />
          <span className="search__error">Здесь будет сообщение об ошибке</span>
        </div>

        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
