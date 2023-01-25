import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/static/fonts/style.css';
import HomeIcon from '@/public/static/icons/home.png';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>뮤르</title>
        <link rel="shortcut icon" href={HomeIcon.src} />
      </Head>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
