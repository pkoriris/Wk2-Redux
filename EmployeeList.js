import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employees, onEdit }) => {
    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.role}
                        <button onClick={() => onEdit(employee)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default EmployeeList;
