// src/reducers/employeeReducer.test.js

import employeeReducer from './employeeReducer';
import { ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/employeeActions';

describe('Employee Reducer', () => {
  it('should return the initial state', () => {
    expect(employeeReducer(undefined, {})).toEqual({ employees: [] });
  });

  it('should handle ADD_EMPLOYEE', () => {
    const newEmployee = { id: 1, name: 'John Doe', role: 'Developer' };
    const action = { type: ADD_EMPLOYEE, payload: newEmployee };
    const expectedState = { employees: [newEmployee] };
    expect(employeeReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_EMPLOYEE', () => {
    const initialState = {
      employees: [{ id: 1, name: 'John Doe', role: 'Developer' }]
    };
    const updatedEmployee = { id: 1, name: 'John Doe', role: 'Senior Developer' };
    const action = { type: UPDATE_EMPLOYEE, payload: updatedEmployee };
    const expectedState = { employees: [updatedEmployee] };
    expect(employeeReducer(initialState, action)).toEqual(expectedState);
  });
});
