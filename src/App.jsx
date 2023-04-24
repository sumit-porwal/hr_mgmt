import './Style/App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import Nav from './module/Nav';
import AppRoutes from './module/AppRoutes';
URL;
function App() {
	const [auth, setAuth] = useState({
		isAuthenticated: false,
		user: null,
	});
	useEffect(() => {
		if (localStorage.getItem('token')) {
			let { user } = jwtDecode(localStorage.getItem('token'));
			setAuth({
				isAuthenticated: true,
				user: user,
			});
		}
	}, []);

	console.log(auth.user);

	return (
		<div className='App'>
			{/* <li><Link onClick={()=>logout()} to="/">logoout</Link></li> */}
			<Nav auth={auth} />
			<AppRoutes auth={auth} setAuth={setAuth} />
		</div>
	);
}

export default App;
