import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        title: "",
        department: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(employee); // Pass employee data to parent component
        setEmployee({ name: "", email: "", title: "", department: "" }); // Reset form fields
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={employee.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;
