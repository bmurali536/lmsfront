import React, { useState } from 'react';
import axios from 'axios';
import '../components/css/Staff.css';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/poststudent/",  // Adjust API endpoint
  withCredentials: true
});

function AddStudent() {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    userId: '',
    password: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/api/poststudent", formData)
      .then((res) => {
        console.log(res);
        alert("Student registered successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to register student");
      });
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
