import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Staff = () => {
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
      const response = await axios.post('http://127.0.0.1:8000/api/teacherlogin/', {
          username: username,
          password: password,
      }, {
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json',
          }
      });
  
      console.log(response.data); // Log response for debugging
      alert('Login successful!');
      navigate('/Marks/attendancce');
  } catch (err) {
      console.error('Error during login:', err.response ? err.response.data : err.message);
      setError('Login failed. Please check your credentials and try again.');
  }
  
  };

  return (
    <div className="student-login">
      <h2>Teacher Login</h2>

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
      </form>    </div>
  );
};

export default Staff;
