import { AppProps } from 'next/app';
import Head from 'next/head';
import App from 'next/app';

import Page, { PageProps } from './components/page';
import './styles.css';

function CustomApp({ Component, pageProps, ...props }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <Page {...props}>
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
