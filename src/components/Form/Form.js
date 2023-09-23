import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';
import logo from '../../images/logo.png';

function Form({ title, name, btnText, route, questionText, navText }) {
  const navigate = useNavigate();

  function handleRouteBtn() {
    navigate(route, { replace: true });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (btnText === 'Войти') {
      navigate('/movies', { replace: true });
    }
    if (btnText === 'Зарегистрироваться') {
      navigate('/login', { replace: true });
    }
  }
  return (
    <section className="form">
      <img className="form__logo" src={logo} alt="Логотип" />
      <h2 className="form__title">{title}</h2>
      <form className="form__container" name={name} onSubmit={handleSubmit} formNoValidate>
        {name === 'register' && (
          <div className="form__input-block">
            <span className="form__input-title">Имя</span>
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="30"
              formNoValidate
              // onChange={handleChangePlaceInput}
              //value="Дмитрий"
            />
          </div>
        )}

        <div className="form__input-block">
          <span className="form__input-title">E-mail</span>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            placeholder="Е-mail"
            required
            minLength="2"
            maxLength="30"
            formNoValidate
            // onChange={handleChangePlaceInput}
            //value="ddd@mail.ru"
          />
        </div>

        <div className="form__input-block">
          <span className="form__input-title">Пароль</span>
          <input
            className="form__input form__input_red-text"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
            minLength="2"
            maxLength="30"

            // onChange={handleChangePlaceInput}
            //value=""
          />
        </div>

        <span className={`form__input-error form__input-error_type_${name}`}>
          Сообщение об ошибке
        </span>

        {name === 'login' && <div className="form__emty-block"></div>}

        <button className="form__submit-button" type="submit">
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
  );
}
export default Form;
