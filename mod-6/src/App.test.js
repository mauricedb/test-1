import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Note: This is only needed when running in CodeSandbox.io
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
afterEach(cleanup);

test("renders popular movies header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/popular movies/i);
  expect(linkElement).toBeInTheDocument();
});
