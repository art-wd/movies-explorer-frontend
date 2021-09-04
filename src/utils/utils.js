const moviesFilter = (movies, query, isShort) => {
  return movies.filter((movie) => {
    const nameRU = String(movie.nameRU).toLowerCase();
    const nameEN = String(movie.nameEN).toLowerCase();
    const duration = movie.duration;

    if (isShort) return (
      (nameRU.includes(query.toLowerCase()) || nameEN.includes(query.toLowerCase()))
      && duration <= 40
    );

    return nameRU.includes(query.toLowerCase()) || nameEN.includes(query.toLowerCase());
  });
};

const fixImageURL = (url) => {
  if (url) {
    return `https://api.nomoreparties.co${url}`;
  }

  return 'https://api.nomoreparties.co';
};

const fixTarilerURL = (url) => {
  if (url?.includes('https://www.youtube.com') || url?.includes('https://vimeo.com')) {
    return url;
  }

  return 'https://www.youtube.com';
};

const fixMovie = (movie) => {
  return {
    country: movie.country || 'Unknown',
    director: movie.director || 'Unknown',
    duration: movie.duration || 0,
    year: movie.year|| 'Unknown',
    description: movie.description || 'Unknown',
    image: fixImageURL(movie.image.url),
    trailer: fixTarilerURL(movie.trailerLink),
    nameRU: movie.nameRU || 'Unknown',
    nameEN: movie.nameEN || 'Unknown',
    thumbnail: fixImageURL(movie.image.formats.thumbnail.url),
    movieId: movie.id,
  };
};

const convertDuration = (duration) => {
  if (duration) {
    return `${ Math.trunc(duration / 60) }ч${ duration % 60 }м`
  }

  return '0ч0м'
}

const throttle = (func, delay) => {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    setTimeout(() => {
      func(...args);
      inProgress = false;
    }, delay);
  }
}

export {
  moviesFilter,
  fixImageURL,
  fixTarilerURL,
  fixMovie,
  convertDuration,
  throttle,
};
