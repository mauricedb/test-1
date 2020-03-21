export const moviesLoaded = movies => {
  return {
    type: "MOVIES-LOADED",
    payload: movies
  };
};

export const movieLoaded = movie => {
  return {
    type: "MOVIE-LOADED",
    payload: movie
  };
};

export const currentMoviePropChanged = (prop, value) => {
  return {
    type: "MOVIE-PROP-CHANGED",
    payload: { prop, value }
  };
};

export const loadMovies = () => async dispatch => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ORIGIN}/popular-movies`
  );

  dispatch(moviesLoaded(await response.json()));
};

export const loadMovie = id => async dispatch => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`
  );

  dispatch(movieLoaded(await response.json()));
};
