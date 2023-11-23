import Link from 'next/link';
import React, { useState } from 'react';

const MypageCategory = () => {
  const categories = ['주문 배송 조회', '회원 정보 수정'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="w-[18rem] text-[#303033] pt-[2rem] border-[#000000] border-t-4">
      <div className="text-[1.5rem] font-semibold mb-[3.8rem] cursor-pointer">
        <Link href="/mypage/heart" onClick={() => handleClickCategory('heart')}>
          나의 좋아요 0
        </Link>
      </div>
      <ul className="text-[1.7rem] flex flex-col gap-[2rem]">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category ? 'font-semibold' : ''
            }`}
            onClick={() => handleClickCategory(category)}
          >
            <Link
              href={
                category === '주문 배송 조회'
                  ? '/mypage'
                  : category === '회원 정보 조회'
                  ? '/mypage/order'
                  : ''
              }
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MypageCategory;
