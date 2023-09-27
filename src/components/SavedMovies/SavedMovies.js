import React from 'react';

import NavTab from '../NavTab/NavTab';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isMenuOpen, onCloseMenu, onMenu }) {
  return (
    <>
      <NavTab
        schemeBlue={false}
        isLoggedIn={true}
        isMenuOpen={isMenuOpen}
        onMenu={onMenu}
        onCloseMenu={onCloseMenu}
      />
      <main>
        <SearchForm />
        <MoviesCardList savedMoviesList={true} />
      </main>

      <Footer />
    </>
  );
}

export default SavedMovies;
