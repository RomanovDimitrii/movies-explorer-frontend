//export const BASE_URL = 'https://api.dimitrii.movies.nomoredomainsicu.ru';
const BASE_URL = 'http://localhost:3000';

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, email: email, name: name })
  }).then(response => checkResponse(response));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, email: email })
  }).then(response => checkResponse(response));
};

export const changeProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email })
  }).then(response => checkResponse(response));
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(response => checkResponse(response));
};

export const logOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => checkResponse(response));
};

export const saveMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  id,
  nameRU,
  nameEN
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: `https://api.nomoreparties.co/${image.url}`,
      trailerLink: trailerLink,
      thumbnail: `https://api.nomoreparties.co/${image.url}`,
      movieId: String(id),
      nameRU: nameRU,
      nameEN: nameEN
    })
  }).then(response => checkResponse(response));
};

export const deleteMovie = _id => {
  return fetch(`${BASE_URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => checkResponse(response));
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => checkResponse(response));
};

function checkResponse(response) {
  if (!response.ok) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
}
