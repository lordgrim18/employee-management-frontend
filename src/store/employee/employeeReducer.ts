// import {
//   EMPLOYEE_ACTION_TYPES,
//   type EmployeeAction,
//   type EmployeeState,
// } from "./employee.types";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee, EmployeeState } from "./employee.types";

const initialState: EmployeeState = { employees: [] };

// function employeeReducer(
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ): EmployeeState {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//       return {
//         ...state,
//         employees: state.employees.filter(
//           (employee) => employee.employeeId !== action.payload
//         ),
//       };

//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//       return {
//         ...state,
//         employees: state.employees.filter((employee) => {
//           // if (employee.employeeId !== action.payload.employeeId) return employee
//           // else return action.payload
//           return employee.employeeId !== action.payload.employeeId
//             ? employee
//             : action.payload;
//         }),
//       };

//       case EMPLOYEE_ACTION_TYPES.ADD:
//         const employee = action.payload; 
//         return {
//             ...state,
//             employees: [...state.employees, employee]
//         };

//     default:
//       return state;
//   }
// }

// export default employeeReducer;

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
        console.log("Employee updated successfully:", state.employees[index]);
      } else {
        console.log("Employee not found for update with ID:", action.payload.id);
      }
    }
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;