import React from 'react';

function EditReport({ Report }) {
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
		axios.patch(`http://localhost:8080/${Report.id}`, report);
		console.log(report);
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
