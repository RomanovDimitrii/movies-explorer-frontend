import React from 'react';

import Form from '../Form/Form';

function Login() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <main>
      <Form
        name="login"
        title="Рады видеть!"
        btnText="Войти"
        route="/signup"
        navText="Регистрация"
        questionText="Еще не зарегистрированы?"
      />
    </main>
  );
}

export default Login;
