import type { FC } from '@k-workspace/types';
import { Footer, Navbar } from '@k-workspace/shared/ui';
const Page = ({ children }: FC) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
