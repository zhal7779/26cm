import { getMypageLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const HeartPage: NextPageWithLayout = () => {
  return <>좋아요</>;
};

HeartPage.getLayout = getMypageLayout;

export default HeartPage;
