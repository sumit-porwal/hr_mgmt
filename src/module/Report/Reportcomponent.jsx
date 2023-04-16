import React, { useState } from 'react';

const ReportComponent = () => {
	const [reportData, setReportData] = useState(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];

		const reader = new FileReader();

		reader.onload = () => {
			const data = JSON.parse(reader.result);
			setReportData(data);
		};

		reader.readAsText(file);
	};

	return (
		<div>
			<input type='file' onChange={handleFileUpload} />
			{reportData && <pre>{JSON.stringify(reportData, null, 2)}</pre>}
		</div>
	);
};
export default ReportComponent;
