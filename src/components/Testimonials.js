import React, { useRef } from 'react';
import './css/testimonials.css';

import next_icon from '../image/back_button3.jpg';
import back_icon from '../image/next_button1.jpg';
import user_1 from '../image/student1.jpeg';
import user_2 from '../image/student3.jpg';
import user_3 from '../image/student2.jpeg';
import user_4 from '../image/progrom_icon_1.jpeg';

const Testimonials = () => {
    const slider = useRef();
    let tx = -50;  // Start at -50 to center the first slide

    const slideBackward = () => {
        if (tx > -100) {  // Limit the backward movement
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;  // Use correct template literal syntax
    };

    const slideForward = () => {
        if (tx < 0) {  // Limit the forward movement
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;  // Correct template literal syntax
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt=''/>
                                <div>
                                    <h3>Willian Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt=''/>
                                <div>
                                    <h3>Willian Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt=''/>
                                <div>
                                    <h3>Willian Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt=''/>
                                <div>
                                    <h3>Willian Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
