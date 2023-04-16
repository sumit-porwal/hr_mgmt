import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Nav({ auth, logout }) {
	if (!auth.isAuthenticated) return <></>;
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/Manage'>Manage</NavLink>
				</li>
				<li>
					<NavLink to='/dashboard'>Dashboard</NavLink>
				</li>
				<li>
					<NavLink to='/Profile'>Profile</NavLink>
				</li>
				{/* <li><Link to="/AddEmployee">NewEmployee</Link></li> */}
				{/* <li><Link to="/Apply">Apply</Link></li> */}
			</ul>
		</nav>
	);
}

export default Nav;
