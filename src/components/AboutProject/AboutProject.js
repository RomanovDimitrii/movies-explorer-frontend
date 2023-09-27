import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id="about">
      <h2 className="about__header">О проекте</h2>
      <div className="about__grid-section">
        <h3 className="about__grid-section-main-text">Дипломный проект включал 5 этапов</h3>
        <h3 className="about__grid-section-main-text about__grid-section-main-text_order-2">
          На выполнение диплома ушло 5 недель
        </h3>
        <h3 className="about__grid-section-subtext about__grid-section-subtext_order-3">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
          защититься.
        </h3>
        <h3 className="about__grid-section-subtext about__grid-section-subtext_order-1">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
          доработки.
        </h3>
      </div>
      <div className="about__grid-section about__grid-section_style_graph">
        <p className="about__grid-section-graph-text about__grid-section-graph-text_style_geen-black ">
          1 неделя
        </p>
        <p className="about__grid-section-graph-text about__grid-section-graph-text_style_gray-white">
          4 недели
        </p>
        <p className="about__grid-section-graph-text ">Back-end</p>
        <p className="about__grid-section-graph-text ">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
