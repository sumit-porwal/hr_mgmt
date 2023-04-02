import React from 'react'

function Applicant() {

   return (
    <div className="applicants">
      {apps.map(applicant => (
        <div key={applicant.id} className="app-icon">
          <img src={applicant.img} alt={applicant.name} />
          <span>{applicant.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Applicant