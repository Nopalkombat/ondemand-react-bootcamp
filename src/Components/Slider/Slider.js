/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Slides from '../../MockData/featured-banners.json';
import './styles.scss';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const sliderLenght = Slides.results.length;
  const slides = Slides.results;

  const nextSlide = () => {
    setCurrent(current === sliderLenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderLenght - 1 : current - 1);
  };

  return (
    <div className="Slider__gallery">
      <button type="button" onClick={prevSlide} className="Slider__buttons left-button">
        &#60;
      </button>
      <button type="button" onClick={nextSlide} className="Slider__buttons right-button">
        &#62;
      </button>
      {slides.map((slide, index) => (
        <div key={index} className={index === current ? 'slide-active' : 'slide'}>
          {index === current && (
            <div
              style={{ backgroundImage: 'url(' + slide.data.main_image.url + ')' }}
              className="Slider__img-slider"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
