import React from 'react';

function Employee_Profile({ employee }) {
	const { name, email, phone, address, department, jobTitle } = employee.data;

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
		</>
	);
}

export default Employee_Profile;
