import React from "react";
import { connect } from "react-redux";

import MovieRow from "./MovieRow";
import Loading from "./Loading";

import { moviesLoaded } from "../actions";

function MovieList({ movies, moviesLoaded }) {
  React.useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${process.env.REACT_APP_API_ORIGIN}/popular-movies`
      );
      moviesLoaded(await response.json());
    }

    fetchMovies();
  }, [moviesLoaded]);

  if (!movies) {
    return <Loading />;
  }

  const rows = movies.map(movie => <MovieRow key={movie.id} movie={movie} />);

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Vote</th>
          <th />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesLoaded: movies => dispatch(moviesLoaded(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
