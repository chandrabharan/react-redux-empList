import { combineReducers } from "redux";
import employees from "./employeeReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  employees,
  login
});

export default rootReducer;
