import React from 'react';

import './AboutMe.css';
import studentPhoto from '../../images/myphoto.png';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__info">
          <h3 className="about-me__name">Дмитрий</h3>
          <p className="about-me__occupation">Фронтент-разработчик</p>
          <p className="about-me__about">
            Я&nbsp;закончил факультет электроники СПБГЭТУ (ЛЭТИ). Работаю начальником
            конструкторского отдела, недавно начал кодить. Живу с&nbsp;девушкой и&nbsp;котом.
            В&nbsp;свободное от&nbsp;работы время люблю зависнуть за&nbsp;просмотром сериала,
            фильма, поиграть в&nbsp;ps&nbsp;или приготовить что-то вкусное. Обожаю путешествовать,
            петь в&nbsp;караоке, играть в&nbsp;квизы.
          </p>

          <a class="about-me__link" href="https://github.com/RomanovDimitrii">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="фото Дмитрия" />
      </div>
    </section>
  );
}

export default AboutMe;
