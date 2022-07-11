import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.min.css';
import './styles.scss';

SwiperCore.use([Navigation, Thumbs]);

const SingleProductSlider = ({ images }) => {
  let slides = [];
  images.map((image, index) =>
    slides.push(
      <SwiperSlide key={index}>
        <img src={image.image.url} />
      </SwiperSlide>
    )
  );

  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      slidesPerView={1}
      className="main-slider"
    >
      {slides}
    </Swiper>
  );
};

SingleProductSlider.propTypes = {
  images: PropTypes.array,
};

export default SingleProductSlider;
