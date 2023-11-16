import React from 'react';
import styles from './join.module.css';
import { useRouter } from 'next/router';

type Props = {
  check: boolean;
  changeMenu: (menu: string) => void;
  menu: string;
};
const JoinButton = ({ check, changeMenu, menu }: Props) => {
  const router = useRouter();
  const handleClickNext = () => {
    if (check) changeMenu(menu);

    if (menu === 'complete' && check) router.push('/join/complete');
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
