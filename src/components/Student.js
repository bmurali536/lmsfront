import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Student = () => {
  // Define the state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Initialize the navigate function
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    try {
      // Send a POST request to the Django API
      const response = await axios.post('http://127.0.0.1:8000/api/studentlogin/', {
        username: username,
        password: password,
      }, {
        withCredentials: true, // Required for sending cookies and session credentials
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Handle successful login
      console.log(response.data);
      alert('Login successful!');

      // Redirect to the dashboard or another page
      navigate('/Marks/attendancce'); // Navigate to /dashboard route after login
    } catch (err) {
      // Handle error, e.g., 404, 500, etc.
      console.error('Error during login:', err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="student-login">
      <h2>Student Login</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Student;
