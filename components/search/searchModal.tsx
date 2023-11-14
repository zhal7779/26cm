import styles from './searchModal.module.css';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

type Props = {
  clickOnModal: () => void;
};

const SearchModal = ({ clickOnModal }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={clickOnModal}>
        <HiXMark />
      </div>
      <div className={styles.content}>
        <form className={styles.content_input}>
          <input type="text" className={styles.input} placeholder="Search" />
          <div className={styles.input_button}>
            <PiMagnifyingGlassBold />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
