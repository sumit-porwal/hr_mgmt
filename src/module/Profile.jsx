import React from 'react';

const Profile = ({ employee }) => {
   if(!employees){
    return (<p>Loading...</p>)
  }
  const { name, email, phone, address, department, jobTitle } = employee;

  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>Department: {department}</p>
      <p>Job Title: {jobTitle}</p>
    </div>
  );
};

export default Profile;