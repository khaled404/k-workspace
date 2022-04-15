import type { NextPage } from 'next';
import { Footer, Navbar } from '@k-workspace/shared/ui';

const Page: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
