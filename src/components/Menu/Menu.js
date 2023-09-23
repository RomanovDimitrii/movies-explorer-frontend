//реализация подчеркивания: делаем стейт - активное окно, если из апп переход на какую-то из них, то присваиваем ему activeRoute(falms). Потом класс добавляем, если стейт === films

import React from 'react';
import { useNavigate } from 'react-router-dom';

import closeButtonImage from '../../images/ClosePopupImage.svg';
import accIcon from '../../images/icon-accaunt.png';
import './Menu.css';

function Menu({ isMenuOpen, onCloseMenu }) {
  const navigate = useNavigate();

  function handleAccountButton() {
    navigate('/profile', { replace: true });
  }

  function handleMainButton() {
    navigate('/', { replace: true });
  }

  function handleMoviesButton() {
    navigate('/movies', { replace: true });
  }

  function handleSavedMoviesButton() {
    navigate('/saved-movies', { replace: true });
  }

  return (
    <div className={`menu  ${isMenuOpen ? 'menu_opened' : ''}`}>
      <div className="menu__container">
        <button className="menu__close-button" type="button" onClick={onCloseMenu}>
          <img className="menu__close-button-image" src={closeButtonImage} alt="закрыть меню" />
        </button>
        <ul className="menu__nav-block">
          <li className="menu__link" onClick={handleMainButton}>
            Главная
          </li>
          <li className="menu__link menu__link_underlined" onClick={handleMoviesButton}>
            Фильмы
          </li>
          <li className="menu__link" onClick={handleSavedMoviesButton}>
            Сохраненные фильмы
          </li>
        </ul>
        <button className="menu__button-account" type="button" onClick={handleAccountButton}>
          <p className="menu__text-menu">Аккаунт</p>
          <div className="menu__acc-image">
            <img className="menu__acc-icon" src={accIcon} alt="Иконка профиля" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Menu;
