import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoggedIn }) {
  const [isOpened, setIsOpened] = React.useState(false)

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className="navigation">
      <div className={`navigation__overlay${isOpened ? " navigation__overlay_opened" : ""}`} onClick={handleClick}/>

      {isLoggedIn ? (
        <>
          <button className={`navigation__button${isOpened ? " navigation__button_closing" : ""}`} type="button" onClick={handleClick} />
          <div className={`navigation__logged-container${isOpened ? " navigation__logged-container_opened" : ""}`}>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/" exact onClick={handleClick}>Главная</NavLink>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/movies" exact onClick={handleClick}>Фильмы</NavLink>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/saved-movies" exact onClick={handleClick}>Сохранённые фильмы</NavLink>
            <NavLink className="navigation__logged-link" to="/profile" exact onClick={handleClick}>Аккаунт</NavLink>
          </div>
        </>
      ) : (
        <div className="navigation__auth-container">
          <Link className="navigation__auth-link" to="/signup">Регистрация</Link>
          <Link className="navigation__auth-link" to="/signin">Войти</Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
