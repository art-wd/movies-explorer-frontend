import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
  <div className="app">
    <Route path={["/", "/profile", "/movies", "/saved-movies"]} exact>
      <Header />
    </Route>

    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/signup" exact>
        <Register />
      </Route>
      <Route path="/signin" exact>
        <Login />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/saved-movies" exact>
        <SavedMovies />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>

    <Route path={["/", "/movies", "/saved-movies"]} exact>
        <Footer />
    </Route>
  </div>
  );
}

export default App;
