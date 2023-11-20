import { ReactElement } from 'react';
import AppLayout from '../components/layout/layout';
import MypageLayout from '../components/layout/mypageLayout';

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}

export function getMypageLayout(page: ReactElement) {
  return (
    <AppLayout>
      <MypageLayout>{page}</MypageLayout>
    </AppLayout>
  );
}
