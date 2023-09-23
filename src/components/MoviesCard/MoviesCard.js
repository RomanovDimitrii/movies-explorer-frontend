import React from 'react';

import './MoviesCard.css';
import likeIcon from '../../images/likedImageIcon.svg';
import unLikeIcon from '../../images/cross_icon.svg';

function MoviesCard({ movie, isLiked, title, duration, shownInSavedMoviesList }) {
  return (
    <section className="movies-card">
      <div className="movies-card__info">
        <h3 className="movies-card__title">{title}</h3>
        <p className="movies-card__duration">{duration}</p>
      </div>
      <img className="movies-card__video" src={movie} alt={title} />
      <button
        className={`movies-card__button ${isLiked ? 'movies-card__button_liked' : ''} 
        ${shownInSavedMoviesList ? 'movies-card__button_saved' : ''}`}
      >
        {!isLiked && <p className="movies-card__button-text">Сохранить</p>}
        {isLiked && !shownInSavedMoviesList && (
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
    </section>
  );
}
export default MoviesCard;
