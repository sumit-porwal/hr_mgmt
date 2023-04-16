import React from 'react';
import Calendar from 'react-calendar';

const datesToAddClassTo = ['10/4/2023', '13/4/2023', '15/4/2023'];

// function tileClassName({ date, view }) {
// 	// Add class to tiles in month view only
// 	if (view === 'month') {
// 		// Check if a date React-Calendar wants to check is on the list of dates to add class to
// 		// if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
// 		return 'myClassName';
// 	}
// }

function Attendance({ attendanceData }) {
	return <AttendanceTable attendanceData={attendanceData} />;
}

export default Attendance;
