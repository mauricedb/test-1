import React from "react";
import MovieRow from "./MovieRow";
import Loading from "./Loading";

function MovieList() {
  const [movies, setMovies] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${process.env.REACT_APP_API_ORIGIN}/popular-movies`
      );
      setMovies(await response.json());
    }

    fetchMovies();
  }, []);

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

export default MovieList;
