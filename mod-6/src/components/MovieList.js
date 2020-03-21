import React from "react";
import { connect } from "react-redux";

import MovieRow from "./MovieRow";
import Loading from "./Loading";

import { loadMovies } from "../actions";

export function MovieList({ movies, loadMovies }) {
  React.useEffect(() => {
    loadMovies();
  }, [loadMovies]);

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
    loadMovies: movies => dispatch(loadMovies(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
