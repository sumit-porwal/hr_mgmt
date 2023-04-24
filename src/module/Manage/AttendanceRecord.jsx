import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../useQuery';
function RecordAttendance({ employee }) {
	const [attendance, setAttendance] = useState({
		date: '',
		status: '',
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		employee.attendance[attendance.date] = attendance;
		axios.patch(`${URL}/employees/${employee.id}`, {
			...employee,
		});
		// Here, you could send the attendance data to a backend API or add it to a local store
		console.log('Attendance recorded:', attendance);
	};

	const handleDateChange = (e) => {
		setAttendance({ ...attendance, date: e.target.value });
	};

	const handleStatusChange = (e) => {
		setAttendance({ ...attendance, status: e.target.value });
	};

	const handleDescriptionChange = (e) => {
		setAttendance({ ...attendance, description: e.target.value });
	};

	return (
		<>
			<h2>Record Attendance for {employee.name}</h2>
			<form className='attendance' onSubmit={handleSubmit}>
				<label htmlFor='date'>Date:</label>
				<input
					type='date'
					id='date'
					value={attendance.date}
					onChange={handleDateChange}
				/>
				<label htmlFor='status'>Status:</label>
				<select
					id='status'
					value={attendance.status}
					onChange={handleStatusChange}
				>
					<option value=''>--Select--</option>
					<option value='present'>Present</option>
					<option value='absent'>Absent</option>
					<option value='late'>Late</option>
					<option value='sick'>Sick</option>
					<option value='vacation'>Vacation</option>
					<option value='personal'>Personal</option>
				</select>
				{attendance.status === 'late' && (
					<>
						<label htmlFor='description'>Reason for being late:</label>
						<input
							type='text'
							id='description'
							value={attendance.description}
							onChange={handleDescriptionChange}
						/>
					</>
				)}
				{attendance.status === 'sick' && (
					<>
						<label htmlFor='description'>Nature of illness:</label>
						<input
							type='text'
							id='description'
							value={attendance.description}
							onChange={handleDescriptionChange}
						/>
					</>
				)}
				{attendance.status === 'vacation' && (
					<>
						<label htmlFor='description'>Vacation destination:</label>
						<input
							type='text'
							id='description'
							value={attendance.description}
							onChange={handleDescriptionChange}
						/>
					</>
				)}
				{attendance.status === 'personal' && (
					<>
						<label htmlFor='description'>Reason for personal day:</label>
						<input
							type='text'
							id='description'
							value={attendance.description}
							onChange={handleDescriptionChange}
						/>
					</>
				)}
				<button className='submit' type='submit'>
					Submit
				</button>
			</form>
		</>
	);
}

export default RecordAttendance;
