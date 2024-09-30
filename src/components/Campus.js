import React from 'react';
import './css/Campus.css'; 

import gallery_1 from '../image/gallery_1.jpeg';
import gallery_2 from '../image/gallery_3.jpg';
import gallery_3 from '../image/gallery_2.jpg';
import gallery_4 from '../image/gallery_4.jpg';
import white_arrow from '../image/white_arrow.jpg';

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <button className='btn dark-btn'>
            See more here<img src={white_arrow} alt=""/>
        </button>
    </div>
  )
}

export default Campus;
