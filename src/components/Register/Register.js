import React from 'react';

import Form from '../Form/Form';

function Register({
  isInfoPopupOpen,
  onCloseInfoPopup,
  infoPopupMessage,
  handleRegister,
  isProcessSuccessful,
  isPreloaderShown
}) {
  return (
    <main>
      <Form
        name="register"
        title="Добро пожаловать!"
        btnText="Зарегистрироваться"
        route="/signin"
        navText="Войти"
        questionText="Уже зарегистрированы?"
        isInfoPopupOpen={isInfoPopupOpen}
        infoPopupMessage={infoPopupMessage}
        onCloseInfoPopup={onCloseInfoPopup}
        handleRegister={handleRegister}
        isProcessSuccessful={isProcessSuccessful}
        isPreloaderShown={isPreloaderShown}
      />
    </main>
  );
}

export default Register;
