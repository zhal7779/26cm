import Join from '../../components/join/join';
import { getAppLayout } from '../../util/getLayout';
import type { NextPageWithLayout } from '../_app';

const JoinPage: NextPageWithLayout = () => {
  return (
    <div>
      <Join />
    </div>
  );
};

JoinPage.getLayout = getAppLayout;

export default JoinPage;
