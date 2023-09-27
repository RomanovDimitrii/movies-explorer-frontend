import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavTab from '../NavTab/NavTab';
import './Profile.css';

function Profile({ isMenuOpen, onCloseMenu, onMenu }) {
  const navigate = useNavigate();
  function handleLogoutBtn() {
    navigate('/', { replace: true });
  }
  function handleSubmit() {}

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
        <section className="profile">
          <h1 className="profile__title">Привет, Дмитрий!</h1>
          <form className="profile__container" name="profile" onSubmit={handleSubmit}>
            <div className="profile__input-block">
              <span className="profile__input-title">Имя</span>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="30"
                // onChange={handleChangePlaceInput}
                //value="Дмитрий"
                defaultValue="Дмитрий"
              />
            </div>
            <div className="profile__input-block">
              <span className="profile__input-title">E-mail</span>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                placeholder="Е-mail"
                required
                minLength="2"
                maxLength="30"
                // onChange={handleChangePlaceInput}
                //value=""
                defaultValue="ddd@mail.ru"
              />
            </div>
            <span className={`form__input-error form__input-error_type_profile`}>
              Сообщение об ошибке
            </span>
            <button className="profile__submit-button" type="submit">
              Редактировать
            </button>
          </form>
          <div className="profile__nav-block">
            <span className="profile__nav-text" onClick={handleLogoutBtn}>
              Выйти из аккаунта
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
