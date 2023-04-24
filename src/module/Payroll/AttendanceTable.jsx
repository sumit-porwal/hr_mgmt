import React, { useState } from 'react';
import moment from 'moment';

export default function AttendanceTable({ attendanceData }) {
	const [selectedMonth, setSelectedMonth] = useState(moment().month());
	const [selectedYear, setSelectedYear] = useState(moment().year());

	const daysInMonth = moment(
		`${selectedYear}-${selectedMonth + 1}`,
		'YYYY-M'
	).daysInMonth();
	const firstDayOfMonth = moment(
		`${selectedYear}-${selectedMonth + 1}-01`,
		'YYYY-M-D'
	).day();

	const days = [];
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(i);
	}

	const rows = [];
	let cells = [];

	for (let i = 0; i < firstDayOfMonth; i++) {
		cells.push(<td key={`empty-${i}`} />);
	}

	days.forEach((day) => {
		const date = moment(
			`${selectedYear}-${selectedMonth + 1}-${day}`,
			'YYYY-M-D'
		);
		const attendance = attendanceData[date.format('YYYY-MM-DD')] || {};
		const status = attendance.status || '';
		const description = attendance.description || '';

		cells.push(
			<td
				key={day}
				className={`${status} hovertext`}
				data-hover={`${status} || ${description}`}
			>
				{day}
			</td>
		);

		if (cells.length === 7) {
			rows.push(<tr key={`row-${day}`}>{cells}</tr>);
			cells = [];
		}
	});

	if (cells.length > 0) {
		rows.push(<tr key={`row-${daysInMonth}`}>{cells}</tr>);
	}

	const handlePrevMonth = () => {
		const date = moment(
			`${selectedYear}-${selectedMonth + 1}-01`,
			'YYYY-M-D'
		).subtract(1, 'month');
		setSelectedMonth(date.month());
		setSelectedYear(date.year());
	};

	const handleNextMonth = () => {
		const date = moment(
			`${selectedYear}-${selectedMonth + 1}-01`,
			'YYYY-M-D'
		).add(1, 'month');
		setSelectedMonth(date.month());
		setSelectedYear(date.year());
	};

	return (
		<div className='AttendanceTable'>
			<h2>
				{moment(`${selectedYear}-${selectedMonth + 1}-01`, 'YYYY-M-D').format(
					'MMMM YYYY'
				)}
			</h2>
			<table>
				<thead>
					<tr>
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			<div>
				<button onClick={handlePrevMonth}>Previous Month</button>
				<button onClick={handleNextMonth}>Next Month</button>
			</div>
			<div className='color-guide'>
				<div className='present'>Present</div>
				<div className='absent'>Absent</div>
				<div className='sick'>Sick</div>
				<div className='late'>Late</div>
				<div className='vacation'>Vacation</div>
				<div className='personal'>Personal</div>
			</div>
		</div>
	);
}
