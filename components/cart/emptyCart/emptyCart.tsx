import Link from 'next/link';
import React from 'react';

const EmptyCart = () => {
  return (
    <div className="w-full py-[10rem] border-[#000000] border-t-4 border-b text-center text-[3.2rem]">
      <span>장바구니에 담은 상품이 없습니다.</span>
      <div className="mt-[8rem]">
        <Link
          href="/"
          className="border-[#303033] border text-[2.6rem] font-semibold px-20 py-8 hover:text-[#ff4800]"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
