import React from 'react';
import EmployeeList from './EmployeeList';
import ActivityLog from './ActivityLog';
import Reports from '../Reports';


const Dashboard = (Employees) => {
 

  const logs = [
    { time: '10:00 am', message: 'User login' },
    { time: '11:30 am', message: 'Employee added' },
    { time: '1:45 pm', message: 'Report generated' },
  ];

  const reports = [
    {  name: 'Employee Sales Report', data:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aut aperiam dolores, fuga adipisci magnam excepturi nemo. Tenetur, officiis repellendus.'},
    { name: 'Attendance Report', data:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aut aperiam dolores, fuga adipisci magnam excepturi nemo. Tenetur, officiis repellendus.'},
    { name: 'Performance Report',data:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aut aperiam dolores, fuga adipisci magnam excepturi nemo. Tenetur, officiis repellendus.' },
  ];

  return (
    <div className="dashboard">
      <EmployeeList employees={Employees.employees} />
      <ActivityLog logs={logs} />
      <Reports reports={reports} />
    </div>
  );
};

export default Dashboard;
