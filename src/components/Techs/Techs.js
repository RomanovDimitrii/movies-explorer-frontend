import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <h3 className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </h3>
      <ul className="techs__thech-block">
        <li className="techs__thech-text">HTML</li>
        <li className="techs__thech-text">CSS</li>
        <li className="techs__thech-text">JS</li>
        <li className="techs__thech-text">React</li>
        <li className="techs__thech-text">Git</li>
        <li className="techs__thech-text">Express.js</li>
        <li className="techs__thech-text">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
