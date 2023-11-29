import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../utils/validation.js';
import './SearchForm.css';

function SearchForm({ isShortMoviesCheckboxOn, searchFormValue, savedMoviesPage, getMovies }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    if (!localStorage.moviesData) {
      getMovies();
      searchFormValue(values.search);
      if (!savedMoviesPage) {
        localStorage.setItem('searchFormValue', JSON.stringify(values.search));
      }
    } else {
      searchFormValue(values.search);
      if (!savedMoviesPage) {
        localStorage.setItem('searchFormValue', JSON.stringify(values.search));
      }
    }
  }

  return (
    <section className="search">
      <form className="search-form" name="search-form" onSubmit={handleSubmit} id="search-form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            name="search"
            id="search"
            placeholder="Фильм"
            required
            minLength="1"
            maxLength="30"
            onChange={handleChange}
            formNoValidate
          />
          <button
            className={`search-form__submit-button ${
              !isValid ? 'search-form__submit-button_disabled' : ''
            }`}
            type="submit"
            disabled={!isValid}
          >
            Поиск
          </button>
        </div>
        <span className="search-form__input-error">{errors.search}</span>
        <FilterCheckbox
          isShortMoviesCheckboxOn={isShortMoviesCheckboxOn}
          savedMoviesPage={savedMoviesPage}
        />
      </form>
    </section>
  );
}
export default SearchForm;
