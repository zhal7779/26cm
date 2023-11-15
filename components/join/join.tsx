import React, { useState } from 'react';
import styles from './join.module.css';
import IdInput from './idInput';
import PwInput from './pwInput';

const Join = () => {
  const [menu, setMenu] = useState<string>('id');

  const changeMenu = (menu: string) => {
    setMenu(menu);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>간편가입</h2>
      <div className={styles.content}>
        <h3 className={styles.content_title}>
          {menu === 'id' ? (
            <span>
              로그인에 사용할
              <br />
              아이디를 입력해주세요.
            </span>
          ) : (
            <span>
              로그인에 사용할
              <br />
              비밀번호를 입력해주세요.
            </span>
          )}
        </h3>
        {menu === 'id' ? (
          <IdInput changeMenu={changeMenu} />
        ) : (
          <PwInput changeMenu={changeMenu} />
        )}
      </div>
    </div>
  );
};

export default Join;
