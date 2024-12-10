import React, { useState } from "react";

function EmployeeList({ employees }) {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee List</h1>
      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;


