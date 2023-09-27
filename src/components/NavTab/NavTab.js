import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';
import accIcon from '../../images/icon-accaunt.svg';
import burger from '../../images/burger.svg';
import './NavTab.css';
import Menu from '../Menu/Menu';

function NavTab({ schemeBlue, isLoggedIn, isMenuOpen, onMenu, onCloseMenu }) {
  const navigate = useNavigate();

  function handleAccountButton() {
    navigate('/profile', { replace: true });
  }

  function handleMainButton() {
    navigate('/', { replace: true });
  }

  function handleRegisterButton() {
    navigate('/signup', { replace: true });
  }

  function handleLoginButton() {
    navigate('/signin', { replace: true });
  }

  function handleMoviesButton() {
    navigate('/movies', { replace: true });
  }

  function handleSavedMoviesButton() {
    navigate('/saved-movies', { replace: true });
  }

  return (
    <>
      <header className={`navigation ${schemeBlue ? 'navigation_style_blue' : ''}`}>
        <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} />
        <img className="navigation__logo" src={logo} alt="Логотип" onClick={handleMainButton} />
        <nav className="navigation__nav-block">
          {!isLoggedIn && (
            <p className="navigation__text" onClick={handleRegisterButton}>
              Регистрация
            </p>
          )}
          {!isLoggedIn && (
            <button className="navigation__button" type="button">
              <span className="navigation-button-text" onClick={handleLoginButton}>
                Войти
              </span>
            </button>
          )}
          {isLoggedIn && (
            <p className="navigation__text-menu" onClick={handleMoviesButton}>
              Фильмы
            </p>
          )}
          {isLoggedIn && (
            <p
              className="navigation__text-menu navigation__text-menu_saved-films"
              onClick={handleSavedMoviesButton}
            >
              Сохраненные фильмы
            </p>
          )}
          {isLoggedIn && (
            <div className="navigation__button-account" onClick={handleAccountButton}>
              <p className="navigation__text-menu">Аккаунт</p>
              <div className="navigation__acc-image">
                <img className="navigation__acc-icon" src={accIcon} alt="Иконка профиля" />
              </div>
            </div>
          )}
          {isLoggedIn && (
            <button className="navigation__burger" type="button">
              <img className="navigation__burger-image" src={burger} alt="Меню" onClick={onMenu} />
            </button>
          )}
        </nav>
      </header>
    </>
  );
}

export default NavTab;
