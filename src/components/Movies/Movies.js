import React, { useState } from 'react';

import NavTab from '../NavTab/NavTab';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({
  isMenuOpen,
  onCloseMenu,
  onMenu,
  isPreloaderShown,
  isLoggedIn,
  getMovies,
  onSaveMovie,
  onDeleteMovie,
  isMoviesDataReady
}) {
  const [isShortMoviesCheckboxOn, setIsShortMoviesCheckboxOn] = useState(true);
  const [searchFormValue, setSearchFormValue] = useState('');
  const [moviesList, setMoviesList] = useState(null);
  const [moviesListError, setMoviesListError] = useState('');
  const [isMoviesPreloaderShown, setIsMoviesPreloaderShown] = useState(false);

  React.useEffect(() => {
    setIsMoviesPreloaderShown(true);

    const moviesData = JSON.parse(localStorage.getItem('moviesData'));
    const searchValue = JSON.parse(localStorage.getItem('searchFormValue'));
    const checkBoxValue = JSON.parse(localStorage.getItem('checkBoxValue'));
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies')) || [];

    if (!searchValue || !moviesData) {
      //если не подгрузились фильмы с api, или нет сохраненного запроса поиска, то выходим
      setIsMoviesPreloaderShown(false);

      return;
    }

    const filteredMoviesList = moviesData.filter(function (moviesItem) {
      return (
        moviesItem.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        moviesItem.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    if (filteredMoviesList.length) {
      setMoviesListError('');
    } else {
      setMoviesListError('По вашему запросу ничего не найдено. Измените условия поиска');
    }

    const filteredAndLikedMoviesList = handleLikeMoviesList(filteredMoviesList, savedMoviesList);

    let shortMovies = [];
    if (!checkBoxValue) {
      //чекбокс выключен
      setMoviesList(filteredAndLikedMoviesList);

      localStorage.setItem('moviesList', JSON.stringify(filteredAndLikedMoviesList));

      setIsMoviesPreloaderShown(false);
    } else {
      //  чекбокс включен

      shortMovies = filteredAndLikedMoviesList.filter(function (moviesItem) {
        return moviesItem.duration < 40;
      });

      if (shortMovies.length) {
        setMoviesListError('');
      } else {
        setMoviesListError('По вашему запросу ничего не найдено. Измените условия поиска');
        setIsMoviesPreloaderShown(false);
      }

      setMoviesList(shortMovies);
      localStorage.setItem('moviesList', JSON.stringify(shortMovies));

      setIsMoviesPreloaderShown(false);
    }

    setIsMoviesPreloaderShown(false);
  }, [searchFormValue, isShortMoviesCheckboxOn, isMoviesDataReady]);

  function handleLikeMoviesList(filteredMoviesList, savedMoviesList) {
    const filteredAndSavedMovies = filteredMoviesList.map(moviesItem => {
      savedMoviesList.find(savedMovieItem => {
        if (Number(moviesItem.id) === Number(savedMovieItem.movieId)) {
          moviesItem.isLiked = true;
          moviesItem._id = savedMovieItem._id;
        }
        //   return moviesItem;
      });

      return moviesItem;
    });

    return filteredAndSavedMovies;
  }

  return (
    <>
      <Preloader isPreloaderShown={isMoviesPreloaderShown || isPreloaderShown} />
      <NavTab
        isLoggedIn={isLoggedIn}
        isMenuOpen={isMenuOpen}
        onMenu={onMenu}
        onCloseMenu={onCloseMenu}
        currentPage="movies"
      />
      <main>
        <SearchForm
          isShortMoviesCheckboxOn={setIsShortMoviesCheckboxOn}
          searchFormValue={setSearchFormValue}
          isMoviesPreloaderShown={setIsMoviesPreloaderShown}
          getMovies={getMovies}
        />

        <MoviesCardList
          savedMoviesPage={false}
          moviesList={moviesList}
          moviesListError={moviesListError}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </main>

      <Footer />
    </>
  );
}

export default Movies;
