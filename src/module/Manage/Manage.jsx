import React, { useState } from 'react';
import { useNavigate, NavLink, Routes, Route } from 'react-router-dom';
import Shortlist from './Shortlist';
import Onboarding from './Onboarding';
import Search from './Search';
import useQuery from '../useQuery';
import Offboarding from './Offboarding';

const Manage = () => {
	// const navigate = useNavigate()
	const employees = useQuery('get', '/employees');

	return (
		<>
			<div className='manage'>
				<nav>
					<ul>
						<li>
							<NavLink to='/manage/Shortlist'>Shortlist</NavLink>
						</li>
						<li>
							<NavLink to='/manage/OnBoarding'>Hire</NavLink>
						</li>
						<li>
							<NavLink to='/manage/OffBoarding'>Fire</NavLink>
						</li>
						{/* <Link to "/addEmployee">Hire</Link> */}
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Search employees={employees} />} />
					<Route path='/Shortlist' element={<Shortlist />} />
					<Route path='/OnBoarding' element={<Onboarding />} />
					<Route path='/OffBoarding' element={<Offboarding />} />
				</Routes>
			</div>
		</>
	);
};

export default Manage;
