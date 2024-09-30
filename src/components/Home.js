import React from 'react'; 
import '../components/css/Home.css';
import Title from './Title';
import Program from './Program';
import Campus from './Campus';
import About2 from './About2';
import Testimonials from './Testimonials';
import Contact from './Contact';
const Home = () => {
  return (
    <>
    <div className='school'> 
    <div>
      <h1>We Ensure better education for a better world</h1>
      <p> Our  cutting-edge curriculum is designed to empower students 
        with the knowlege, skills, and experiences needed to excel in 
        the dynamic field of education
      </p>
      <button className='btn'>Explore more</button>
    </div>
    <div className='program'> 
      </div>
      <div className='container'> 
      
      </div>
      
    </div>
    <Title subTitle='Our PROGRAM' title='What WE offer'/>
    <Program/>  
    <About2/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='What student sa'/>
    <Testimonials/>
    <Title subTitle='Contact us' title='Get in Touch'/>
    <Contact/>
    </>
  );
};

export default Home;
