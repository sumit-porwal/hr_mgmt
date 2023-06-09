import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { URL } from '../useQuery';

function Shortlist() {
	const [short, setShort] = useState('true');
	const [applicant, SetApplicant] = React.useState();
	React.useEffect(() => {
		const fetchApplicant = async () => {
			const applicant = await axios.get(`${URL}/applicants`);
			SetApplicant(applicant);
		};
		fetchApplicant();
	}, [short]);
	if (!applicant) {
		return <p>Loading...</p>;
	}
	return (
		<div className='applicants'>
			{applicant.data.map((applicant) => (
				<div key={applicant.id} className='app-icon'>
					<span>{applicant.name}</span>
					<button
						onClick={() => {
							setShort((prev) => !prev);
							if (!applicant.Shortlist) {
								axios.patch(`${URL}/applicants/${applicant.id}`, {
									Shortlist: true,
								});
							} else {
								axios.patch(`${URL}/applicants/${applicant.id}`, {
									Shortlist: false,
								});
							}
						}}
						className={applicant.Shortlist ? 'Shortlisted' : 'Shortlist'}
					>
						{applicant.Shortlist ? 'Shortlisted' : 'Shortlist'}
					</button>
					<button
						onClick={() => {
							setShort((prev) => !prev);
							if (confirm('Are you sure you want to reomve this employee')) {
								axios.delete(`${URL}/applicants/${applicant.id}`);
							}
						}}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
}

export default Shortlist;
