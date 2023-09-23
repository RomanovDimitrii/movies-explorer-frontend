import React from 'react';

import Form from '../Form/Form';

function Login() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <Form
        name="login"
        title="Рады видеть!"
        btnText="Войти"
        route="/register"
        navText="Регистрация"
        questionText="Еще не зарегистрированы?"
      />
    </>
  );
}

export default Login;
