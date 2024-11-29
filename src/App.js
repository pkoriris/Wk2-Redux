///
// src/App.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee, updateEmployee } from './actions/employeeActions';
import EmployeeList from './EmployeeList';
import AddEmployeeForm from './AddEmployeeForm';
import UpdateEmployeeForm from './UpdateEmployeeForm';

const App = ({ employees, addEmployee, updateEmployee }) => {
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAddEmployee = (newEmployee) => {
    addEmployee(newEmployee);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    updateEmployee(updatedEmployee);
    setEditingEmployee(null);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      {!editingEmployee ? (
        <div>
          <AddEmployeeForm onAdd={handleAddEmployee} />
          <EmployeeList employees={employees} onEdit={handleEditEmployee} />
        </div>
      ) : (
        <UpdateEmployeeForm employee={editingEmployee} onUpdate={handleUpdateEmployee} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees
});

const mapDispatchToProps = {
  addEmployee,
  updateEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

