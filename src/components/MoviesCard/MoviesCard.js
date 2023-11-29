import React, { useState } from 'react';

import './MoviesCard.css';
import likeIcon from '../../images/likedImageIcon.svg';
import unLikeIcon from '../../images/cross_icon.svg';

function MoviesCard({
  country,
  description,
  director,
  duration,
  id,
  image,
  nameEN,
  nameRU,
  trailerLink,
  year,

  shownInSavedMoviesList,
  isLiked,
  _id,
  onSaveMovie,
  onDeleteMovie
}) {
  const [isSaved, setIsSaved] = useState(isLiked);

  function handleSaveMovie() {
    if (!isSaved && !shownInSavedMoviesList) {
      onSaveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        id,
        nameRU,
        nameEN,
        _id
      );

      setIsSaved(true);
    } else {
      if (shownInSavedMoviesList) {
        onDeleteMovie(_id);

        setIsSaved(false);
      } else {
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
        const deletedMovie = savedMoviesList.find(movie => {
          return Number(movie.movieId) === id;
        });

        onDeleteMovie(deletedMovie._id);

        setIsSaved(false);
      }
    }
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{`${parseInt(duration / 60)}ч ${duration % 60}м `}</p>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__video"
          src={shownInSavedMoviesList ? image : `https://api.nomoreparties.co/${image.url}`}
          alt={nameRU}
        />
      </a>

      <button
        className={`movies-card__button ${isSaved ? 'movies-card__button_liked' : ''} 
        ${shownInSavedMoviesList ? 'movies-card__button_saved' : ''}`}
        type="button"
        onClick={handleSaveMovie}
      >
        {!isSaved && !shownInSavedMoviesList && (
          <span className="movies-card__button-text">Сохранить</span>
        )}
        {isSaved && !shownInSavedMoviesList && (
          <img className="movies-card__like-icon" src={likeIcon} alt="Фильм сохранен" />
        )}
        {shownInSavedMoviesList && (
          <img
            className="movies-card__like-icon"
            src={unLikeIcon}
            alt="удалить фильм из сохраненных"
          />
        )}
      </button>
    </div>
  );
}
export default MoviesCard;
