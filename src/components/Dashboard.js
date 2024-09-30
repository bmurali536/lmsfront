import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleMarksClick = () => {
    navigate('/marks');
  };

  const handleAttendanceClick = () => {
    navigate('/attendance');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Student Dashboard</h2>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleMarksClick}>View Marks</button>
        <button className="btn btn-secondary" onClick={handleAttendanceClick}>View Attendance</button>
      </div>
    </div>
  );
};

export default Dashboard;
