import React from 'react';

import Form from '../Form/Form';

function Register() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <main>
      <Form
        name="register"
        title="Добро пожаловать!"
        btnText="Зарегистрироваться"
        route="/signin"
        navText="Войти"
        questionText="Уже зарегистрированы?"
      />
    </main>
  );
}

export default Register;
