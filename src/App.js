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
import Program from './components/Program';
import Title from './components/Title';
import About2 from './components/About2';
import Campus from './components/Campus';
import Dashboard from './components/Dashboard';
import Marks from './components/Marks';
 // import Attendance from './components/Attendance';


 
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marks" element={<Marks />} />
        {/* <Route path="/attendance" element={<Attendance />} /> */}
 
 
      </Routes>
       {/* <div className='container'> 
      <Title subTitle='Our PROGRAM' title='What WE offer'/>
      <Program/>  
      <About2/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      </div> */}
      <Footer/>
    </Router>
  );
};

export default App;
