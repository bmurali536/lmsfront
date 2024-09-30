import React, { useState } from 'react';
import axios from 'axios';
import '../components/css/Student.css';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true
});

function Student() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/api/student_login", { username: email, password })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert("Login failed: " + err.response.data.error);
      });
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Student;
