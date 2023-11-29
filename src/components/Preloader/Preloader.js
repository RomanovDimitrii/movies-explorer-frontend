import React from 'react';
import './Preloader.css';

const Preloader = ({ isPreloaderShown }) => {
  return (
    isPreloaderShown && (
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    )
  );
};

export default Preloader;
