// import React from 'react';

// const MarksChart = ({marksPromise}) => {
//     const marksDataRes= use(marksPromise)
//     console.log(marksData);
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default MarksChart;

import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    marksPromise
      .then(res => {
        const data = res.data || res;
        setMarksData(data);
      })
      .catch(error => {
        console.error("Error loading marks data:", error);
      });
  }, [marksPromise]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Marks Data</h2>
      <ul>
        {Array.isArray(marksData) && marksData.map(student => (
          <li key={student.student_id}>
            {student.name}: Physics - {student.physics}, Chemistry - {student.chemistry}, Math - {student.math}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default MarksChart;
