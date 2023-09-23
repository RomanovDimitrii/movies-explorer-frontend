import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  function handleSubmit() {
    console.log('Выводим фильмы');
  }

  // function handleChangeInput(e) {
  //  setPlaceLinkInput(e.target.value);
  // }

  return (
    <section className="search">
      <form className="search-form" name="search-form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            name="search-form-input"
            id="search-form-input"
            placeholder="Фильм"
            required
            minLength="2"
            maxLength="30"
            // onChange={handleChangeInput}
            // value={inputValue || ''}
          />
          <button className="search-form__submit-button" type="submit">
            Поиск
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}
export default SearchForm;
