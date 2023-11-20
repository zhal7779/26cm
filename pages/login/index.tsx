import Login from '../../components/login/login';
import { getAppLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Login />
    </>
  );
};
LoginPage.getLayout = getAppLayout;

export default LoginPage;
