import React from 'react';
import './css/program.css'; 
import program_1 from '../image/program1.jpg';
import program_2 from '../image/program2.jpg';
import program_3 from '../image/program3.jpg';
import program_icon_1 from '../image/program_icon_3.jpeg';
import program_icon_2 from '../image/progrom_icon_2.jpeg'
import program_icon_3 from '../image/progrom_icon_2.jpeg'

const Program = () => {
    return (
        
        <div className='programs'>
            <div className='program'>
                <img src={program_1} alt='Program 1' />
                <div className='caption'>
                    <img src={program_icon_1} alt=""/>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt='Program 2' />
                <div className='caption'>
                    <img src={program_icon_2} alt=""/>
                    <p>Masters Degree</p>
                </div>
             </div> 
            <div className='program'>
                <img src={program_3} alt='Program 3' />
                <div className='caption'>
                    <img src={program_icon_3} alt=""/>
                    <p>Post Degree</p>
                </div>
             </div> 
        </div>
    );
}

export default Program;
