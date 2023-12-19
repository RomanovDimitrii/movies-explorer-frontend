import React, { useState } from 'react';

//import checkBox from '../../images/filter-checkbox.png';
import './FilterCheckbox.css';

function Filtercheckbox({ isShortMoviesCheckboxOn, savedMoviesPage }) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  function handleChangeShortMoviesCheckBox() {
    setCheckBoxValue(!checkBoxValue);
    isShortMoviesCheckboxOn(!checkBoxValue);
    localStorage.setItem('checkBoxValue', JSON.stringify(!checkBoxValue));
  }

  React.useEffect(() => {
    if (!savedMoviesPage) {
      if (JSON.parse(localStorage.getItem('checkBoxValue'))) {
        setCheckBoxValue(true);
        isShortMoviesCheckboxOn(true);
      } else {
        setCheckBoxValue(false);
        isShortMoviesCheckboxOn(false);
      }
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="filter-checkbox__block">
      <label>
        <input
          type="checkbox"
          className="filter-checkbox__input"
          value={checkBoxValue}
          onChange={handleChangeShortMoviesCheckBox}
          checked={checkBoxValue}
        />
        <div className="filter-checkbox__switch"></div>
      </label>
      <h3 className="filter-checkbox__text">Короткометражки</h3>
      {/* <h3 className="filter-checkbox__text">{`чекбокс: ${checkBoxValue}`}</h3> */}
    </div>
  );
}

export default Filtercheckbox;
