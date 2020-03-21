import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./Loading";
import TextInput from "./TextInput";

import { movieLoaded, currentMoviePropChanged } from "../actions";

function MovieEditor({ movie, movieLoaded, currentMoviePropChanged }) {
  const { id } = useParams();
  const { push } = useHistory();

  React.useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`
      );
      movieLoaded(await response.json());
    }

    fetchMovie();
  }, [id, movieLoaded]);

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
        onChange={e => currentMoviePropChanged("title", e.target.value)}
      />
      <div className="form-group">
        <label>Overview</label>
        <textarea
          className="form-control"
          value={movie.overview}
          rows={5}
          onChange={e => currentMoviePropChanged("overview", e.target.value)}
        />
      </div>
      <TextInput
        label="Vote"
        value={movie.vote_average}
        onChange={e => currentMoviePropChanged("vote_average", e.target.value)}
      />
      <TextInput
        label="Release date"
        value={movie.release_date}
        onChange={e => currentMoviePropChanged("release_date", e.target.value)}
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

const mapStateToProps = state => {
  return {
    movie: state.currentMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    movieLoaded: movie => dispatch(movieLoaded(movie)),
    currentMoviePropChanged: (prop, value) =>
      dispatch(currentMoviePropChanged(prop, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditor);
