import React, { useState, useEffect } from 'react';
import styles from './CatalogSliderCard.module.scss';

import Rating from '../../UI/Rating/Rating';
import NumberInput from '../../UI/NumberInput/NumberInput';
import formatNumber from '../../helpers/formatNumber';

const offerIcons = {
  star: require('../../assets/icons/offers/star.svg').default,
  safe: require('../../assets/icons/offers/safe.svg').default,
  discount: require('../../assets/icons/offers/discount.svg').default,
  gift: require('../../assets/icons/offers/gift.svg').default,
  good: require('../../assets/icons/offers/good.svg').default,
};

const typeIcons = {
  winter: require('../../assets/icons/wheeltypes/winter.svg').default,
  studded: require('../../assets/icons/wheeltypes/studded.svg').default,
  mud: require('../../assets/icons/wheeltypes/mud.svg').default,
};

const CatalogSliderCard = ({ product }) => {
  const { title, image, offers, rating, types, price } = product;

  // Состояние для ширины экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Обновляем ширину экрана при изменении размера окна
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.wrapper__top}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}>
        <div className={styles.offers}>
          {offers.map((offer, index) => (
            <div key={index} className={styles.offers__item}>
              <img src={offerIcons[offer]} alt={offer} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapper__bottom}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.rating}>
            <Rating rating={rating.value} reviewsCount={rating.reviewsCount} />
          </div>
          <div className={styles.types}>
            {types.map((type, index) => (
              <div key={index} className={styles.types__item}>
                <img src={typeIcons[type]} alt={type} />
                {type === 'winter' ? 'Зимняя' : type === 'studded' ? 'Шипованная' : 'Грязевая'}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.price}>
            <div className={styles.price__old}>{formatNumber(price.oldPrice)} ₽</div>
            <div className={styles.price__new}>{formatNumber(price.newPrice)} ₽</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttons__row}>
              {windowWidth >= 1024 && <NumberInput />}
              <a href="/" className={`${styles.button} ${styles.button_accent}`}>
                В корзину
              </a>
              <button className={`${styles.button} ${styles.button_heart}`}>
                <svg
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.34473 8.2278C1.34473 4.72915 3.70537 1.81757 6.9159 1.81741H6.91615C9.09529 1.81751 10.9272 3.03837 11.6396 3.74658L12.3446 4.44755L13.0497 3.74655C13.762 3.0383 15.594 1.81741 17.7733 1.81741C20.9838 1.81741 23.3447 4.72901 23.3447 8.2278C23.3447 11.2309 22.1822 13.3335 20.1799 15.238C18.4372 16.8957 16.1179 18.353 13.3793 20.0737C13.0408 20.2864 12.6958 20.5031 12.3448 20.7248C11.9932 20.5028 11.6477 20.2857 11.3087 20.0727C8.57081 18.3523 6.25204 16.8953 4.50957 15.2379C2.50732 13.3334 1.34473 11.2309 1.34473 8.2278Z"
                    stroke="#3A3A3A"
                    strokeWidth="2"
                    className={styles.button_heartPath}
                  />
                </svg>
              </button>
            </div>
            <div className={styles.buttons__row}>
              <button className={`${styles.button} ${styles.button_stroke}`}>
                Купить в 1 клик
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSliderCard;
