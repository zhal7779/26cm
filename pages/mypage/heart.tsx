import { getMypageLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const HeartPage: NextPageWithLayout = () => {
  return <div>좋아요</div>;
};

HeartPage.getLayout = getMypageLayout;

export default HeartPage;
