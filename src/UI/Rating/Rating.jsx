import getWordEnding from '../../helpers/getWordEnding';
import styles from './Rating.module.scss';

const Rating = ({ rating, reviewsCount }) => {
  const MAX_STARS = 5;

  const stars = Array.from({ length: MAX_STARS }, (_, index) => {
    const fillColor = index < rating ? '#F3BE00' : '#BFBFBF';
    return (
      <svg
        key={index}
        className={styles.star}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fillColor}
        width="24px"
        height="24px">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
      </svg>
    );
  });

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>{stars}</div>
      <div className={styles.reviews}>
        {reviewsCount} {getWordEnding(reviewsCount, 'отзыв', 'отзыва', 'отзывов')}
      </div>
    </div>
  );
};

export default Rating;
