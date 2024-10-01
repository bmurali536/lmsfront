import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import '../components/css/Student.css';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // baseURL to your API
  withCredentials: true // Ensure cookies are sent with the request
});

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For showing error message
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    client.post("studentlogin/", { username: email, password: password })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // Redirect to student dashboard or another route on success
          navigate("/student-dashboard");
        } else {
          setErrorMessage("Invalid credentials, please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Login failed. Please try again.");
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
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default StudentLogin;
