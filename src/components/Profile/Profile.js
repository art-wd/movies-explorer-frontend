import React from 'react';
import Message from '../Message/Message';
import './Profile.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({ handleUpdateUser, handleLogout, message }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, setIsValid, handleChange } = useFormWithValidation();

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [currentUser, values, setIsValid]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleUpdateUser({ ...values });
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{ `Привет, ${ currentUser.name }!` }</h1>
      <form className="profile__form" onSubmit={ handleSubmit }>
        <label className="profile__container">
          <span className="profile__label">Имя</span>
          <input
            className="profile__input"
            type="text"
            name="name"
            aria-label="Имя"
            required
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё -]+$"
            value={ values.name || '' }
            onChange={ handleChange }
          />
          <span className="profile__error">
            { errors.name
              ? 'Минимум 2 символа. Может содержать только латиницу, кириллицу, пробел или дефис'
              : '' }
          </span>
        </label>
        <label className="profile__container">
          <span className="profile__label">E-mail</span>
          <input
            className="profile__input"
            type="email"
            name="email"
            aria-label="E-mail"
            required
            pattern="^[A-Za-z]+([\.-]?\w+)*@[A-Za-z]+([\.-]?\w+)*\.[A-Za-z]{2,}$"
            value={ values.email || '' }
            onChange={ handleChange }
          />
          <span className="profile__error">
            { errors.email
              ? 'Должен соответствовать шаблону example@example.com'
              : '' }
          </span>
        </label>

        <Message message={ message } />

        <button className={`profile__submit${ !isValid ? " profile__submit_disabled" : "" }`} type="submit" disabled={ !isValid }>Редактировать</button>

        <button className="profile__logout" type="button" onClick={ handleLogout }>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;
