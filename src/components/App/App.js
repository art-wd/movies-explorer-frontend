import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const [message, setMessage] = React.useState({
    text: '',
    isError: false,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await mainApi.getUser();
        setIsLoggedIn(true);
        setCurrentUser(data);
      } catch (err) {
        setIsLoggedIn(false);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const handleRegister = async ({ name, email, password }) => {
    try {
      await mainApi.register(name, email, password);
      setMessage({
        text: '',
        isError: false,
      });
      handleLogin({ email, password });
    } catch(err) {
      setMessage({
        text: err.message,
        isError: true,
      });
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      await mainApi.login(email, password);
      setMessage({
        text: '',
        isError: false,
      });
      setIsLoggedIn(true);
      history.push('/movies');
    } catch(err) {
      setMessage({
        text: err.message,
        isError: true,
      });
    }
  };

  const handleLogout = async () => {
    try {
      await mainApi.logout();
      setMessage({
        text: '',
        isError: false,
      });
      setIsLoggedIn(false);
      history.push('/');
    } catch(err) {
      setMessage({
        text: err.message,
        isError: true,
      });
    }
  };

  const handleUpdateUser = async ({ name, email }) => {
    try {
      const data = await mainApi.updateUser(name, email);
      setMessage({
        text: 'Данные пользователя успешно обновлены',
        isError: false,
      });
      setCurrentUser(data);
    } catch (err) {
      setMessage({
        text: err.message,
        isError: true,
      });
    }
  };

  const resetMessage = () => {
    setMessage({
      text: '',
      isError: false,
    });
  };

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="app" onClick={ resetMessage }>
        <Route path={["/", "/profile", "/movies", "/saved-movies"]} exact>
          <Header isLoggedIn={ isLoggedIn } />
        </Route>

        <Switch>

          {isLoading ? (
            <Preloader />
          ) : (
            <Route path="/" exact>
              <Main />
            </Route>
          )}

          <Route path="/signup" exact>
            <Register
              handleRegister={ handleRegister }
              message={ message }
            />
          </Route>

          <Route path="/signin" exact>
            <Login
              handleLogin={ handleLogin }
              message={ message }
            />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            component={ Movies }
            isLoggedIn={ isLoggedIn }
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={ SavedMovies }
            isLoggedIn={ isLoggedIn }
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={ Profile }
            isLoggedIn={ isLoggedIn }
            handleUpdateUser={ handleUpdateUser }
            handleLogout={ handleLogout }
            message={ message }
          />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Route path={["/", "/movies", "/saved-movies"]} exact>
            <Footer />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
