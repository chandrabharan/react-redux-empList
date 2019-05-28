import React from "react";
import "./App.css";
import Login from "./Login";
import { Route } from "react-router-dom";
import Employees from "./Employees";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          exact
          render={props => <Login history={this.props.history} />}
        />
        <Route
          path="/employees"
          render={props => <Employees history={this.props.history} />}
        />
      </div>
    );
  }
}
