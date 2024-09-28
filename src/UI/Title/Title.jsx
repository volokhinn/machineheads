import React from 'react';
import styles from './Title.module.scss';

const Title = ({ n, children }) => {
  return (
    <div className={styles.title}>
      {n === 1 && <h1>{children}</h1>}
      {n === 2 && <h2>{children}</h2>}
      {n === 3 && <h3>{children}</h3>}
      {n === 4 && <h4>{children}</h4>}
      {n === 5 && <h5>{children}</h5>}
      {n === 6 && <h6>{children}</h6>}
    </div>
  );
};

export default Title;
