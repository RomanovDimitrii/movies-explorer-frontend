import React, { useState } from 'react';

import NavTab from '../NavTab/NavTab';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isMenuOpen,
  onCloseMenu,
  onMenu,
  getMovies,
  isPreloaderShown,
  onSaveMovie,
  onDeleteMovie,
  isSavedMoviesListChanged
}) {
  const [isShortMoviesCheckboxOn, setIsShortMoviesCheckboxOn] = useState(false);
  const [searchFormValue, setSearchFormValue] = useState('');
  const [moviesListError, setMoviesListError] = useState('');
  const [savedMoviesPageList, setSavedMoviesPageList] = useState('');

  function handleShortMoviesList(moviesList) {
    return moviesList.filter(function (moviesItem) {
      return moviesItem.duration < 40;
    });
  }

  React.useEffect(() => {
    setMoviesListError('');
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies')) || [];

    let filteredMoviesList;

    if (!searchFormValue) {
      //если нет поиска
      if (!savedMoviesList.length) {
        setSavedMoviesPageList([]);
        // если нет сохраненных фильмов
        return;
      }
      filteredMoviesList = savedMoviesList;

      setMoviesListError(''); // без поиска ошибка не появляется
      if (!isShortMoviesCheckboxOn) {
        setSavedMoviesPageList(filteredMoviesList); // при выкл чекбоксе и без поиска savedMovies
      } else {
        setSavedMoviesPageList(handleShortMoviesList(filteredMoviesList)); //фильтруем фильмы при вкл чекбоксе
      }
    } else {
      // если введен поиск
      if (!savedMoviesList.length) {
        //если нет сохраненных фильмов, но поиск нажат
        setMoviesListError('У вас пока нет сохраненных фильмов');
        setSavedMoviesPageList('');
        return;
      } else {
        filteredMoviesList = savedMoviesList.filter(function (moviesItem) {
          return (
            moviesItem.nameRU.toLowerCase().includes(searchFormValue.toLowerCase()) ||
            moviesItem.nameEN.toLowerCase().includes(searchFormValue.toLowerCase())
          );
        });
        if (!filteredMoviesList.length) {
          setMoviesListError('По вашему запросу ничего не найдено. Измените условия поиска');
          setSavedMoviesPageList('');
          return;
        }
        if (!isShortMoviesCheckboxOn) {
          setSavedMoviesPageList(filteredMoviesList); // при вкл чекбоксе и без поиска savedMovies
          setMoviesListError('');
        } else {
          const shortMoviesList = handleShortMoviesList(filteredMoviesList); //фильтруем фильмы при вкл чекбоксе
          if (!shortMoviesList.length) {
            setMoviesListError('По вашему запросу ничего не найдено. Измените условия поиска');
            setSavedMoviesPageList('');
            return;
          } else {
            setSavedMoviesPageList(shortMoviesList);
            setMoviesListError('');
          }
        }
      }
    }
  }, [isSavedMoviesListChanged, isShortMoviesCheckboxOn, searchFormValue]);

  return (
    <>
      <Preloader isPreloaderShown={isPreloaderShown} />
      <NavTab
        schemeBlue={false}
        isLoggedIn={true}
        isMenuOpen={isMenuOpen}
        onMenu={onMenu}
        onCloseMenu={onCloseMenu}
        currentPage="savedMovies"
      />
      <main>
        <SearchForm
          isShortMoviesCheckboxOn={setIsShortMoviesCheckboxOn}
          searchFormValue={setSearchFormValue}
          savedMoviesPage={true}
          getMovies={getMovies}
        />
        <MoviesCardList
          savedMoviesPage={true}
          moviesList={savedMoviesPageList}
          moviesListError={moviesListError}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </main>

      <Footer />
    </>
  );
}

export default SavedMovies;
