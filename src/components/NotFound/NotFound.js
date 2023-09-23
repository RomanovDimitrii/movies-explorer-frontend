import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  function handleBtn() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <h3 className="not-found__subtitle">Страница не найдена</h3>
      <button className="not-found__btn" onClick={handleBtn}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
