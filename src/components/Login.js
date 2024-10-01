import React, { useState } from 'react';
// import './LoginPage.css';
import '../components/css/login.css';
 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // default role is student

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Based on role (student or teacher), you can send request to respective login API
    const loginUrl = role === 'student' ? '/studentlogin' : '/teacherlogin';
    
    const loginData = {
      uname: username,
      pwd: password,
    };

    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle successful login
          console.log('Login successful');
        } else {
          // Handle error
          console.log('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{role === 'student' ? 'Student Login' : 'Teacher Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
