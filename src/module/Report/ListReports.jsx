import React, { useState } from 'react';
import EditReport from './EditReport';
import axios from 'axios';

function ListReports({ Reports, control }) {
	const [showReport, setShowReport] = useState();
	const [isEditing, setIsEditing] = useState(false);
	if (!Reports) {
		return (
			<>
				<h2>Loading...</h2>
			</>
		);
	}
	console.log(Reports);
	if (isEditing) {
		return (
			<>
				<EditReport />
			</>
		);
	}
	if (showReport) {
		return showReport;
	}
	function handleSelect(report) {
		return (
			<div className='report'>
				<p className='Title'>{report.title}</p>
				<p className='subject'>{report.subject}</p>
				<p className='author-date'>
					<span className='author'>Author: {report.author}</span>
					<span className='Date'>
						{new Date(report.createdAt).toLocaleString()}
					</span>
				</p>
				<div className='content'>{report.content}</div>
				{control ? (
					<>
						<button onClick={() => setIsEditing(true)}>Edit</button>
						<button
							onClick={() => {
								axios
									.delete(`http://localhost:8080/report/${report.id}`)
									.catch((err) => console.log(err));
								setShowReport();
							}}
						>
							Delete
						</button>
					</>
				) : (
					<></>
				)}
				<button className='back' onClick={() => setShowReport()}>
					Back
				</button>
			</div>
		);
	}

	return (
		<div className='List-Report'>
			{Reports.data.map((report) => {
				return (
					<div
						key={report.id}
						onClick={() => {
							// setIsEditing(true);
							setShowReport(handleSelect(report));
						}}
					>
						<p className='Title'>{report.title}</p>
						<p className='author-date'>
							<span className='author'>Author: {report.author}</span>
							<span className='Date'>
								{new Date(report.createdAt).toLocaleString()}
							</span>
						</p>
					</div>
				);
			})}
			{/* {showReport} */}
		</div>
	);
}

export default ListReports;
