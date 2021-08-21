import React from 'react';
import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';

function Register() {
  return (
    <main className="register">
      <Form title="Добро пожаловать!">
        <Input
          label="Имя"
          name="name"
          type="text"
          isRequired={true}
          minLength="2"
          maxLength="30"
        />
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
          buttonTitle="Зарегистрироваться"
          buttonSubtitle="Уже зарегистрированы?"
          linkTitle="Войти"
          linkPath="/signin"
        />
      </Form>
    </main>
  );
}

export default Register;
