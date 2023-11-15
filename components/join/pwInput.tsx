import React, { useState } from 'react';
import styles from './join.module.css';
import { GoCheck } from 'react-icons/go';
import JoinButton from './joinButton';
type Props = {
  changeMenu: (menu: string) => void;
};
const PwInput = ({ changeMenu }: Props) => {
  const numRegEx = /\d/;
  const symbolRegEx = /[^a-zA-Z0-9]/;
  const lengthRegEx = /^.{8,20}$/;

  const [pwValue, setPwValue] = useState<string>('');
  const [pwCheckValue, setPwCheckValue] = useState<string>('');

  const [pwCheck, setPwCheck] = useState({
    numberCheck: false,
    symbolCheck: false,
    pwLengthCheck: false,
    pwConfirmCheck: false,
  });

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwValue(value);
    setPwCheck({
      ...pwCheck,
      numberCheck: numRegEx.test(value),
      symbolCheck: symbolRegEx.test(value),
      pwLengthCheck: lengthRegEx.test(value),
    });
  };

  const onChangePwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwCheckValue(value);
    setPwCheck({
      ...pwCheck,
      pwConfirmCheck: pwValue === value,
    });
  };

  const pwCheckResult = Object.values(pwCheck).every(
    (element) => element === true
  );
  console.log(pwCheckResult);

  return (
    <>
      <div className={styles.content_input}>
        <input
          type="password"
          className={styles.input}
          placeholder="비밀번호 입력"
          onChange={(e) => onChangePw(e)}
        />
        <p className={styles.test_text}>
          <span className={pwCheck.numberCheck ? styles.pass_text : ''}>
            숫자
            <GoCheck />
          </span>
          <span className={pwCheck.symbolCheck ? styles.pass_text : ''}>
            특수문자 <GoCheck />
          </span>
          <span className={pwCheck.pwLengthCheck ? styles.pass_text : ''}>
            8~20자 이내 <GoCheck />
          </span>
        </p>
        <input
          type="password"
          className={styles.input}
          placeholder="비밀번호 확인"
          onChange={(e) => onChangePwCheck(e)}
        />
        <p className={styles.test_text}>
          <span className={pwCheck.pwConfirmCheck ? styles.pass_text : ''}>
            비밀번호 일치
            <GoCheck />
          </span>
        </p>
      </div>
      <JoinButton check={pwCheckResult} changeMenu={changeMenu} />
    </>
  );
};

export default PwInput;
