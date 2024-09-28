import React from 'react';
import styles from './CatalogSliderCard.module.scss';

import Rating from '../../UI/Rating/Rating';
import NumberInput from '../../UI/NumberInput/NumberInput';
import heart from '../../assets/icons/heart.svg';
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

  console.log(process.env.PUBLIC_URL + image);

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
              <NumberInput />
              <a href="/" className={`${styles.button} ${styles.button_accent}`}>
                В корзину
              </a>
              <button className={`${styles.button} ${styles.button_heart}`}>
                <img src={heart} alt="heart" />
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
