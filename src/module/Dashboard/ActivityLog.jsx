import React, { useState } from 'react';
import useQuery from '../useQuery';

const ActivityLog = ({ activity }) => {
	// const activity = useQuery('get','/activity');
	if (!activity) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	}
	console.log(activity);
	const [loadedItems, setLoadedItems] = useState([]);
	const [numItems, setNumItems] = useState(5);

	return (
		<div className='activity-log'>
			<h2>Activity Log</h2>
			<ul className='timeline'>
				{activity.data
					// .reverse()
					.slice(0, numItems)
					.map((log) => (
						<li key={log.id}>
							<p>
								<span>{new Date(log.createdAt).toLocaleString()}</span> :{' '}
								{log.message}
							</p>
						</li>
					))}
			</ul>
			<button onClick={() => setNumItems(numItems + 10)}>Load More</button>
		</div>
	);
};

export default ActivityLog;
