export default function employeeReducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_EMPLOYEES":
      return { ...action.employeeList };
    default:
      return state;
  }
}
