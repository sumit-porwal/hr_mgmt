import React from 'react';
import Query from '../Query';

const ActivityLog = ({ activity }) => {
	// const activity = Query('get','/activity');
	if (!activity) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	}
	console.log(activity);
	return (
		<div className='activity-log'>
			<h2>Activity Log</h2>
			<ul>
				{activity.data.map((log) => (
					<li key={log.id}>
						<p>
							<span>{new Date(log.createdAt).toLocaleString()}</span> :{' '}
							{log.message}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ActivityLog;
