import styles from './CatalogSlider.module.scss';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CatalogSliderCard from '../CatalogSliderCard/CatalogSliderCard';

const CatalogSlider = ({ data }) => {
  const swiperRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={5}
        autoHeight
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2.1,
          },
          768: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4.7,
          },
        }}
        modules={[Navigation]}>
        {data.wheels.map((product) => (
          <SwiperSlide key={product.id}>
            <CatalogSliderCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CatalogSlider;
