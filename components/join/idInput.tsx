import React, { useState, useEffect } from 'react';
import styles from './join.module.css';

type Props = {
  emailCheck: boolean;
  handleEmailCheck: (email: string) => void;
};

const IdInput = ({ emailCheck, handleEmailCheck }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleEmailCheck(e.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="아이디(이메일) 입력"
        onChange={(e) => handleChange(e)}
      />
      {!emailCheck && (
        <p className={styles.error_text}>이메일 형식이 올바르지 않습니다.</p>
      )}
    </>
  );
};

export default IdInput;
