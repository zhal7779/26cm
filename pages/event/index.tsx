import { getAppLayout } from '../../util/getLayout';
import type { NextPageWithLayout } from '../_app';

const EventPage: NextPageWithLayout = () => {
  return <div>이벤트 페이지</div>;
};
EventPage.getLayout = getAppLayout;

export default EventPage;
