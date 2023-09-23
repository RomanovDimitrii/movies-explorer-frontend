import React from 'react';

import './Footer.css';

function Footer() {
  const date = new Date();
  return (
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <p className="footer__text footer__text_color_grey">&copy;{date.getFullYear()}</p>
        <div className="footer__block">
          <p className="footer__text">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
