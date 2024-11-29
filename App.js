import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployeeForm from './AddEmployeeForm';
import UpdateEmployeeForm from './UpdateEmployeeForm';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const handleAddEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const handleUpdateEmployee = (updatedEmployee) => {
        setEmployees(employees.map(emp => 
            emp.id === updatedEmployee.id ? updatedEmployee : emp
        ));
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

export default App;
