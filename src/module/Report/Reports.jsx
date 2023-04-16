import React, { useState } from 'react';
import ReportComponent from './Reportcomponent';
import NewReport from './NewReport';
import ListReports from './ListReports';
const Report = ({ Report, control }) => {
	const [isCreating, setIsCreating] = useState(false);

	if (isCreating) {
		return (
			<>
				<NewReport />
				<button onClick={() => setIsCreating(false)}>Back</button>
			</>
		);
	}

	return (
		<>
			{control ? (
				<button className='new-report-btn' onClick={() => setIsCreating(true)}>
					New Report
				</button>
			) : (
				<></>
			)}
			<ListReports Reports={Report} control={control} />
			{/* <ReportComponent/> */}
		</>
	);
	// return (
	//   <div className="report">
	//     <h3>{name}</h3>
	//     <table>
	//       <thead>
	//         <tr>
	//           {Object.keys(data[0]).map((key, index) => (
	//             <th key={index}>{key}</th>
	//           ))}
	//         </tr>
	//       </thead>
	//       <tbody>
	//         {data.map((item, index) => (
	//           <tr key={index}>
	//             {Object.values(item).map((value, index) => (
	//               <td key={index}>{value}</td>
	//             ))}
	//           </tr>
	//         ))}
	//       </tbody>
	//     </table>
	//   </div>
	// );
};

export default Report;
