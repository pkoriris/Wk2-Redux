// src/actions/employeeActions.js

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee
});

export const updateEmployee = (updatedEmployee) => ({
  type: UPDATE_EMPLOYEE,
  payload: updatedEmployee
});
