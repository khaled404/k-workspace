import { Footer, Navbar } from '@k-workspace/shared/ui';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
