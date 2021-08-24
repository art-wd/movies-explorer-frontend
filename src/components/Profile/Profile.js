import React from 'react';
import Error from '../Error/Error';
import './Profile.css';

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Артём!</h1>
      <form className="profile__form">
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
          />
          <span className="profile__error">Здесь будет сообщение об ошибке валидации</span>
        </label>
        <label className="profile__container">
          <span className="profile__label">E-mail</span>
          <input
            className="profile__input"
            type="email"
            name="email"
            aria-label="E-mail"
            required
          />
          <span className="profile__error">Здесь будет сообщение об ошибке валидации</span>
        </label>

        <Error />

        <button className="profile__submit" type="submit">Редактировать</button>

        <button className="profile__logout"  type="button">Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;
