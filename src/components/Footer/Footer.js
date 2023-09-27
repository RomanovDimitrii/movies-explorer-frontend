import React from 'react';

import './Footer.css';

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <h3 className="footer__text">&copy; {date.getFullYear()}</h3>
        <ul className="footer__block">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
