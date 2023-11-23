import React from 'react';

const MyOrder = () => {
  const titles = ['상품정보', '배송비', '진행상태'];
  return (
    <>
      <h3 className="text-[2.6rem] pb-[1rem] font-medium ">주문 배송 조회</h3>
      <div className="flex border-t-4 border-b-2 border-[#000000]">
        {titles.map((title) => (
          <p
            key={title}
            className={`text-[1.8rem] font-semibold p-[2rem] text-center ${
              title === '상품정보'
                ? 'flex-1'
                : title === '배송비'
                ? 'w-[15%]'
                : 'w-1/5'
            }`}
          >
            {title}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[1.7rem] font-semibold mt-[15rem]">
          상품 주문 내역이 없습니다.
        </p>
      </div>
    </>
  );
};

export default MyOrder;
