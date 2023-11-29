import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {
  checkToken,
  getSavedMovies,
  changeProfile,
  logOut,
  authorize,
  register,
  saveMovie,
  deleteMovie
} from '../utils/MainApi';

import { getMovies } from '../utils/MoviesApi';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});
  const [isPreloaderShown, setIsPreloaderShown] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoPopupMessage, setInfoPopupMessage] = useState('');
  const [isProcessSuccessful, setIsProcessSuccessful] = useState(false);
  const [isSavedMoviesListChanged, setIsSavedMoviesListChanged] = useState(false);
  const [isMoviesDataReady, setIsMoviesDataReady] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const checkTokenData = () => {
    setIsPreloaderShown(true);
    checkToken()
      .then(data => {
        if (!data.email) {
          return;
        }
        setCurrentUserInfo(data);
        setIsLoggedIn(true);
        navigate(location.pathname);
      })
      .catch(e => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  };

  React.useEffect(() => {
    checkTokenData();
    // eslint-disable-next-line
  }, [isLoggedIn]);

  React.useEffect(() => {
    setIsPreloaderShown(true);
    getSavedMovies()
      .then(savedMoviesData => {
        if (savedMoviesData.length) {
          const savedLikedMoviesData = savedMoviesData.map(movie => {
            return { ...movie, isLiked: true, id: movie.movieId, _id: movie._id };
          });
          localStorage.setItem('savedMovies', JSON.stringify(savedLikedMoviesData));
        }
      })
      .catch(error => {
        console.error(`Ошибка при получении данных фильмов: ${error}`);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }, [isLoggedIn]);

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeMenuPopup();
      }
    }

    function handeMouseClosePopup(evt) {
      if (evt.target === document.querySelector('.menu')) {
        closeMenuPopup();
      }
    }

    if (isMenuPopupOpen) {
      // навешиваем только при открытии
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('mouseup', handeMouseClosePopup);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
        document.removeEventListener('mouseup', handeMouseClosePopup);
      };
    }
  }, [isMenuPopupOpen]);

  React.useEffect(() => {
    // infoPopup
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeInfoPopup();
      }
    }

    function handeMouseClosePopup(evt) {
      if (evt.target === document.querySelector('.popup')) {
        closeInfoPopup();
      }
    }

    if (isInfoPopupOpen) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('mouseup', handeMouseClosePopup);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
        document.removeEventListener('mouseup', handeMouseClosePopup);
      };
    }
  }, [isInfoPopupOpen]);

  function closeMenuPopup() {
    setIsMenuPopupOpen(false);
  }

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closeInfoPopup() {
    setIsInfoPopupOpen(false);
  }

  function getMoviesData() {
    setIsPreloaderShown(true);
    getMovies()
      .then(data => {
        if (!data) {
          return;
        }
        localStorage.setItem('moviesData', JSON.stringify(data));
        setIsMoviesDataReady(!isMoviesDataReady);
      })
      .catch(error => {
        console.error(`Ошибка при получении данных фильмов: ${error}`);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  function handleEditProfile(name, email) {
    setIsPreloaderShown(true);
    changeProfile(name, email)
      .then(userData => {
        setCurrentUserInfo(userData);
        setIsInfoPopupOpen(true);
        setInfoPopupMessage('Ваш профиль успешно обновлен!');
        setIsProcessSuccessful(true);
      })
      .catch(error => {
        setIsInfoPopupOpen(true);
        setInfoPopupMessage(`Ошибка при обновлении данных пользователя: ${error}`);
        setIsProcessSuccessful(false);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  function handleLogout() {
    setIsPreloaderShown(true);
    logOut()
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.error(`Ошибка при выходе из учетной записи: ${error}`);
      })
      .finally(() => {
        setIsPreloaderShown(false);
        setIsLoggedIn(false);
        localStorage.clear();
        setCurrentUserInfo({});
      });
  }

  function handleRegister(values) {
    setIsPreloaderShown(true);
    register(values.password, values.email, values.name)
      .then(data => {
        if (data.email) {
          setIsInfoPopupOpen(true);
          setIsProcessSuccessful(true);
          setInfoPopupMessage('Регистрация прошла успешно!');
          navigate('/signin', { replace: true });
        }
      })
      .catch(err => {
        //  setErrorMessage(err);
        setIsInfoPopupOpen(true);
        setIsProcessSuccessful(false);
        if (err.includes('409')) {
          setInfoPopupMessage(`Ошибка при регистрации: даный email уже зарегистрирован`);
        } else {
          setInfoPopupMessage(`Ошибка при регистрации: ${err}`);
        }
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  function handleAuth(values) {
    setIsPreloaderShown(true);
    authorize(values.password, values.email)
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          setIsInfoPopupOpen(true);
          setInfoPopupMessage('Авторизация прошла успешно!');
          setIsProcessSuccessful(true);
          navigate('/movies', { replace: true });
          closeInfoPopup();
        }
      })
      .catch(err => {
        setIsInfoPopupOpen(true);
        setIsProcessSuccessful(false);
        if (err.includes('401')) {
          setInfoPopupMessage(`Неправильные почта или пароль`);
        } else {
          setInfoPopupMessage(`Ошибка при авторизации: ${err}`);
        }
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  function handleSaveMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN
  ) {
    let savedMovieId;
    setIsPreloaderShown(true);
    saveMovie(
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN
    )
      .then(movie => {
        const savedId = movie.movieId;
        savedMovieId = movie._id;

        const moviesList = JSON.parse(localStorage.getItem('moviesList'));
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies')) || [];

        localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesList, movie]));
        const newMoviesList = moviesList.map(movieItem => {
          //отработка сохранения изменений в MoviesList localStorage
          if (movieItem.id === Number(savedId)) {
            movieItem.isLiked = true;
            movieItem._id = savedMovieId;
          }

          return movieItem;
        });

        localStorage.setItem('moviesList', JSON.stringify(newMoviesList));
      })
      .catch(error => {
        console.error(`Ошибка при сохранении фильма : ${error}`);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  function handleDeleteMovie(_id) {
    setIsPreloaderShown(true);
    deleteMovie(_id)
      .then(deletedMovie => {
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
        const moviesList = JSON.parse(localStorage.getItem('moviesList'));
        const newSavedMoviesList = savedMoviesList.filter(movie => {
          return movie.nameRU !== deletedMovie.nameRU;
        });
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMoviesList));

        const newMoviesList = moviesList.map(movie => {
          //отработка сохранения изменений в MoviesList localStorage
          if (movie._id === _id) {
            movie.isLiked = false;

            //  setIsSavedMoviesListChanged(!isSavedMoviesListChanged);
          }
          return movie;
        });
        // setMoviesList(newMoviesList);
        setIsSavedMoviesListChanged(!isSavedMoviesListChanged);
        localStorage.setItem('moviesList', JSON.stringify(newMoviesList));
      })
      .catch(error => {
        console.error(`Ошибка при удалении фильма : ${error}`);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/signup"
          element={
            <Register
              isInfoPopupOpen={isInfoPopupOpen}
              onCloseInfoPopup={closeInfoPopup}
              infoPopupMessage={infoPopupMessage}
              handleRegister={handleRegister}
              isProcessSuccessful={isProcessSuccessful}
              isPreloaderShown={isPreloaderShown}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              isLoggedIn={setIsLoggedIn}
              isInfoPopupOpen={isInfoPopupOpen}
              onCloseInfoPopup={closeInfoPopup}
              infoPopupMessage={infoPopupMessage}
              handleAuth={handleAuth}
              isProcessSuccessful={isProcessSuccessful}
              isPreloaderShown={isPreloaderShown}
            />
          }
        />
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              isMenuOpen={isMenuPopupOpen}
              onMenu={handleMenuPopupClick}
              onCloseMenu={closeMenuPopup}
            />
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              element={
                <Movies
                  isMenuOpen={isMenuPopupOpen}
                  onMenu={handleMenuPopupClick}
                  onCloseMenu={closeMenuPopup}
                  isPreloaderShown={isPreloaderShown}
                  isLoggedIn={isLoggedIn}
                  getMovies={getMoviesData}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  isMoviesDataReady={isMoviesDataReady}
                />
              }
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              element={
                <SavedMovies
                  isMenuOpen={isMenuPopupOpen}
                  onMenu={handleMenuPopupClick}
                  onCloseMenu={closeMenuPopup}
                  getMovies={getMoviesData}
                  isPreloaderShown={isPreloaderShown}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  isSavedMoviesListChanged={isSavedMoviesListChanged}
                />
              }
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              element={
                <CurrentUserContext.Provider value={currentUserInfo}>
                  <Profile
                    isMenuOpen={isMenuPopupOpen}
                    onMenu={handleMenuPopupClick}
                    onCloseMenu={closeMenuPopup}
                    onEditProfile={handleEditProfile}
                    isPreloaderShown={isPreloaderShown}
                    onLogout={handleLogout}
                    isInfoPopupOpen={isInfoPopupOpen}
                    onCloseInfoPopup={closeInfoPopup}
                    infoPopupMessage={infoPopupMessage}
                    isProcessSuccessful={isProcessSuccessful}
                  />
                </CurrentUserContext.Provider>
              }
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
