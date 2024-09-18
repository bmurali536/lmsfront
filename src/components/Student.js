import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/css/principal.css'; // Ensure this file exists

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function Student() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    client.get("/api/user")
      .then(res => setCurrentUser(true))
      .catch(error => setCurrentUser(false));
  }, []);

  const update_form_btn = () => {
    setRegistrationToggle(!registrationToggle);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    client.post("/api/register", { firstName, lastName, email, username, password })
      .then(() => {
        client.post("/api/login", { email, password })
          .then(() => setCurrentUser(true));
      });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    client.post("/api/login", { email, password })
      .then(() => setCurrentUser(true));
  };

  const submitLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true })
      .then(() => setCurrentUser(false));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {currentUser ? (
                <Button onClick={submitLogout} variant="light">Log out</Button>
              ) : (
                <Button id="form_btn" onClick={update_form_btn} variant="light">
                  {registrationToggle ? 'Log in' : 'Register'}
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="center">
        {currentUser ? (
          <h2>You're logged in!</h2>
        ) : (
          <div className="form-container">
            <Form onSubmit={registrationToggle ? submitRegistration : submitLogin}>
              {registrationToggle ? (
                <>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </>
              )}

              <div className="button-group">
                <Button variant="primary" type="submit" className="submit-btn">
                  {registrationToggle ? 'Register' : 'Sign In'}
                </Button>
              </div>
            </Form>

            <div className="toggle-link">
              <Button variant="link" onClick={update_form_btn}>
                {registrationToggle ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Student;
