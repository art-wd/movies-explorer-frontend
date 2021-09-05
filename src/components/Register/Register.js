import React from 'react';
import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Message from '../Message/Message';
import Button from '../Button/Button';

import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({ handleRegister, message }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleRegister({ ...values });
  };

  const inputsData = [
    {
      label: "Имя",
      name: "name",
      type: "text",
      isRequired: true,
      minLength: "2",
      maxLength: "30",
      pattern: "^[A-Za-zА-Яа-яЁё -]+$",
      errorMessage: "Минимум 2 символа. Может содержать только латиницу, кириллицу, пробел или дефис",
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      isRequired: true,
      pattern: "^[A-Za-z]+([\\.-]?\\w+)*@[A-Za-z]+([\\.-]?\\w+)*\\.[A-Za-z]{2,}$",
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
    <main className="register">
      <Form
        title="Добро пожаловать!"
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
          buttonTitle="Зарегистрироваться"
          buttonSubtitle="Уже зарегистрированы?"
          linkTitle="Войти"
          linkPath="/signin"
          isDisabled={ !isValid }
        />
      </Form>
    </main>
  );
}

export default Register;
