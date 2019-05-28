import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Employees.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.css";
import "./Login.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
