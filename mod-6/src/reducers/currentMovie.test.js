// Note: This is only needed when running in CodeSandbox.io
import "../setupTests";

import { currentMoviePropChanged } from "../actions";
import currentMovie from "./currentMovie";

describe("The currentMovie reducer", () => {
  test("can update a movie property", () => {
    const originalState = {
      id: 1,
      title: "Movie 1"
    };

    const state = currentMovie(
      originalState,
      currentMoviePropChanged("title", "New title")
    );

    expect(state).toEqual({
      id: 1,
      title: "New title"
    });
  });
});
