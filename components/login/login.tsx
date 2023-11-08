import { googleLogin } from '../../app/api/firebase';
import styles from './login.module.css';
import SNSLoginButton from './snsLoginButton';
export default function Login() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>로그인</strong>
      <span className={styles.span} />
      <div className={styles.content}>
        <input type="text" placeholder="아이디 (이메일)" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인하기</button>
      </div>
      <div className={styles.content_SNS}>
        <strong>SNS 계정으로 로그인하기</strong>
        <SNSLoginButton SNS="구글" />
      </div>
      <div className={styles.discount_text}>
        <p>회원가입하고</p> <strong>최대 15% 할인 쿠폰을</strong>
        <p>받으세요!</p>
      </div>
      <button className={styles.join_button}>간편 회원가입하기</button>
    </div>
  );
}
