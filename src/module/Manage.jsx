import React, { useState } from 'react';

const Manage = ({ employees }) => {
   if(!employees){ 
    return (<p>Loading...</p>)
  }
  employees = employees.data;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="manage">
      <div className="search">
        <input type="text" placeholder="Search Employees" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className="employee-list">
        {employees
          .filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((employee) => (
            <div key={employee.id} onClick={() => handleEmployeeSelect(employee)}>
              <p>{employee.name}</p>
              <p>{employee.position}</p>
            </div>
          ))}
      </div>
      <div className="employee-details">
        {selectedEmployee && (
          <div>
            <h3>{selectedEmployee.name}</h3>
            <p>{selectedEmployee.position}</p>
            <p>{selectedEmployee.email}</p>
            <p>{selectedEmployee.phone}</p>
            <p>{selectedEmployee.address}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manage;
