import { ReactNode } from 'react';
import MypageCategory from '../mypage/mypageCategory';

const MypageLayout = (props: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="mr-[5rem]">
        <MypageCategory />
      </div>

      {props.children}
    </div>
  );
};

export default MypageLayout;
