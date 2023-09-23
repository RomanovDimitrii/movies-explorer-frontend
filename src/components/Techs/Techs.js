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
      <div className="techs__thech-block">
        <h3 className="techs__thech-text">HTML</h3>
        <h3 className="techs__thech-text">CSS</h3>
        <h3 className="techs__thech-text">JS</h3>
        <h3 className="techs__thech-text">React</h3>
        <h3 className="techs__thech-text">Git</h3>
        <h3 className="techs__thech-text">Express.js</h3>
        <h3 className="techs__thech-text">mongoDB</h3>
      </div>
    </section>
  );
}

export default Techs;
