import React from "react";
import PropTypes from "prop-types";

function MovieListRow({ movie, toEditMode }) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.vote_average}</td>
      <td style={{ width: 1 }}>
        <button
          className="btn btn-default btn-xs edit-button"
          onClick={() => toEditMode(movie.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

MovieListRow.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired,
  toEditMode: PropTypes.func.isRequired
};

export default MovieListRow;
