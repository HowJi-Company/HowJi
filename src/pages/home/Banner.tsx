import React from 'react';
import { Carousel } from 'antd';
import banner1 from 'img/b2.png'
import banner2 from 'img/b3.png'
import banner3 from 'img/b4.png'
import banner4 from 'img/b5.png'

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={banner1} alt="Slide 1" style={{ width: '100%' }} />
      </div>
      <div>
        <img src={banner2} alt="Slide 2" style={{ width: '100%' }} />
      </div>
      <div>
        <img src={banner3} alt="Slide 3" style={{ width: '100%'}} />
      </div>
      <div>
        <img src={banner4} alt="Slide 4" style={{ width: '100%' }} />
      </div>
    </Carousel>
  );
}

export default Banner;
