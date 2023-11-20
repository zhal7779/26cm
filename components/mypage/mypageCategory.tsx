import Link from 'next/link';
import React from 'react';

const MypageCategory = () => {
  return (
    <div>
      <div>
        <Link href="/mypage/heart">좋아요 0</Link>
      </div>
      <ul>
        <li>나의 쇼핑 정보</li>
        <li>회원 정보</li>
        <li>회원 정보 수정</li>
      </ul>
    </div>
  );
};

export default MypageCategory;
