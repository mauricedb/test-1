const currentMovie = function(state = null, action) {
  switch (action.type) {
    case "MOVIE-LOADED":
      return action.payload;

    case "MOVIE-PROP-CHANGED":
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    default:
      return state;
  }
};

export default currentMovie;
