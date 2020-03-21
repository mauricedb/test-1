import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders popular movies header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/popular movies/i);
  expect(linkElement).toBeInTheDocument();
});
