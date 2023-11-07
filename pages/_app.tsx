import '../globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default MyApp;
