import { moviesLoaded, movieLoaded } from "../actions";
import movies from "./movies";

describe("The movies reducer", () => {
  test("can load initial movies", () => {
    const state = movies(
      undefined,
      moviesLoaded([
        {
          id: 1,
          title: "Movie 1"
        },
        {
          id: 2,
          title: "Movie 2"
        }
      ])
    );

    expect(state).toEqual([
      {
        id: 1,
        title: "Movie 1"
      },
      {
        id: 2,
        title: "Movie 2"
      }
    ]);
  });

  test("can load new movies", () => {
    const originalState = [
      {
        id: 1,
        title: "Movie 1"
      }
    ];

    const newState = movies(
      originalState,
      moviesLoaded([
        {
          id: 2,
          title: "Movie 2"
        }
      ])
    );

    expect(newState).toEqual([
      {
        id: 2,
        title: "Movie 2"
      }
    ]);
  });

  test("ignores other actions", () => {
    const originalState = [
      {
        id: 1,
        title: "Movie 1"
      }
    ];

    const newState = movies(
      originalState,
      movieLoaded({
        id: 2,
        title: "Movie 2"
      })
    );

    expect(newState).toEqual([
      {
        id: 1,
        title: "Movie 1"
      }
    ]);
  });
});
