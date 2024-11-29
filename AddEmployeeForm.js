import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddEmployeeForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && role) {
            const newEmployee = { id: Date.now(), name, role };
            onAdd(newEmployee);
            setName('');
            setRole('');
        }
    };

    return (
        <div>
            <h2>Add New Employee</h2>
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
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

AddEmployeeForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default AddEmployeeForm;
