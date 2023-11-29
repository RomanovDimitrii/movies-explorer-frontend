import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  function handleBtn() {
    navigate(-4);
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__btn" onClick={handleBtn} type="button">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
