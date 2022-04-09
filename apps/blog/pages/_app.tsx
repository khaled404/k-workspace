import { AppProps } from 'next/app';
import Head from 'next/head';
import App from 'next/app';

import Page, { PageProps } from './components/page';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <Page>
          <Component {...pageProps} />
        </Page>
      </main>
    </>
  );
}

export default CustomApp;
