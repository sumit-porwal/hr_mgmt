import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from './useQuery';
const Apply = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		Shortlist: false,
		//   department: '',
		//   jobTitle: ''
	});

	const { name, email, phone, address } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios({
				method: 'post',
				url: `${URL}/applicants`,
				'content-type': 'application/json',
				data: formData,
			}).then((res) => {
				navigate('/submitted');
				console.log(res);
			});
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return (
		<>
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
				{/* <label htmlFor="department">Department</label>
		<input type="text" name="department" id="department" value={department} onChange={onChange}/>

		<label htmlFor="jobTitle">jobtitle</label>
		<input type="text" name="jobTitle"  id="jobTitle" value={jobTitle} onChange={onChange} /> */}

				<button className='submit' type='submit'>
					Submit
				</button>
			</form>
		</>
	);
};
export default Apply;
