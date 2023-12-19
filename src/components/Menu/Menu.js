//реализация подчеркивания: делаем стейт - активное окно, если из апп переход на какую-то из них, то присваиваем ему activeRoute(falms). Потом класс добавляем, если стейт === films

import React from 'react';
import { useNavigate } from 'react-router-dom';

import closeButtonImage from '../../images/ClosePopupImage.svg';
import accIcon from '../../images/icon-accaunt.svg';
import './Menu.css';

function Menu({ isMenuOpen, onCloseMenu, currentPage }) {
  const navigate = useNavigate();

  function handleAccountButton() {
    navigate('/profile', { replace: true });
    onCloseMenu();
  }

  function handleMainButton() {
    navigate('/', { replace: true });
    onCloseMenu();
  }

  function handleMoviesButton() {
    navigate('/movies', { replace: true });
    onCloseMenu();
  }

  function handleSavedMoviesButton() {
    navigate('/saved-movies', { replace: true });
    onCloseMenu();
  }

  return (
    <div className={`menu  ${isMenuOpen ? 'menu_opened' : ''}`}>
      <div className="menu__container">
        <button className="menu__close-button" type="button" onClick={onCloseMenu}>
          <img className="menu__close-button-image" src={closeButtonImage} alt="закрыть меню" />
        </button>
        <ul className="menu__nav-block">
          <li
            className={`menu__link ${currentPage === 'main' ? 'menu__link_underlined' : ''}`}
            onClick={handleMainButton}
          >
            Главная
          </li>
          <li
            className={`menu__link ${currentPage === 'movies' ? 'menu__link_underlined' : ''}`}
            onClick={handleMoviesButton}
          >
            Фильмы
          </li>
          <li
            className={`menu__link ${currentPage === 'savedMovies' ? 'menu__link_underlined' : ''}`}
            onClick={handleSavedMoviesButton}
          >
            Сохраненные фильмы
          </li>
        </ul>
        <button className="menu__button-account" type="button" onClick={handleAccountButton}>
          <span className="menu__text-menu">Аккаунт</span>
          <div className="menu__acc-image">
            <img className="menu__acc-icon" src={accIcon} alt="Иконка профиля" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Menu;
