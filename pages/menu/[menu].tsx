import { useRouter } from 'next/router';
import type { NextPageWithLayout } from '../_app';
import { getAppLayout } from '../../util/getLayout';

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const menu = router.query.menu;

  return <h1>{menu}</h1>;
};

Detail.getLayout = getAppLayout;

export default Detail;
