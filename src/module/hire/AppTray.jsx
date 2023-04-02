import React from 'react';

function Applicants({applicant}) {
  

  return (
    <div className="app-tray">
      {apps.map(applicant => (
        <div key={applicant.id} className="app-icon">
          <img src={applicant.img} alt={applicant.name} />
          <span>{applicant.name}</span>
        </div>
      ))}
    </div>
  );
}

export default AppTray;