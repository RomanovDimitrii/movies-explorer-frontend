import React, { useState } from 'react';

import NavTab from '../NavTab/NavTab';
import './Profile.css';
import { useFormWithValidation } from '../utils/validation.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../infoTooltip/infoTooltip';

function Profile({
  isMenuOpen,
  onCloseMenu,
  onMenu,
  onEditProfile,
  profileErrors,
  isPreloaderShown,
  onLogout,
  isInfoPopupOpen,
  onCloseInfoPopup,
  infoPopupMessage,
  isProcessSuccessful
}) {
  const [inputValues, setInputValues] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  //  const [profileErrors, setProfileErrors] = useState('');

  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (!isValid) {
      setIsButtonDisabled(true);
    } // валидация прошла
    else if (currentUser.name === values.name || values.name === undefined) {
      if (currentUser.email === values.email || values.email === undefined) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    } else {
      setIsButtonDisabled(false);
    }
  }, [values.name, values.email, currentUser.name, currentUser.email, isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    setInputValues(values);
    const name = values.name || currentUser.name;
    const email = values.email || currentUser.email;
    onEditProfile(name, email);
    setIsButtonDisabled(true);
  }

  function handleLogoutBtn() {
    onLogout();
  }

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
          <h1 className="profile__title">Привет, {inputValues.name || currentUser.name}!</h1>
          <Preloader isPreloaderShown={isPreloaderShown} />
          <InfoTooltip
            isInfoPopupOpen={isInfoPopupOpen}
            onCloseInfoPopup={onCloseInfoPopup}
            infoPopupMessage={infoPopupMessage}
            isProcessSuccessful={isProcessSuccessful}
          />
          <form className="profile__container" name="profile" onSubmit={handleSubmit}>
            <div className="profile__input-block">
              <span className="profile__input-title">Имя</span>
              <input
                className={`profile__input ${errors.name ? 'profile__input_red-text' : ''}`}
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                defaultValue={currentUser.name}
              />
            </div>
            <span className="profile__input-error">{errors.name}</span>
            <div className="profile__input-block">
              <span className="profile__input-title">E-mail</span>
              <input
                className={`profile__input ${errors.email ? 'profile__input_red-text' : ''}`}
                type="email"
                name="email"
                id="email"
                placeholder="Е-mail"
                required
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                //value=""
                defaultValue={currentUser.email}
              />
            </div>
            <span className="profile__input-error">{errors.email}</span>

            <span className={`form__input-error form__input-error_type_profile`}>
              {profileErrors}
            </span>

            <button
              className={`profile__submit-button ${
                isButtonDisabled ? 'profile__submit-button_disabled' : ''
              }`}
              type="submit"
              disabled={isButtonDisabled}
            >
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
