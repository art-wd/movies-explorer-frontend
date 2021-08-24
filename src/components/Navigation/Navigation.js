import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './Navigation.css';
import { useRouteMatch } from 'react-router-dom';

function Navigation() {
  const isRootPath = useRouteMatch("/").isExact;

  const [isOpened, setIsOpened] = React.useState(false)

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className="navigation">
      <div className={`navigation__overlay${isOpened ? " navigation__overlay_opened" : ""}`} onClick={handleClick}/>

      {!isRootPath &&
        <button className={`navigation__button${isOpened ? " navigation__button_closing" : ""}`} type="button" onClick={handleClick} />
      }

      <Switch>
        <Route path="/" exact>
          <div className="navigation__auth-container">
            <Link className="navigation__auth-link" to="/signup">Регистрация</Link>
            <Link className="navigation__auth-link" to="/signin">Войти</Link>
          </div>
        </Route>

        <Route path={["/profile", "/movies", "/saved-movies"]} exact>
          <div className={`navigation__logged-container${isOpened ? " navigation__logged-container_opened" : ""}`}>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/" exact onClick={handleClick}>Главная</NavLink>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/movies" exact onClick={handleClick}>Фильмы</NavLink>
            <NavLink className="navigation__logged-link" activeClassName="navigation__logged-link_active" to="/saved-movies" exact onClick={handleClick}>Сохранённые фильмы</NavLink>
            <Link className="navigation__logged-link" to="/profile" onClick={handleClick}>Аккаунт</Link>
          </div>
        </Route>
      </Switch>
    </nav>
  );
}

export default Navigation;
