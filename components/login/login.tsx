import styles from './login.module.css';
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
      </div>
    </div>
  );
}
