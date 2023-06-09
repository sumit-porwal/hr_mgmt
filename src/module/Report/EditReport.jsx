import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../useQuery';
function EditReport({ Report, setIsEditing }) {
	if (!Report) {
		return (
			<>
				<p>loading ..</p>
			</>
		);
	}
	const navigate = useNavigate();
	const [report, setReport] = React.useState({
		title: Report.title,
		subject: Report.subject,
		author: Report.author,
		content: Report.content,
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
		axios.patch(`${URL}/report/${Report.id}`, report);
		console.log(report);
		navigate('/Profile');
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
					name='author'
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
			<button type='submit'>Edit</button>
		</form>
	);
}

export default EditReport;
