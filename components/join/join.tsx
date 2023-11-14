import React, { useState } from 'react';
import styles from './join.module.css';
import IdInput from './idInput';

const Join = () => {
  const emailRegEx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  const handleEmailCheck = (email: string) => {
    setEmailCheck(emailRegEx.test(email));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>간편가입</h2>
      <div className={styles.content}>
        <h3 className={styles.content_title}>
          로그인에 사용할
          <br />
          아이디를 입력해주세요.
        </h3>
        <div className={styles.content_input}>
          <IdInput
            emailCheck={emailCheck}
            handleEmailCheck={handleEmailCheck}
          />
        </div>
      </div>

      <button className={emailCheck ? styles.pass_button : styles.button}>
        다음
      </button>
    </div>
  );
};

export default Join;
