import React from 'react';

import checkBox from '../../images/filter-checkbox.png';
import './FilterCheckbox.css';

function Filtercheckbox() {
  return (
    <section className="filter-checkbox">
      <img className="filter-checkbox__image" src={checkBox} alt="Чекбокс" />
      <p className="filter-checkbox__text">Короткометражки</p>
    </section>
  );
}

export default Filtercheckbox;
