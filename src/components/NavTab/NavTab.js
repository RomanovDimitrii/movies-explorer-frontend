import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';
import accIcon from '../../images/icon-accaunt.png';
import burger from '../../images/burger.svg';
import './NavTab.css';
import Menu from '../Menu/Menu';

function NavTab({ schemeBlue, isLoggedIn, isMenuOpen, onMenu, onCloseMenu }) {
  const navigate = useNavigate();

  function handleAccountButton() {
    navigate('/profile', { replace: true });
  }

  function handleRegisterButton() {
    navigate('/register', { replace: true });
  }

  function handleLoginButton() {
    navigate('/login', { replace: true });
  }

  function handleMoviesButton() {
    navigate('/movies', { replace: true });
  }

  function handleSavedMoviesButton() {
    navigate('/saved-movies', { replace: true });
  }

  return (
    <>
      <section className={`navigation ${schemeBlue ? 'navigation_style_blue' : ''}`}>
        <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} />
        <img className="navigation__logo" src={logo} alt="Логотип" />
        <div className="navigation__nav-block">
          {!isLoggedIn && (
            <p className="navigation__text" onClick={handleRegisterButton}>
              Регистрация
            </p>
          )}
          {!isLoggedIn && (
            <button className="navigation__button" type="button">
              <p className="navigation-button-text" onClick={handleLoginButton}>
                Войти
              </p>
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
            <button
              className="navigation__button-account"
              type="button"
              onClick={handleAccountButton}
            >
              <p className="navigation__text-menu">Аккаунт</p>
              <div className="navigation__acc-image">
                <img className="navigation__acc-icon" src={accIcon} alt="Иконка профиля" />
              </div>
            </button>
          )}
          {isLoggedIn && (
            <img className="navigation__burger" src={burger} alt="Меню" onClick={onMenu} />
          )}
        </div>
      </section>
    </>
  );
}

export default NavTab;
