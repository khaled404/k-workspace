import Head from 'next/head';
import Page from './components/page';
import './styles.css';
//test
function CustomApp({ Component, pageProps }) {
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
