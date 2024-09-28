import React, { useState } from 'react';
import styles from './NumberInput.module.scss';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';

const NumberInput = ({ min = 0, max = 10, step = 1, initialValue = 4 }) => {
  const [value, setValue] = useState(initialValue);

  const handleDecrement = () => {
    if (value > min) {
      setValue((prevValue) => prevValue - step);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      setValue((prevValue) => prevValue + step);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleDecrement} className={styles.button_decrement}>
        <img src={minus} alt="minus" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        className={styles.input}
        min={min}
        max={max}
      />
      <button onClick={handleIncrement} className={styles.button_increment}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default NumberInput;
