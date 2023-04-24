import React from 'react';
import EditProfile from './EditProfile';

function Employee_Profile({ employee }) {
	const { name, email, phone, address, department, jobTitle } = employee.data;
	const [Editing, setEditing] = React.useState(false);
	if (Editing) {
		return (
			<>
				<EditProfile employee={employee.data} />
				<button onClick={() => setEditing(false)}>Back</button>
			</>
		);
	}
	return (
		<>
			<div className='employee-profile'>
				<h2>{name}</h2>

				<div>
					<p>Email</p> <p>{email}</p>
				</div>
				<div>
					<p>Phone</p> <p> {phone}</p>
				</div>
				<div>
					<p>Address </p> <p>{address}</p>
				</div>
				<div>
					<p>Department</p> <p> {department}</p>
				</div>
				<div>
					<p>Job Title</p> <p>{jobTitle}</p>
				</div>
				{/* <p>Email : {email}</p> */}
			</div>
			<button
				style={{ color: 'white', width: '20vw', margin: '10px' }}
				onClick={() => setEditing(true)}
			>
				Edit
			</button>
		</>
	);
}

export default Employee_Profile;
