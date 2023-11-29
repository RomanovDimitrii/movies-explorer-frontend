import React, { useState } from 'react';
import { useResize } from '../utils/useResize';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  moviesList,
  moviesListError,
  savedMoviesPage,
  onSaveMovie,
  onDeleteMovie
}) {
  const { isScreenMd, isScreenLg } = useResize();

  const [moreButtonClicked, setMoreButtonClicked] = useState(0);

  React.useEffect(() => {
    setMoreButtonClicked(0);
  }, [moviesList, isScreenMd, isScreenLg]);

  let showMoreButton;
  let amountOfShownMovies;
  let shownMoviesList = [];

  function handleMoreButtonClick() {
    setMoreButtonClicked(moreButtonClicked + 1);
  }

  if (!moviesList) {
    return (
      <section className="movies-card-list">
        <span className="movies-card-list__error">{moviesListError}</span>
      </section>
    );
  } else {
    if (isScreenLg) {
      if (moviesList.length > 12) {
        showMoreButton = true;
        amountOfShownMovies = 12 + moreButtonClicked * 3;
        shownMoviesList = moviesList.slice(0, amountOfShownMovies);

        if (amountOfShownMovies >= moviesList.length) {
          showMoreButton = false;
        }
      } else {
        shownMoviesList = moviesList;
        showMoreButton = false;
      }
    }

    if (!isScreenLg && isScreenMd) {
      if (moviesList.length > 8) {
        showMoreButton = true;
        amountOfShownMovies = 8 + moreButtonClicked * 2;
        shownMoviesList = moviesList.slice(0, amountOfShownMovies);

        if (amountOfShownMovies >= moviesList.length) {
          showMoreButton = false;
        }
      } else {
        shownMoviesList = moviesList;
        showMoreButton = false;
      }
    }

    if (!isScreenMd) {
      if (moviesList.length > 5) {
        showMoreButton = true;
        amountOfShownMovies = 5 + moreButtonClicked * 2;

        shownMoviesList = moviesList.slice(0, amountOfShownMovies);
        if (amountOfShownMovies >= moviesList.length) {
          showMoreButton = false;
        }
      } else {
        shownMoviesList = moviesList;
        showMoreButton = false;
      }
    }
  }

  return (
    <section className="movies-card-list">
      <span className="movies-card-list__error">{moviesListError}</span>
      <ul className="movies-card-list__grid">
        {shownMoviesList &&
          shownMoviesList.map(movie => {
            return (
              <MoviesCard
                key={movie.id}
                country={movie.country}
                created_at={movie.created_at}
                description={movie.description}
                director={movie.director}
                duration={movie.duration}
                id={movie.id}
                image={movie.image}
                nameEN={movie.nameEN}
                nameRU={movie.nameRU}
                trailerLink={movie.trailerLink}
                updated_at={movie.updated_at}
                year={movie.year}
                isLiked={movie.isLiked}
                _id={movie._id}
                shownInSavedMoviesList={savedMoviesPage ? true : false}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            );
          })}
      </ul>
      {showMoreButton && (
        <button className="movies-card-list__button" type="button" onClick={handleMoreButtonClick}>
          <span className="movies-card-list__button-text">Ещё</span>
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
