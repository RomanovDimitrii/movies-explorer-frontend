import React from 'react';

import './Promo.css';
import earthImage from '../../images/earth_picture.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__section">
        <div className="promo__text-block">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
          </h1>
          <h2 className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h2>
        </div>
        <img className="promo__image" src={earthImage} alt="Изображение планеты Земля" />
      </div>
      <a className="promo__button" href="#about">
        <span className="promo__button-text">Узнать больше</span>
      </a>
    </section>
  );
}

export default Promo;
