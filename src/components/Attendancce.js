import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form } from 'react-bootstrap';
import '../components/css/Staff.css'; // Ensure the CSS file exists

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/teacherlogin/"
});

function Staff() {
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [userId, setUserId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    client.get("/api/user")
      .then(res => setCurrentUser(true))
      .catch(error => setCurrentUser(false));
  }, []);

  const submitLogin = (e) => {
    e.preventDefault();
    client.post("/api/login", { email, password })
      .then(() => setCurrentUser(true));
  };

  const submitStudentRegistration = (e) => {
    e.preventDefault();
    const studentData = { studentId, studentName, userId, password, mobileNumber };
    client.post("/api/register_student", studentData)
      .then(response => {
        alert('Student registered successfully');
      })
      .catch(error => {
        console.error('Error during student registration', error);
      });
  };

  const goToMarks = () => {
    // Navigate to marks page
    console.log('Navigating to marks page');
  };

  const goToAttendance = () => {
    // Navigate to attendance page
    console.log('Navigating to attendance page');
  };

  return (
    <Container className="staff-container">
      {!currentUser ? (
        <div className="login-form">
          <h2>Staff Login</h2>
          <Form onSubmit={submitLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Login
            </Button>
          </Form>
        </div>
      ) : (
        <div className="student-registration-form">
          <h2>Add Student Details</h2>
          <Form onSubmit={submitStudentRegistration}>
            <Form.Group controlId="formStudentId">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student ID"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={e => setMobileNumber(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Register Student
            </Button>
          </Form>

          <div className="navigation-buttons">
            <Button variant="secondary" onClick={goToMarks} className="marks-btn">
              Marks
            </Button>
            <Button variant="secondary" onClick={goToAttendance} className="attendance-btn">
              Attendance
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Staff;
