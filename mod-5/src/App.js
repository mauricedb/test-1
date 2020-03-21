import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import MovieList from "./components/MovieList";
import MovieEditor from "./components/MovieEditor";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Popular movies</h1>

        <BrowserRouter>
          <Switch>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <MovieEditor />
            </Route>
            <Route>
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
