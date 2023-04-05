import React from 'react'
import { useState } from 'react';
import EmployeeEdit from './EmployeeEdit';
function Search({employees}) {
	  if(!employees){ 
     return (<p>Loading...</p>)
  }
  console.log(employees);
  employees = employees.data;
  const [editing, setEditing] = useState(false)
  const [searching,seteSearching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    seteSearching(false);
  };
  if(searching){

    return(
      <>
	        <div className="search">
           <input type="text" placeholder="Search Employees" value={searchTerm} onChange={handleSearchChange} />
          </div>
          <div className="employee-list">
            {employees
              .filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((employee) => (
                <div className="employee-manage" key={employee.id} onClick={() => handleEmployeeSelect(employee)}>
                  <p className='name'>{employee.name}</p>
                  <p className='department'>{employee.jobTitle}</p>
                </div>
                ))
              }
        </div>
      </>)
    }
    else{
       if(editing){
      return(
        <>
      <EmployeeEdit employee={selectedEmployee}/>
      <button onClick={()=>setEditing(false)}>Back</button>
        </>
      )
    }
      return(
        <>
       <div className="employee-details">
        {selectedEmployee && (
			<div>
            <h3>{selectedEmployee.name}</h3>
            <p>{selectedEmployee.position}</p>
            <p>{selectedEmployee.email}</p>
            <p>{selectedEmployee.phone}</p>
            <p>{selectedEmployee.address}</p>
            <button onClick={()=>setEditing(true)}>Edit</button>
            <button onClick={()=>seteSearching(true)}>Back</button>
          </div>
        )}
      </div>
      </>
     )
        }
    }

export default Search