import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../useQuery';
function ReportForm({ setIsCreating }) {
	let { user } = jwtDecode(localStorage.getItem('token'));
	const navigate = useNavigate();

	const [report, setReport] = React.useState({
		title: '',
		subject: '',
		author: user.name,
		content: '',
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setReport((prevReport) => ({
			...prevReport,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(report);
		axios.post(`${URL}/report`, report);
		axios.post(`${URL}/activity`, {
			message: `${user.name} Just Posted A Report`,
		});
		navigate('/profile');
		// handle report submission logic here
	}

	return (
		<form className='new-report' onSubmit={handleSubmit}>
			<label htmlFor='title'>Title:</label>
			<input
				type='text'
				name='title'
				value={report.title}
				onChange={handleChange}
			/>
			<label htmlFor='subject'>Subject:</label>
			<input
				type='text'
				name='subject'
				value={report.subject}
				onChange={handleChange}
			/>
			<label htmlFor='content'>Content:</label>
			<textarea name='content' value={report.content} onChange={handleChange} />
			<button type='submit'>Submit</button>
		</form>
	);
}

export default ReportForm;
