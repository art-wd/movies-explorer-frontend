import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <button className="page-not-found__back" type="button" onClick={ () => history.goBack() }>Назад</button>
    </main>
  );
}

export default PageNotFound;
