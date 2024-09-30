import React from 'react'
import '../components/css/About2.css';
import about_img from '../image/clg.jpg';
import play1_icon from '../image/play1-icon.jpeg';



const About2 = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play1_icon} alt="" className='play1-icon'/>
        </div>
         <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurtuing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with Our
                university's comprehensive education programs. Our cutting_edge
                curriculum is designed to emppower student with the knowledge,
                skills, and experiences needed to excel in the dynamic field of education. </p>
                <p> With a focus on innovation,hands-on learning, and personalized
                    meantorship,our programs prerpare aspiring educators to make a 
                    meaningful impact  in classrooms, college,and communities.</p>
                 

         </div>
    </div>
  )
}

export default About2
