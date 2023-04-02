import React from 'react';

const ActivityLog = ({ logs }) => {
  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      {logs.map((log, index) => (
        <div key={index}>
          <span>{log.time}</span>
          <p>{log.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityLog;
