import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';
import ActivityLog from './ActivityLog';
import Reports from '../Report/Reports';
import axios from 'axios';
import Query from '../Query';
const Dashboard = (Employees) => {
	const reports = Query('get', 'report');
	const [logs, setLogs] = useState();
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await axios.get(`http://localhost:8080/activity`);
			setLogs(response);
		}
		fetchData();
	}, []);

	return (
		<div className='dashboard'>
			<EmployeeList employees={Employees.employees} />
			<h2>Reports</h2>
			<Reports Report={reports} control={false} />
			<ActivityLog activity={logs} />
		</div>
	);
};

export default Dashboard;
