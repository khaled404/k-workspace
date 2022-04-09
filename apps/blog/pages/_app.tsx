import { AppProps } from 'next/app';
import Head from 'next/head';
import App from 'next/app';

import Page, { PageProps } from './components/page';
import './styles.css';
import { httpDriver } from '@k-workspace/utils';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </main>
    </>
  );
}

export default CustomApp;

// CustomApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   const data = await httpDriver<PageProps>();

//   return { ...appProps, pageProps: { ...appProps, ...data } };
// };
