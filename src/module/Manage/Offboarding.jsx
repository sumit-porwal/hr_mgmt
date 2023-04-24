import React from 'react';
import useQuery, { URL } from '../useQuery';
import axios from 'axios';

export default function Offboarding() {
	const [value, setValue] = React.useState(0); // integer state
	let employees = useQuery('get', '/employees', {}, [value]);
	if (!employees) {
		return <p>Loading...</p>;
	}
	return (
		<div className='offBoard'>
			{employees.data.map((employee) => (
				<div key={employee.id} className='app-icon'>
					<span>{employee.name}</span>
					<button
						onClick={() => {
							// forceUpdate();
							if (confirm('Are you sure you want to reomve this employee')) {
								axios.delete(`${URL}/employees/${employee.id}`);
								axios.post(`${URL}/activity`, {
									message: `${employee.name} Just left The Team`,
								});
							}
							// forceupdate()
							setValue((value) => value + 1);
							// location.reload();
						}}
					>
						Off Board
					</button>
				</div>
			))}
		</div>
	);
}
