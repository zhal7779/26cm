import type { Metadata } from 'next';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import AppLayout from '../components/layout/layout';

export const metadata: Metadata = {
  title: '26cm | 감도 깊은 취향 셀렉트 샵',
  description: '감도 깊은 취향 셀렉트 샵 26cm',
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>메인페이지 입니다</h1>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
