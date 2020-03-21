import React from "react";
import bug from "./bug.png";

const ErrorDisplay = ({ error, errorInfo }) => {
  return (
    <div style={{ color: "red" }}>
      <h1>Oops, an error occurred</h1>
      <img src={bug} alt="A bug" width="500" />
      <h2>{error?.message}</h2>
      <hr />
      <pre>{error?.stack}</pre>
      <hr />
      <pre>{errorInfo?.componentStack}</pre>
    </div>
  );
};

export default ErrorDisplay;
