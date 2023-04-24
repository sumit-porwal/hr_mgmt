import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../useQuery';
function EditProfile({ employee }) {
	const navigate = useNavigate();
	console.log('Edit says' + employee);
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});
	const { name, email, phone, address } = formData;

	useEffect(
		() =>
			setFormData({
				name: employee.name,
				email: employee.email,
				phone: employee.phone,
				address: employee.address,
				department: employee.department,
				jobTitle: employee.jobTitle,
			}),
		[]
	);
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.patch(`${URL}/employees/${employee.id}`, formData);
		location.reload();
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={onChange}
				/>
				<label htmlFor='Email'>Email</label>
				<input
					type='Email'
					name='email'
					id='email'
					value={email}
					onChange={onChange}
				/>
				<label htmlFor='phone'>Phone</label>
				<input
					type='number'
					name='phone'
					id='phone'
					value={phone}
					onChange={onChange}
				/>
				<label htmlFor='address'>Adress</label>
				<input
					type='text'
					name='address'
					id='address'
					value={address}
					onChange={onChange}
				/>
				<button className='submit' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default EditProfile;
