import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../../../layout/Header';

const SliderCarousel = () => {
  const settings = {
    dots: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };


  const slidesTexts = [
    <div key={1} id='slideText1' className="slide-text">
      <h1>ASUS Rog</h1>
      <h2>MAXIMUS IX</h2>
      <p>Intel Z270 ATX gaming motherboard with Aura Sync RGB LEDs, DDR4 4133MHz, <br />
        dual M.2 , USB 3.1 front-panel connector and type - A/C</p>
      <span>
        <button id='btn-slide1'>SHOP NOW</button>
        $499.00
      </span>
    </div>,

    <div key={2} className="slide-text">Bu birinci slaytın metni</div>,
    <div key={3} id='slideText1' className="slide-text">
      <h1>ASUS Rog</h1>
      <h2>MAXIMUS IX</h2>
      <p>Intel Z270 ATX gaming motherboard with Aura Sync RGB LEDs, DDR4 4133MHz, <br />
        dual M.2 , USB 3.1 front-panel connector and type - A/C</p>
      <span>
        <button id='btn-slide1'>SHOP NOW</button>
        $499.00
      </span>
    </div>
  ];

  return (
    <div className="slider-container">
      <Header />
      <Slider {...settings}>

        <div style={{ backgroundColor: '#eee', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
          {slidesTexts[0]}
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-1.jpg" alt="" />
        </div>

        <div style={{ backgroundColor: '#ccc', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-2.jpg" alt="" />
        </div>

        <div style={{ backgroundColor: '#aaa', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
          {slidesTexts[2]}
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};


export default SliderCarousel
