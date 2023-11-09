import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <main className="pt-[40px] pb-[90px] px-[50px]">
        <Component {...pageProps} />
      </main>

      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
