import MyHeart from '../../components/mypage/myheart';
import { getMypageLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const HeartPage: NextPageWithLayout = () => {
  return (
    <section className="w-full">
      <MyHeart />
    </section>
  );
};

HeartPage.getLayout = getMypageLayout;

export default HeartPage;
