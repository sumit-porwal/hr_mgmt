import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useQuery from './useQuery';

// import AddEmployee from './module/Dashboard/AddEmplyee'
import Dashboard from './Dashboard/Dashboard';
import Manage from './Manage/Manage';
import Profile from './Profile/Profile';
import Login from './auth/Login';
import Apply from './Apply';
import Attendance from './Profile/Attendance';
function withAuth(auth, component) {
	return auth.isAuthenticated && auth.user.manager ? (
		component
	) : (
		<>
			<h2>NOT AUTHRIZED</h2>
		</>
	);
}
function AppRoutes({ auth, setAuth }) {
	if (!auth) {
		return (
			<>
				<h1>Please Login</h1>
			</>
		);
	}
	const logout = () => {
		localStorage.removeItem('token');
		setAuth({ isAuthenticated: false, user: null });
	};
	const Employees = useQuery('get', '/employees');
	return (
		<>
			<Routes>
				{/* <Route path="/dashboard" element={<Dashboard/>} /> */}
				<Route path='/' element={<Login setAuth={setAuth} />} />
				<Route
					path='/dashboard'
					element={withAuth(auth, <Dashboard employees={Employees} />)}
				/>
				<Route
					path='/Manage/*'
					element={withAuth(auth, <Manage employees={Employees} />)}
				/>
				<Route
					path='/profile/*'
					element={
						auth.isAuthenticated ? (
							<Profile logout={logout} user={auth.user} />
						) : (
							<>
								<h2>Please Login</h2>
							</>
						)
					}
				/>
				<Route to='/profile/Attendance' element={<Attendance />} />

				{/* <Route path="/AddEmployee" element={<AddEmployee />}/> */}
				<Route path='/Apply' element={<Apply />} />
				<Route
					path='/submitted'
					element={
						<>
							<h2>Your Response has been recorded</h2>
						</>
					}
				/>
				<Route
					path='*'
					element={
						<>
							<h2>404 Not Found</h2>
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default AppRoutes;
