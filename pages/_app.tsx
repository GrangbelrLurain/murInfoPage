import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/static/fonts/style.css';
import HomeIcon from '@/public/static/icons/home.png';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>뮤르</title>
        <link rel='shortcut icon' href={HomeIcon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
