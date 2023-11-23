import { NextPageWithLayout } from '../_app';
import { getMypageLayout } from '../../util/getLayout';
import MyOrder from '../../components/mypage/myOrder';

const Mypage: NextPageWithLayout = () => {
  return (
    <section className="w-full">
      <MyOrder />
    </section>
  );
};

Mypage.getLayout = getMypageLayout;
export default Mypage;
