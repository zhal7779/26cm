import Link from 'next/link';
import React from 'react';

const MypageCategory = () => {
  return (
    <div className="w-[18rem] text-[#303033] pt-[2rem] border-[#000000] border-t-4">
      <div className="text-[1.5rem] font-semibold mb-[3.8rem] cursor-pointer">
        <Link href="/mypage/heart">나의 좋아요 0</Link>
      </div>
      <ul className="text-[1.7rem] flex flex-col gap-[2rem]">
        <li>나의 쇼핑 정보</li>
        <li>회원 정보</li>
        <li>회원 정보 수정</li>
      </ul>
    </div>
  );
};

export default MypageCategory;
