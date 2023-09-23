import React from 'react';

import './Portfolio.css';
import arrow from '../../images/portfolio_arrow.png';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <a class="portfolio__link" href="https://github.com/RomanovDimitrii/how-to-learn">
        <h3 className="portfolio__element">Статичный сайт</h3>
        <img className="portfolio__arrow" src={arrow} alt="стрелка" />
      </a>
      <a class="portfolio__link" href="https://github.com/RomanovDimitrii/russian-travel">
        <h3 className="portfolio__element">Адаптивный сайт</h3>
        <img className="portfolio__arrow" src={arrow} alt="стрелка" />
      </a>
      <a class="portfolio__link" href="https://github.com/RomanovDimitrii/react-mesto-api-full-gha">
        <h3 className="portfolio__element">Одностраничное приложение</h3>
        <img className="portfolio__arrow" src={arrow} alt="стрелка" />
      </a>
    </section>
  );
}

export default Portfolio;
