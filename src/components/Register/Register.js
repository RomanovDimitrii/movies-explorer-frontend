import React from 'react';

import Form from '../Form/Form';

function Register() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <Form
        name="register"
        title="Добро пожаловать!"
        btnText="Зарегистрироваться"
        route="/login"
        navText="Войти"
        questionText="Уже зарегистрированы?"
      />
    </>
  );
}

export default Register;
