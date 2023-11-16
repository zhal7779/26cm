import React, { useState } from 'react';
import styles from './join.module.css';
import JoinButton from './joinButton';

type Props = {
  changeMenu: (menu: string) => void;
};

const IdInput = ({ changeMenu }: Props) => {
  const emailRegEx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  const [inputValue, setInputValue] = useState<string>('');
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setEmailCheck(emailRegEx.test(e.target.value));
  };

  return (
    <>
      <div className={styles.content_input}>
        <input
          className={styles.input}
          type="text"
          placeholder="아이디(이메일) 입력"
          onChange={(e) => handleChange(e)}
        />
        {!emailCheck && (
          <p className={styles.error_text}>이메일 형식이 올바르지 않습니다.</p>
        )}
      </div>
      <JoinButton
        check={emailCheck}
        changeMenu={changeMenu}
        menu={'password'}
      />
    </>
  );
};

export default IdInput;
