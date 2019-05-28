import React from "react";
import { FormErrors } from "./FormErrors.js";
import { connect } from "react-redux";
import * as loginActions from "./redux/actions/loginActions";
import * as employeeActions from "./redux/actions/employeeActions";

class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.props.LoginState.email === "hruday@gmail.com" &&
      this.props.LoginState.password === "hruday123"
    ) {
      //navigate to Employees page.
      const employeeList = {
        user: [
          {
            id: 1,
            name: "test1",
            age: "11",
            gender: "male",
            email: "test1@gmail.com",
            phoneNo: "9415346313"
          },
          {
            id: 2,
            name: "test2",
            age: "12",
            gender: "male",
            email: "test2@gmail.com",
            phoneNo: "9415346314"
          },
          {
            id: 3,
            name: "test3",
            age: "13",
            gender: "male",
            email: "test3@gmail.com",
            phoneNo: "9415346315"
          },
          {
            id: 4,
            name: "test4",
            age: "14",
            gender: "male",
            email: "test4@gmail.com",
            phoneNo: "9415346316"
          },
          {
            id: 5,
            name: "test5",
            age: "15",
            gender: "male",
            email: "test5@gmail.com",
            phoneNo: "9415346317"
          },
          {
            id: 6,
            name: "test6",
            age: "16",
            gender: "male",
            email: "test6@gmail.com",
            phoneNo: "9415346318"
          }
        ]
      };
      this.props.dispatch(employeeActions.loadEmployees(employeeList));
      this.props.history.push('/employees');
    } else {
      alert("Please enter hruday@gmail.com/hruday123");
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.dispatch(
      loginActions.updateState({
        email: "",
        password: "",
        formErrors: { email: "", password: "" },
        emailValid: false,
        passwordValid: false,
        formValid: false
      })
    );
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.validateField(name, value);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = { ...this.props.LoginState.formErrors };
    let emailValid = { ...this.props.LoginState.emailValid };
    let passwordValid = { ...this.props.LoginState.passwordValid };
    let tempState = {};
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        tempState.email = value;
        break;
      case "password":
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        tempState.password = value;
        break;
      default:
        break;
    }
    tempState.formErrors = fieldValidationErrors;
    tempState.emailValid = emailValid;
    tempState.passwordValid = passwordValid;
    tempState.formValid =
      this.props.LoginState.emailValid && this.props.LoginState.passwordValid;
    this.props.dispatch(loginActions.updateState(tempState));
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="vertical-center">
        <div className="container ">
          <div className="panel panel-default">
            <div className="panel-body">
              <FormErrors formErrors={this.props.LoginState.formErrors} />

              <form onSubmit={this.handleSubmit}>
                <div
                  className={`form-group
                 ${this.errorClass(this.props.LoginState.formErrors.email)}`}
                >
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    value={this.props.LoginState.email}
                  />
                </div>
                <div
                  className={`form-group
                 ${this.errorClass(this.props.LoginState.formErrors.email)}`}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.handleChange}
                    value={this.props.LoginState.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!this.props.LoginState.formValid}
                >
                  Login
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoginState: state.login
  };
}

const connectStateAndDispatchToProps = connect(mapStateToProps);
export default connectStateAndDispatchToProps(Login);
