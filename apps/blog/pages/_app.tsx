/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ModalProvider,
  NotificationsProvider,
} from '@k-workspace/shared/components';
import { ThemeProvider } from '@k-workspace/shared/context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Page from '../components/shared/Page';
import './styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const mainStyle: any = {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: 120,
  };

  return (
    <>
      <Head>
        <title>khaled.</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <main className="app bg-lightBg dark:bg-slate-900" style={mainStyle}>
        <ThemeProvider>
          <NotificationsProvider>
            <ModalProvider>
              <Page>
                <Component {...pageProps} />
              </Page>
            </ModalProvider>
          </NotificationsProvider>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
