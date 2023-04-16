import React, { useState } from 'react';
import EditProfile from './EditProfile';
import Query from '../Query';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import Report from '../Report/Reports';
import AttendanceTable from '../Payroll/AttendanceTable';
import Payroll from '../Payroll/Payroll';
import Employee_Profile from './Employee_Profile';
const Profile = ({ user, logout }) => {
	const [Editing, setEditing] = useState(false);
	console.log(user);
	const employee = Query('get', `employees/${user.id}`, []);
	const report = Query('get', 'report');
	console.log(employee);
	if (!employee) {
		return <p>Loading...</p>;
	}
	console.log(employee);
	if (Editing) {
		return (
			<>
				<EditProfile employee={employee.data} />
				<button onClick={() => setEditing(false)}>Back</button>
			</>
		);
	}
	const holidays = [
		{ date: 1, month: 1, year: 2023, name: "New Year's Day" },
		{ date: 14, month: 1, year: 2023, name: 'Makar Sankranti' },
		{ date: 26, month: 1, year: 2023, name: 'Republic Day' },
		{ date: 1, month: 3, year: 2023, name: 'Maha Shivratri' },
		{ date: 29, month: 3, year: 2023, name: 'Holi' },
		{ date: 2, month: 4, year: 2023, name: 'Good Friday' },
		{ date: 14, month: 4, year: 2023, name: 'Ambedkar Jayanti' },
		{ date: 1, month: 5, year: 2023, name: 'May Day' },
		{ date: 10, month: 5, year: 2023, name: 'Buddha Purnima' },
		{ date: 15, month: 8, year: 2023, name: 'Independence Day' },
		{ date: 10, month: 9, year: 2023, name: 'Ganesh Chaturthi' },
		{ date: 1, month: 10, year: 2023, name: 'Gandhi Jayanti' },
		{ date: 19, month: 10, year: 2023, name: 'Dussehra' },
		{ date: 4, month: 11, year: 2023, name: 'Diwali' },
		{ date: 25, month: 12, year: 2023, name: 'Christmas Day' },
	];
	console.log(employee.data.attendance);
	return (
		<div className='Profile'>
			<nav>
				<ul>
					<li>
						<NavLink to='/profile/Payroll'>Payroll</NavLink>
					</li>
					<li>
						<NavLink to='/profile/Attendance'>Attendance</NavLink>
					</li>
					<li>
						<NavLink to='/profile/Reports'>Reports</NavLink>
					</li>
					<li>
						<NavLink onClick={() => logout()} to='/'>
							logout
						</NavLink>
					</li>
					{/* <Link to "/addEmployee">Hire</Link> */}
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Employee_Profile employee={employee} />} />
				<Route
					path='/Reports'
					element={<Report Report={report} control={true} />}
				/>
				<Route
					path='/Attendance'
					element={
						<AttendanceTable attendanceData={employee.data.attendance} />
					}
				/>
				<Route path='/Payroll' element={<Payroll />} />
				<Route
					path='*'
					element={
						<>
							<h2>404 Not Found</h2>
						</>
					}
				/>
			</Routes>
			<Outlet />
		</div>
	);
};

export default Profile;
