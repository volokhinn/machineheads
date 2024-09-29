import styles from './CatalogSlider.module.scss';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CatalogSliderCard from '../CatalogSliderCard/CatalogSliderCard';

import chevron from '../../assets/icons/chevron__left.svg';

const CatalogSlider = ({ data }) => {
  const swiperRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__slider}>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={5}
          autoHeight
          navigation={{
            nextEl: `.${styles.slider__buttons_next}`,
            prevEl: `.${styles.slider__buttons_prev}`,
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
              slidesPerView: 4.1,
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
      <div className={styles.wrapper__footer}>
        <div className={styles.slider__buttons}>
          <button className={styles.slider__buttons_prev}>
            <img src={chevron} alt="arrow" />
          </button>
          <button className={styles.slider__buttons_next}>
            <img src={chevron} alt="arrow" />
          </button>
        </div>
        <a href="/" className={styles.slider__buttons_accent}>
          Смотреть все
        </a>
      </div>
    </div>
  );
};

export default CatalogSlider;
