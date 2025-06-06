import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const resultData = [
  {
    "student_id": 1,
    "name": "Mehedi",
    "physics": 95,
    "chemistry": 92,
    "math": 96
  },
  {
    "student_id": 2,
    "name": "Ayesha",
    "physics": 88,
    "chemistry": 90,
    "math": 85
  },
  {
    "student_id": 3,
    "name": "Rahul",
    "physics": 78,
    "chemistry": 80,
    "math": 82
  },
  {
    "student_id": 4,
    "name": "Sofia",
    "physics": 91,
    "chemistry": 93,
    "math": 97
  },
  {
    "student_id": 5,
    "name": "Tariq",
    "physics": 85,
    "chemistry": 87,
    "math": 90
  },
  {
    "student_id": 6,
    "name": "Anwar",
    "physics": 79,
    "chemistry": 83,
    "math": 89
  },
  {
    "student_id": 7,
    "name": "Nina",
    "physics": 92,
    "chemistry": 94,
    "math": 88
  },
  {
    "student_id": 8,
    "name": "Karim",
    "physics": 80,
    "chemistry": 75,
    "math": 78
  },
  {
    "student_id": 9,
    "name": "Fatima",
    "physics": 90,
    "chemistry": 85,
    "math": 91
  },
  {
    "student_id": 10,
    "name": "Riaz",
    "physics": 94,
    "chemistry": 89,
    "math": 95
  },
];

const ResultCharts = () => {
  return (
    <div>
      <LineChart width={600} height={400} data={resultData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
        <Line type="monotone" dataKey="physics" stroke="red" />
      </LineChart>
    </div>
  );
};

export default ResultCharts;
