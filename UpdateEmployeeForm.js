import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdateEmployeeForm = ({ employee, onUpdate }) => {
    const [name, setName] = useState(employee.name);
    const [role, setRole] = useState(employee.role);

    useEffect(() => {
        setName(employee.name);
        setRole(employee.role);
    }, [employee]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && role) {
            const updatedEmployee = { ...employee, name, role };
            onUpdate(updatedEmployee);
        }
    };

    return (
        <div>
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

UpdateEmployeeForm.propTypes = {
    employee: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default UpdateEmployeeForm;
