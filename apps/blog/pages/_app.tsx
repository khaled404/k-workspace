/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ModalProvider,
  NotificationsProvider,
} from '@k-workspace/shared/components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Page from './components/page';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const mainStyle: any = {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: 120,
  };
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app" style={mainStyle}>
        <NotificationsProvider>
          <ModalProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ModalProvider>
        </NotificationsProvider>
      </main>
    </>
  );
}

export default CustomApp;
