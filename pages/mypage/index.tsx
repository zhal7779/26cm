import { NextPageWithLayout } from '../_app';
import { getMypageLayout } from '../../util/getLayout';

const Mypage: NextPageWithLayout = () => {
  return <>마이페이지</>;
};

Mypage.getLayout = getMypageLayout;
export default Mypage;
