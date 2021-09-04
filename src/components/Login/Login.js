import React from 'react';
import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Message from '../Message/Message';
import Button from '../Button/Button';

import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ handleLogin, message }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleLogin({ ...values });
  };

  const inputsData = [
    {
      label: "E-mail",
      name: "email",
      type: "email",
      isRequired: true,
      pattern: '^[A-Za-z]+([\\.-]?\\w+)*@[A-Za-z]+([\\.-]?\\w+)*\\.[A-Za-z]{2,}$',
      errorMessage: "Должен соответствовать шаблону example@example.com",
    },
    {
      label: "Пароль",
      name: "password",
      type: "password",
      isRequired: true,
      minLength: "8",
      pattern: "^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,}$",
      errorMessage: "Минимум 8 символов. Может содержать только латиницу, числа и спецсимволы",
    }
  ];

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        onSubmit={ handleSubmit }
      >
        {inputsData.map(( input, i) => (
          <Input
            key={ i }
            label={ input.label }
            name={ input.name }
            type={ input.type }
            isRequired={ input.isRequired }
            pattern={ input.pattern }
            minLength={ input.minLength }
            maxLength={ input.maxLength }
            value={ values[input.name] }
            error={ errors[input.name] }
            errorMessage={ input.errorMessage }
            onChange={ handleChange }
          />)
        )}

        <Message message={ message } />

        <Button
          buttonTitle="Войти"
          buttonSubtitle="Ещё не зарегистрированы?"
          linkTitle="Регистрация"
          linkPath="/signup"
          isDisabled={ !isValid }
        />
      </Form>
    </main>
  );
}

export default Login;
