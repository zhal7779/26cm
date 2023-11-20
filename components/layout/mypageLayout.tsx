import { ReactNode } from 'react';
import MypageCategory from '../mypage/mypageCategory';

const MypageLayout = (props: { children: ReactNode }) => {
  return (
    <>
      <MypageCategory />
      {props.children}
    </>
  );
};

export default MypageLayout;
