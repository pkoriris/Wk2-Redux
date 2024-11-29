// src/reducers/employeeReducer.js

import { ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/employeeActions';

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id ? action.payload : emp
        )
      };

    default:
      return state;
  }
};

export default employeeReducer;
