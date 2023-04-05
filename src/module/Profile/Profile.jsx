import React, { useState } from 'react';
import EditProfile from './EditProfile';
const Profile = ({ employee }) => {
  if(!employee){
    return (<p>Loading...</p>)
  }
  const { name, email, phone, address, department, jobTitle } = employee;
  const [Editing,setEditing] = useState(false);
  console.log(employee)
  if(Editing){

    return(
      <>
      <EditProfile employee={employee}/>
      <button onClick={()=>setEditing(false)}>Back</button>
      </>
      
      )
    }
    return (
    <div className='Profile'>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>Department: {department}</p>
      <p>Job Title: {jobTitle}</p>
      <button onClick={()=>setEditing(true)}>Edit</button>
    </div>
  );
};

export default Profile;