import React from 'react';

import movie1 from '../../images/pic1.png';
import movie2 from '../../images/pic2.png';
import movie3 from '../../images/pic3.png';
import movie4 from '../../images/pic4.png';
import movie5 from '../../images/pic5.png';
import movie6 from '../../images/pic6.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ savedMoviesList }) {
  if (savedMoviesList) {
    return (
      <section className="movies-card-list">
        <ul className="movies-card-list__grid">
          <li>
            <MoviesCard
              movie={movie1}
              isLiked={true}
              shownInSavedMoviesList={true}
              title="В погоне за Бенкси"
              duration="0ч 42м"
            />
          </li>

          <li>
            <MoviesCard
              movie={movie2}
              isLiked={true}
              shownInSavedMoviesList={true}
              title="В погоне за Бенкси"
              duration="0ч 42м"
            />
          </li>

          <li>
            <MoviesCard
              movie={movie3}
              isLiked={true}
              shownInSavedMoviesList={true}
              title="В погоне за Бенкси"
              duration="0ч 42м"
            />
          </li>
        </ul>
      </section>
    );
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__grid">
        <li>
          <MoviesCard movie={movie1} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie2} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie3} isLiked={false} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie4} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie5} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie6} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie1} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie2} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie3} isLiked={false} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie4} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie5} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>

        <li>
          <MoviesCard movie={movie6} isLiked={true} title="В погоне за Бенкси" duration="0ч 42м" />
        </li>
      </ul>
      <button className="movies-card-list__button" type="button">
        <span className="movies-card-list__button-text">Ещё</span>
      </button>
    </section>
  );
}
export default MoviesCardList;
