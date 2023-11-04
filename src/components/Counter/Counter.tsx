import React from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => setCount(0);
  return (
    <div className={styles.container}>
      <h2>Counter</h2>
      <p className={styles.count}>{count}</p>
      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>
      <button onClick={handleReset} className={styles.button}>
        Reset
      </button>
      <button onClick={handleDecrement} className={styles.button}>
        -
      </button>
    </div>
  );
};

export default Counter;
