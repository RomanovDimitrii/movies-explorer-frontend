import { useNavigate } from 'react-router-dom';

import './Form.css';
import logo from '../../images/logo.png';

import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../infoTooltip/infoTooltip';
import { useFormWithValidation } from '../utils/validation.js';

function Form({
  title,
  name,
  btnText,
  route,
  questionText,
  navText,
  isInfoPopupOpen,
  infoPopupMessage,
  onCloseInfoPopup,
  handleRegister,
  handleAuth,
  isProcessSuccessful,
  isPreloaderShown
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const navigate = useNavigate();

  function handleRouteBtn() {
    navigate(route, { replace: true });
  }

  function handleMainBtn() {
    navigate('/', { replace: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //  setInputValues(values);
    if (btnText === 'Войти' && values.email) {
      handleAuth(values);
    }
    if (btnText === 'Зарегистрироваться') {
      handleRegister(values);
    }
  }
  return (
    <>
      <Preloader isPreloaderShown={isPreloaderShown} />
      <InfoTooltip
        isInfoPopupOpen={isInfoPopupOpen}
        onCloseInfoPopup={onCloseInfoPopup}
        infoPopupMessage={infoPopupMessage}
        isProcessSuccessful={isProcessSuccessful}
      />
      <section className="form">
        <img className="form__logo" src={logo} alt="Логотип" onClick={handleMainBtn} />
        <h1 className="form__title">{title}</h1>
        <form className="form__container" name={name} onSubmit={handleSubmit} formNoValidate>
          {name === 'register' && (
            <div className="form__input-block">
              <label htmlFor="name" className="form__input-title">
                Имя
              </label>
              <input
                className={`form__input ${errors.name ? 'form__input_red-text' : ''}`}
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="30"
                formNoValidate
                onChange={handleChange}
              />
              <span className="form__input-error">{errors.name}</span>
            </div>
          )}

          <div className="form__input-block">
            <label htmlFor="email" className="form__input-title">
              E-mail
            </label>
            <input
              className={`form__input ${errors.email ? 'form__input_red-text' : ''}`}
              type="email"
              name="email"
              id="email"
              placeholder="Е-mail"
              required
              minLength="2"
              maxLength="30"
              formNoValidate
              onChange={handleChange}
              //value="ddd@mail.ru"
            />
            <span className="form__input-error">{errors.email}</span>
          </div>

          <div className="form__input-block">
            <label htmlFor="password" className="form__input-title">
              Пароль
            </label>
            <input
              className={`form__input ${errors.password ? 'form__input_red-text' : ''}`}
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              required
              minLength="8"
              maxLength="30"
              onChange={handleChange}

              //value=""
            />
            <span className="form__input-error">{errors.password}</span>
          </div>

          {name === 'login' && <div className="form__emty-block"></div>}

          <button
            className={`form__submit-button ${
              !(isValid && !errors.email) ? 'form__submit-button_disabled' : ''
            }`}
            type="submit"
            disabled={!(isValid && !errors.email)}
          >
            {btnText}
          </button>
        </form>
        <div className="form__nav-block">
          <span className="form__nav-text">{questionText}</span>
          <span className="form__nav-text form__nav-text_blue" onClick={handleRouteBtn}>
            {navText}
          </span>
        </div>
      </section>
    </>
  );
}
export default Form;
