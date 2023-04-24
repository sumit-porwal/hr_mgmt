import React, { useState } from 'react';
import useQuery from '../useQuery';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import Report from '../Report/Reports';
import AttendanceTable from '../Payroll/AttendanceTable';
import Payroll from '../Payroll/Payroll';
import Employee_Profile from './Employee_Profile';
const Profile = ({ user, logout }) => {
	console.log(user);
	const employee = useQuery('get', `/employees/${user.id}`, []);

	console.log(employee);
	if (!employee) {
		return <p>Loading...</p>;
	}
	console.log(employee);

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
				<Route path='/Reports' element={<Report control={true} />} />
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
