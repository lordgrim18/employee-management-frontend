import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialState: EmployeeState = { employees: [] };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.DELETE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.employeeId !== action.payload
        ),
      };

    case EMPLOYEE_ACTION_TYPES.UPDATE:
      return {
        ...state,
        employees: state.employees.filter((employee) => {
          // if (employee.employeeId !== action.payload.employeeId) return employee
          // else return action.payload
          return employee.employeeId !== action.payload.employeeId
            ? employee
            : action.payload;
        }),
      };

      case EMPLOYEE_ACTION_TYPES.ADD:
        const employee = action.payload; 
        return {
            ...state,
            employees: [...state.employees, employee]
        };

    default:
      return state;
  }
}

export default employeeReducer;
