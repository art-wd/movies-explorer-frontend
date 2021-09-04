class MoviesApi {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  async _handleResponse(res) {
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
  }

  async getAllMovies() {
    const res = await fetch(`${this._baseURL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this._handleResponse(res);
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
