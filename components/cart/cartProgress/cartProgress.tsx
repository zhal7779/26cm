import React, { useState } from 'react';
import styles from './cartProgress.module.css';
import { IoIosArrowForward } from 'react-icons/io';

const CartProgress = () => {
  const [progress, setProgress] = useState<number>(1);
  return (
    <div className={styles.container}>
      <ol className={styles.content}>
        <li>
          <span className={progress === 1 ? styles.active_progress : ''}>
            01 SHOPPING BAG
          </span>
          <IoIosArrowForward className={styles.icon} />
        </li>
        <li>
          <span className={progress === 2 ? styles.active_progress : ''}>
            02 ORDER
          </span>
          <IoIosArrowForward className={styles.icon} />
        </li>
        <li>
          <span className={progress === 3 ? styles.active_progress : ''}>
            03 ORDER CONFIRMED
          </span>
        </li>
      </ol>
    </div>
  );
};

export default CartProgress;
