import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';
import ActivityLog from './ActivityLog';
import Reports from '../Report/Reports';
import axios from 'axios';
import useQuery from '../useQuery';
const Dashboard = (Employees) => {
	const reports = useQuery('get', '/report');
	const logs = useQuery('get', '/activity');

	return (
		<div className='dashboard'>
			<EmployeeList employees={Employees.employees} />
			<h2>Reports</h2>
			<Reports control={false} />
			<ActivityLog activity={logs} />
		</div>
	);
};

export default Dashboard;
