import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import necessary Router components
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from localStorage or API
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  }, []);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  return (
    <Router>  {/* Ensure the entire app is wrapped in Router */}
      <div className="App">
        <h1>Employee Management System</h1>
        <EmployeeForm addEmployee={addEmployee} />
        <EmployeeList employees={employees} />
      </div>
    </Router>
  );
}

export default App;

