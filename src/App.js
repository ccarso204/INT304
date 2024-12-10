import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Doe", email: "jane@gmail.com" },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { id: Date.now(), ...employee }]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Employee List</Link>
        <Link to="/add">Add Employee</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EmployeeList employees={employees} />} />
        <Route path="/add" element={<EmployeeForm addEmployee={addEmployee} />} />
      </Routes>
    </Router>
  );
}

export default App;

