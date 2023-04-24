import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
function Nav({ auth, logout }) {
	if (!auth.isAuthenticated) return <></>;
	return (
		<nav className='mainNav'>
			<ul>
				<li className='nav-item'>
					<NavLink className='nav-link' to='/Manage'>
						Manage
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link' to='/dashboard'>
						Dashboard
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link' to='/Profile'>
						Profile
					</NavLink>
				</li>
				{/* <li><Link to="/AddEmployee">NewEmployee</Link></li> */}
				{/* <li><Link to="/Apply">Apply</Link></li> */}
			</ul>
		</nav>
	);
}

export default Nav;
