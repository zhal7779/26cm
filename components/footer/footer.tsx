import styles from './footer.module.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNotion, SiBlogger } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contact}>
        <div className={styles.footer_contact_info}>
          <strong>고객센터 010-2205-9840</strong>
          <p>운영시간: 평일 09:00 - 18:00 (점심시간: 12:00-13:00 제외)</p>
        </div>
        <div className={styles.footer_contact_sns}>
          <a
            href="https://acoustic-infinity-a2f.notion.site/Frontend-Developer-97e07927772848cd9fe8d9507a88df4b?pvs=4"
            target="_blank"
          >
            <SiBlogger />
          </a>
          <a href="https://github.com/zhal7779" target="_blank">
            <AiOutlineGithub />
          </a>
          <a
            href="https://minyoung98.notion.site/5abf23e13bbe4be38b2563b1119687da?pvs=4"
            target="_blank"
          >
            <SiNotion />
          </a>
        </div>
      </div>
      <div className={styles.footer_half}>
        <div className={styles.footer_half_section}>
          <strong>NOTICE</strong>
          <ul>
            <li>[공지] OO 카드 청구할인 혜택 제외 카드 안내</li>
            <li>[공지] 카카오톡으로 선물하기 기능 장애 안내</li>
            <li>[공지] OO 브랜드 울 머플러 상품 판매 중단 및 환불 안내</li>
            <li>
              [공지] OO 브랜드 캐시미어 머플러 상품 판매 중단 및 환불 안내
            </li>
            <li>
              [공지] 26CM 서비스 이용약관 개정 사전 안내 (시행일자: 11월 07일)
            </li>
          </ul>
        </div>
        <div className={styles.footer_half_section}>
          <strong>ABOUT US</strong>
          <ul>
            <li>26CM 소개</li>
            <li>인재채용</li>
            <li>상시 할인 혜택</li>
          </ul>
        </div>
        <div className={styles.footer_half_section}>
          <strong>MY ORDER</strong>
          <ul>
            <li>주문배송</li>
            <li>취소/교환/반품 내역</li>
            <li>상품리뷰 내역</li>
            <li>증빙서류발급</li>
          </ul>
        </div>
        <div className={styles.footer_half_section}>
          <strong>MY ACCOUNT</strong>
          <ul>
            <li>회원정보 수정</li>
            <li>회원 등급</li>
            <li>마일리지 현황</li>
            <li>쿠폰</li>
          </ul>
        </div>
        <div className={styles.footer_half_section}>
          <strong>HELP</strong>
          <ul>
            <li>1:1 문의내역</li>
            <li>마케팅 제휴, 입점, 대량 주문 문의</li>
            <li>상품 Q&A 내역</li>
            <li>공지사항</li>
            <li>FAQ</li>
            <li>고객의 소리</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_info}>
        <p className={styles.footer_info_title}>
          개인정보 처리 방침 | 이용약관
        </p>
        <div className={styles.footer_info_section}>
          <p>상호명: 주식회사 26CM (26CM Co.Ltd)</p>
          <p>사업장소재지: 서울특별시 중랑구</p>
          <p>사업자등록번호: 000-00-00000</p>
        </div>
        <div className={styles.footer_info_section}>
          <p>전화번호: 010-2205-9840</p>
          <p>이메일: zhal7779@gmail.com</p>
          <p>대표: 이민영</p>
          <p>만든 이: 이민영</p>
        </div>
        <div>
          해당 페이지는 통신판매업체가 아닌 개인 웹페이지입니다. 거래에 대한
          책임이 제한될 수 있으니 참고 부탁드립니다.
        </div>
      </div>
    </footer>
  );
}
