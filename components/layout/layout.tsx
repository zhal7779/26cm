import Header from '../header/header';
import Footer from '../footer/footer';
import { ReactNode } from 'react';
export default function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[40px] pb-[90px] px-[50px]">{props.children}</main>
      <Footer />
    </>
  );
}
