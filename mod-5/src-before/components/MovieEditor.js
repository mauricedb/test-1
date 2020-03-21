import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Loading from "./Loading";
import TextInput from "./TextInput";

function MovieEditor() {
  const { id } = useParams();
  const { push } = useHistory();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`
      );
      setMovie(await response.json());
    }

    fetchMovie();
  }, [id]);

  async function saveMovie() {
    const response = await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "put",
        body: JSON.stringify(movie)
      }
    );
    if (response.ok) {
      push("/movies");
    }
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <form>
      <TextInput
        label="Title"
        value={movie.title}
        onChange={e => setMovie({ ...movie, title: e.target.value })}
      />
      <div className="form-group">
        <label>Overview</label>
        <textarea
          className="form-control"
          value={movie.overview}
          rows={5}
          onChange={e => setMovie({ ...movie, overview: e.target.value })}
        />
      </div>
      <TextInput
        label="Vote"
        value={movie.vote_average}
        onChange={e => setMovie({ ...movie, vote_average: e.target.value })}
      />
      <TextInput
        label="Release date"
        value={movie.release_date}
        onChange={e => setMovie({ ...movie, release_date: e.target.value })}
      />
      <div className="form-group">
        <img
          src={`//image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="btn-group">
        <button onClick={saveMovie} type="button" className="btn btn-primary">
          Save
        </button>
        <Link to={`/movies`} className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default MovieEditor;
