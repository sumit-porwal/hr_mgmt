import React from 'react';

const PayrollComponent = ({ year, month, component }) => {
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const basicSalary = 30000;
	const hra = 0.5 * basicSalary;
	const da = 0.4 * basicSalary;
	const ca = 2000;
	const sa = 0.1 * basicSalary;
	const pf = 0.12 * basicSalary;
	const esic = 0.0175 * basicSalary;
	const gratuity = 0.0481 * basicSalary;
	const pt = 200;
	const tds = 0.1 * basicSalary;

	switch (component) {
		case 'Basic Salary':
			return <span>{basicSalary}</span>;
		case 'House Rent Allowance':
			return <span>{hra}</span>;
		case 'Dearness Allowance':
			return <span>{da}</span>;
		case 'Conveyance Allowance':
			return <span>{ca}</span>;
		case 'Special Allowance':
			return <span>{sa}</span>;
		case 'Provident Fund':
			return <span>{pf * daysInMonth}</span>;
		case 'Employee State Insurance':
			return <span>{esic * daysInMonth}</span>;
		case 'Gratuity':
			return <span>{gratuity * daysInMonth}</span>;
		case 'Professional Tax':
			return <span>{pt}</span>;
		case 'Tax Deducted at Source':
			return <span>{tds}</span>;
		default:
			return null;
	}
};

export default PayrollComponent;
