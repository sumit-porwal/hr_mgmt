import React, { useState } from 'react';
import { NavigationType, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { URL } from '../useQuery';
const Login = ({ setAuth }) => {
	const Navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;
	const [err_msg, setErr_msg] = useState('');
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		setErr_msg(' ');
		e.preventDefault();
		try {
			console.log(formData);
			const response = await axios.post(`${URL}/login`, formData);
			const token = response.data;
			localStorage.setItem('token', token);
			const { user } = jwt_decode(token);
			setAuth({ isAuthenticated: true, user: user });
			axios.post(`${URL}/activity/`, {
				message: `${user.name}  Logged in`,
			});

			return Navigate('/Profile');
		} catch (error) {
			setErr_msg(error.response.data.message);
			console.error(error);
		}
	};

	// if (localStorage.getItem('token')) {
	//   useEffect(()=>{
	//     Navigate("/profile");

	//   },[])
	// }

	return (
		<div>
			<h2>Login</h2>
			<p className='error'>{err_msg}</p>
			<form className='login' onSubmit={onSubmit}>
				<label>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={onChange}
					autoComplete='email'
					required
				/>

				<label>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={onChange}
					autoComplete='current-password'
					required
				/>

				<button className='submit' type='submit'>
					Login
				</button>
			</form>
			<p>
				Not an Employee apply
				<NavLink to='/Apply'>here</NavLink>
			</p>
		</div>
	);
};

export default Login;
