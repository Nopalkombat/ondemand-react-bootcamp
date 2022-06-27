/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import './styles.scss';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  const banners = useFeaturedBanners();
  useEffect(() => {
    const banners2 = banners.data.results;
    if (banners2) {
      setSlides({ results: [...banners2], slidesLength: banners2.length });
    }
  }, [banners]);

  const nextSlide = () => {
    setCurrent(current === slides.slidesLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.slidesLength - 1 : current - 1);
  };

  if (slides.length == 0) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  return (
    <div className="Slider__gallery">
      <button type="button" onClick={prevSlide} className="Slider__buttons left-button">
        &#60;
      </button>
      <button type="button" onClick={nextSlide} className="Slider__buttons right-button">
        &#62;
      </button>
      {slides.results.map((slide, index) => (
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
