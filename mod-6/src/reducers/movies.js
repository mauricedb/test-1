const movies = function(state = [], action) {
  switch (action.type) {
    case "MOVIES-LOADED":
      return action.payload;

    default:
      return state;
  }
};

export default movies;
