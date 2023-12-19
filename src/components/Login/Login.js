import React from 'react';

import Form from '../Form/Form';

function Login({
  isLoggedIn,
  isInfoPopupOpen,
  infoPopupMessage,
  onCloseInfoPopup,
  handleAuth,
  isProcessSuccessful,
  isPreloaderShown
}) {
  return (
    <main>
      <Form
        name="login"
        title="Рады видеть!"
        btnText="Войти"
        route="/signup"
        navText="Регистрация"
        questionText="Еще не зарегистрированы?"
        isLoggedIn={isLoggedIn}
        isInfoPopupOpen={isInfoPopupOpen}
        infoPopupMessage={infoPopupMessage}
        onCloseInfoPopup={onCloseInfoPopup}
        handleAuth={handleAuth}
        isProcessSuccessful={isProcessSuccessful}
        isPreloaderShown={isPreloaderShown}
      />
    </main>
  );
}

export default Login;
