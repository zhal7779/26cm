import '../globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/headerComponent/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
