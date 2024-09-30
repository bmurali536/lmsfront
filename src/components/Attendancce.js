 // src/components/Attendance.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/attendance/')
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendanceData.map((attendance, index) => (
          <li key={index}>
            {attendance.date}: {attendance.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
