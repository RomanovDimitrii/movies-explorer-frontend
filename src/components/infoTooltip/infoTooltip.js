import React from 'react';
import closeButtonImage from '../../images/ClosePopupImage.svg';
import successImage from '../../images/success.svg';
import errorImage from '../../images/auth_error.png';
import './infoTooltip.css';

function InfoTooltip({ isInfoPopupOpen, isProcessSuccessful, onCloseInfoPopup, infoPopupMessage }) {
  return (
    <div className={`popup ${isInfoPopupOpen ? 'popup_opened' : ''}`}>
      <div className="popup__infotooltip-container">
        <button className="popup__close-button" type="button" onClick={onCloseInfoPopup}>
          <img className="popup__close-button-image" src={closeButtonImage} alt="закрыть окно" />
        </button>
        <img
          className="popup__infotooltip-image"
          src={isProcessSuccessful ? successImage : errorImage}
          alt={isProcessSuccessful ? 'Успешная регистрация' : 'Ошибка при регистрации'}
        />
        <h2 className="popup__infotooltip-message">{infoPopupMessage}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
