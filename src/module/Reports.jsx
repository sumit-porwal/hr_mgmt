import React from 'react';
import ReportComponent from './Reportcomponent';
const Report = ({ name, data }) => {
  return(
    <ReportComponent/>
  )
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