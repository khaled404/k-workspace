import { Footer, Navbar } from '@k-workspace/shared/ui';

const Page = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
