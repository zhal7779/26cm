import Myheart from '../../components/mypage/myheart';
import { getMypageLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const HeartPage: NextPageWithLayout = () => {
  return (
    <section className="w-full">
      <Myheart />
    </section>
  );
};

HeartPage.getLayout = getMypageLayout;

export default HeartPage;
