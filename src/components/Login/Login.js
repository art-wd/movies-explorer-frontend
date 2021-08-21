import React from 'react';
import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';

function Login() {
  return (
    <main className="login">
      <Form title="Рады видеть!">
        <Input
          label="E-mail"
          name="email"
          type="email"
          isRequired={true}
        />
        <Input
          label="Пароль"
          name="password"
          type="password"
          isRequired={true}
          minLength="8"
        />

        <Error />

        <Button
          buttonTitle="Войти"
          buttonSubtitle="Ещё не зарегистрированы?"
          linkTitle="Регистрация"
          linkPath="/signup"
        />
      </Form>
    </main>
  );
}

export default Login;
