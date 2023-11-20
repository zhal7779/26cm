import { getAppLayout } from '../../util/getLayout';
import type { NextPageWithLayout } from '../_app';

const LookbookPage: NextPageWithLayout = () => {
  return <div>룩북페이지</div>;
};

LookbookPage.getLayout = getAppLayout;
export default LookbookPage;
