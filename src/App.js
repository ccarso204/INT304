import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
    const [employees, setEmployees] = useState([]);

    // Retrieve data from local storage on component mount
    useEffect(() => {
        const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(savedEmployees);
    }, []);

    // Add new employee
    const addEmployee = (newEmployee) => {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees); // Save to local storage
    };

    // Save employees data to local storage
    const saveData = (data) => {
        localStorage.setItem("employees", JSON.stringify(data));
    };

    return (
        <div className="App">
            <h1>Employee Management System</h1>
            <EmployeeForm addEmployee={addEmployee} />
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name} - {employee.email} - {employee.title} - {employee.department}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
