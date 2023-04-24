import React, { useState, useEffect } from 'react';
import EditReport from './EditReport';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from '../useQuery';
function ListReports({ Reports, control }) {
	const [showReport, setShowReport] = useState();
	const [selectedReport, setSelectedReport] = useState();
	const [isEditing, setIsEditing] = useState(true);
	const navigate = useNavigate();

	if (!Reports) {
		return (
			<>
				<h2>Loading...</h2>
			</>
		);
	}
	console.log(Reports);
	if (!isEditing) {
		return (
			<>
				<EditReport Report={selectedReport} setIsEditing={setIsEditing} />
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
						<button
							onClick={() => {
								setIsEditing(false);
								setSelectedReport(report);
							}}
						>
							Edit
						</button>
						<button
							onClick={() => {
								axios
									.delete(`${URL}/report/${report.id}`)
									.catch((err) => console.log(err));
								navigate('/Profile');
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
							setIsEditing(true);
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
