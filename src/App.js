import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Principal from './components/Principal';
import Staff from './components/Staff';
import Student from './components/Student';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      {/* Navbar should be outside of Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />

        <Route path="/Principal" element={<Principal />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Student" element={<Student />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
