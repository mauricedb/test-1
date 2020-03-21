import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { MovieList } from "./MovieList";

describe("The MovieList component", () => {
  test("dispatches yje loadMovies() action when first rendered", () => {
    const loadMovies = jest.fn();

    render(<MovieList loadMovies={loadMovies} />);

    expect(loadMovies).toHaveBeenCalled();
  });

  test("renders the movies passed", () => {
    const movies = [
      {
        id: 1,
        title: "Movie 1",
        vote_average: 5
      },
      {
        id: 2,
        title: "Movie 2",
        vote_average: 6
      }
    ];
    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <MovieList loadMovies={jest.fn()} movies={movies} />
      </MemoryRouter>
    );

    expect(getByText("Movie 1")).toBeVisible();
    expect(getByText("Movie 2")).toBeVisible();
    expect(getAllByText("Edit")).toHaveLength(2);
  });

  test("navigates when the edit button is clicked", () => {
    const history = createMemoryHistory();

    const movies = [
      {
        id: 123,
        title: "Movie 123",
        vote_average: 5
      }
    ];

    const { getByText } = render(
      <Router history={history}>
        <MovieList loadMovies={jest.fn()} movies={movies} />
      </Router>
    );

    fireEvent.click(getByText("Edit"));

    expect(history.location.pathname).toBe("/movie/123");
  });
});
