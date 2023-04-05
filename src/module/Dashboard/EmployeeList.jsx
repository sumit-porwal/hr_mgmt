import React from 'react';

const EmployeeList = ( {employees} ) => {
  if(!employees){ 
    return (<p>Loading...</p>)
  }
  console.log(employees);
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.data.map((employee) => (
        <div key={employee.id}>
          <p className="name">{employee.name}</p>
          <p className="department">{employee.jobTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
