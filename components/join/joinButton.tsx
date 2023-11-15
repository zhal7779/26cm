import React from 'react';
import styles from './join.module.css';

type Props = {
  check: boolean;
  changeMenu: (menu: string) => void;
};
const JoinButton = ({ check, changeMenu }: Props) => {
  const handleClickNext = () => {
    if (check) changeMenu('password');
  };

  return (
    <>
      <button
        className={check ? styles.pass_button : styles.button}
        onClick={handleClickNext}
      >
        다음
      </button>
    </>
  );
};

export default JoinButton;
