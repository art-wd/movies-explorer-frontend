import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { moviesFilter } from '../../utils/utils';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [savedMoviesFiltered, setSavedMoviesFiltered] = React.useState([]);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = React.useState('');

  const [isShortMovies, setIsShortMovies] = React.useState(JSON.parse(localStorage.getItem('isShortMovies')) || false);
  const [isShortSavedMovies, setIsShortSavedMovies] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const [message, setMessage] = React.useState({
    text: '',
    isError: false,
  });

  const fetchUserData = async () => {
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

  const handleRegister = async ({ name, email, password }) => {
    try {
      await mainApi.register(name, email, password);
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
      fetchUserData();
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
      localStorage.clear();
      setIsLoggedIn(false);
      setCurrentUser({});
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

  const handleMoviesCheckbox = (value) => {
    setIsShortMovies(value);
  };

  const handleSavedMoviesCheckbox = (value) => {
    setIsShortSavedMovies(value);
  }

  const filterData = (data, query, isShort) => {
    const queryData = moviesFilter(data, query);
    const filteredData = moviesFilter(data, query, isShort);

    if (!filteredData.length) {
      setMessage({
        text: 'Ничего не найдено',
        isError: false,
      });
    } else {
      setMessage({
        text: '',
        isError: false,
      });
    }

    setFilteredMovies(filteredData);
    localStorage.setItem('query', JSON.stringify(query));
    localStorage.setItem('queryMovies', JSON.stringify(queryData));
  };

  const handleRequestMovies = async (query) => {
    if (!allMovies.length) {
      try {
          setIsLoading(true);
          const data = await moviesApi.getAllMovies();
          setAllMovies(data);
          filterData(data, query, isShortMovies);
      } catch (err) {
        setMessage({
          text: `Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз`,
          isError: true,
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      filterData(allMovies, query, isShortMovies);
    }
  };

  const filterSavedData = (data, query, isShort) => {
    const filteredData = moviesFilter(data, query, isShort);
    if (!filteredData.length) {
      setMessage({
        text: 'Ничего не найдено',
        isError: false,
      });
    } else {
      setMessage({
        text: '',
        isError: false,
      });
    }

    setSavedMoviesFiltered(filteredData);
  }

  const handleRequestSavedMovies = (query) => {
    setSavedMoviesSearchQuery(query);

    if (!savedMovies.length) {
      setMessage({
        text: 'Вы пока ещё ничего не сохранили',
        isError: false,
      });
    } else {
      filterSavedData(savedMovies, query, isShortSavedMovies);
    }
  };

  const handleSaveMovie = async (movie) => {
    try {
      const newMovie = await mainApi.saveMovie(movie);
      setSavedMovies([ ...savedMovies, newMovie ])
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      await mainApi.deleteMovie(movieId);
      setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId ))
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  React.useEffect(() => {
    const fetchSavedMovies = async () => {
      try {
        const data = await mainApi.getSavedMovies();
        setSavedMovies(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (isLoggedIn) fetchSavedMovies();
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (location.path !== '/') {
      setMessage({
        text: '',
        isError: false,
      });
    }
  }, [location]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('queryMovies'));
    const query = JSON.parse(localStorage.getItem('query'));
    if (data && query) {
      setFilteredMovies(moviesFilter(data, query, isShortMovies));
      localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));
    }
  }, [isShortMovies]);

  React.useEffect(() => {
    setSavedMoviesFiltered(moviesFilter(savedMovies, savedMoviesSearchQuery, isShortSavedMovies))

  }, [isShortSavedMovies, savedMovies, savedMoviesSearchQuery]);

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="app">
        <Route path={["/", "/profile", "/movies", "/saved-movies"]} exact>
          <Header isLoggedIn={ isLoggedIn } />
        </Route>

        <Switch>
          { isLoading
            ? <Preloader />
            : (
            <Route path="/" exact>
              <Main />
            </Route>
            )
          }

          <ProtectedRoute
            exact
            path="/signup"
            component={ Register }
            isLoggedIn={ !isLoggedIn }
            handleRegister={ handleRegister }
            message={ message }
          />

          <ProtectedRoute
            exact
            path="/signin"
            component={ Login }
            isLoggedIn={ !isLoggedIn }
            handleLogin={ handleLogin }
            message={ message }
          />

          <ProtectedRoute
            exact
            path="/signup"
            component={ Register }
            isLoggedIn={ !isLoggedIn }
          />

          <ProtectedRoute
            exact
            path="/signin"
            component={ Login }
            isLoggedIn={ !isLoggedIn }
          />

          <ProtectedRoute
            exact
            path="/movies"
            component={ Movies }
            isLoggedIn={ isLoggedIn }
            onSubmit={ handleRequestMovies }
            onCheck={ handleMoviesCheckbox }
            moviesList={ filteredMovies }
            savedMovies={ savedMovies }
            message={ message }
            isLoading={ isLoading }
            isShort={ isShortMovies }
            onLike={ handleSaveMovie }
            onDelete={ handleDeleteMovie }
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={ SavedMovies }
            isLoggedIn={ isLoggedIn }
            onSubmit={ handleRequestSavedMovies }
            onCheck={ handleSavedMoviesCheckbox }
            moviesList={ savedMoviesFiltered }
            message={ message }
            onDelete={ handleDeleteMovie }
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
