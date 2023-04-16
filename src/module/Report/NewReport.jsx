import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react';

function ReportForm() {
	let { user } = jwtDecode(localStorage.getItem('token'));
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
		axios.post('http://localhost:8080/report', report);
		axios.post(`http://localhost:8080/activity`, {
			message: `${user.name} Just Posted A Report`,
		});

		// handle report submission logic here
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type='text'
					name='title'
					value={report.title}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Subject:
				<input
					type='text'
					name='subject'
					value={report.subject}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Content:
				<textarea
					name='content'
					value={report.content}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button type='submit'>Submit</button>
		</form>
	);
}

export default ReportForm;
