import React, { useState } from 'react';
import moment from 'moment';
import PayrollComponent from './PayrollComponent';

const PayrollTable = () => {
	const [selectedYear, setSelectedYear] = useState(moment().year());
	const months = moment.months();
	const payrollComponents = [
		'Basic Salary',
		// 'House Rent Allowance',
		// 'Dearness Allowance',
		// 'Conveyance Allowance',
		// 'Special Allowance',
		'Provident Fund',
		// 'Employee State Insurance',
		// 'Gratuity',
		// 'Professional Tax',
		'Tax Deducted at Source',
	];

	const handleYearChange = (e) => {
		setSelectedYear(parseInt(e.target.value));
	};

	return (
		<div className='payroll'>
			<div>
				<label htmlFor='year-select'>Select a year:</label>
				<select
					id='year-select'
					value={selectedYear}
					onChange={handleYearChange}
				>
					{Array.from({ length: 10 }, (v, i) => selectedYear - 5 + i).map(
						(year, index) => (
							<option key={index} value={year}>
								{year}
							</option>
						)
					)}
				</select>
			</div>
			<table>
				<thead>
					<tr>
						<th>Month</th>
						{payrollComponents.map((component, index) => (
							<th key={index}>{component}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{months.map((month, index) => (
						<tr key={index}>
							<td>{month}</td>
							{payrollComponents.map((component, index) => (
								<td key={index}>
									<PayrollComponent
										year={selectedYear}
										month={index}
										component={component}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PayrollTable;
