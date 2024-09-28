import React from 'react';
import styles from './CatalogSliderCard.module.scss';

import wheel1 from '../../assets/img/wheel1.png';
import gift from '../../assets/icons/offers/gift.svg';
import discount from '../../assets/icons/offers/discount.svg';
import good from '../../assets/icons/offers/good.svg';
import safe from '../../assets/icons/offers/safe.svg';
import star from '../../assets/icons/offers/star.svg';
import mud from '../../assets/icons/wheeltypes/mud.svg';
import studded from '../../assets/icons/wheeltypes/studded.svg';
import winter from '../../assets/icons/wheeltypes/winter.svg';
import heart from '../../assets/icons/heart.svg';

import Rating from '../../UI/Rating/Rating';
import NumberInput from '../../UI/NumberInput/NumberInput';

const CatalogSliderCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__top} style={{ backgroundImage: `url(${wheel1})` }}>
        <div className={styles.offers}>
          <div className={styles.offers__item}>
            <img src={star} alt="star" />
          </div>
          <div className={styles.offers__item}>
            <img src={safe} alt="safe" />
          </div>
          <div className={styles.offers__item}>
            <img src={discount} alt="discount" />
          </div>
          <div className={styles.offers__item}>
            <img src={gift} alt="gift" />
          </div>
          <div className={styles.offers__item}>
            <img src={good} alt="good" />
          </div>
        </div>
      </div>
      <div className={styles.wrapper__bottom}>
        <div className={styles.title}>
          205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V
        </div>
        <div className={styles.rating}>
          <Rating rating={5} reviewsCount={5} />
        </div>
        <div className={styles.types}>
          <div className={styles.types__item}>
            <img src={winter} alt="winter" />
            Зимняя
          </div>
          <div className={styles.types__item}>
            <img src={studded} alt="studded" />
            Шипованная
          </div>
          <div className={styles.types__item}>
            <img src={mud} alt="mud" />
            Грязевая
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.price__old}>6 750 ₽</div>
          <div className={styles.price__new}>6 750 ₽</div>
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
            <button className={`${styles.button} ${styles.button_stroke}`}>Купить в 1 клик</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSliderCard;
