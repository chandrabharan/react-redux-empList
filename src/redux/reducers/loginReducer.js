const initialState = {
  email: "",
  password: "",
  formErrors: { email: "", password: "" },
  emailValid: false,
  passwordValid: false,
  formValid: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_STATE":
      const newState2 = { ...state };
      if ("email" in action.tempState) {
        newState2.email = action.tempState.email;
      }
      if ("password" in action.tempState) {
        newState2.password = action.tempState.password;
      }
      if ("formErrors" in action.tempState) {
        newState2.formErrors = action.tempState.formErrors;
      }
      if ("emailValid" in action.tempState) {
        newState2.emailValid = action.tempState.emailValid;
      }
      if ("passwordValid" in action.tempState) {
        newState2.passwordValid = action.tempState.passwordValid;
      }
      if ("formValid" in action.tempState) {
        newState2.formValid = action.tempState.formValid;
      }
      return newState2;
    default:
      return { ...state };
  }
}
