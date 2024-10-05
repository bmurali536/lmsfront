import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/Staff.css';

function Dashboard() {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleAddStudent = () => {
    navigate('/staff/add-student'); // Using navigate instead of history.push
  };

  const handleViewMarks = () => {
    navigate('/staff/marks');
  };

  const handleViewAttendance = () => {
    navigate('/staff/attendance');
  };

  return (
    <div className="dashboard-container">
      <h2>Staff Dashboard</h2>
      <div className="dashboard-options">
        <button onClick={handleAddStudent}>Add Student</button>
        <button onClick={handleViewMarks}>Marks</button>
        <button onClick={handleViewAttendance}>Attendance</button>
      </div>
    </div>
  );
}

export default Dashboard;
