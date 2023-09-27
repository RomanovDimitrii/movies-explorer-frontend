import React from 'react';

import './Portfolio.css';
import arrow from '../../images/portfolio_arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            class="portfolio__link"
            href="https://github.com/RomanovDimitrii/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__element">Статичный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li>
          <a
            class="portfolio__link"
            href="https://github.com/RomanovDimitrii/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__element">Адаптивный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li>
          <a
            class="portfolio__link portfolio__link_no-border"
            href="https://github.com/RomanovDimitrii/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__element">Одностраничное приложение</h3>
            <img className="portfolio__arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
