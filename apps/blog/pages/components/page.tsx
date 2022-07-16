import type { FC } from '@k-workspace/types';
import { Footer, Navbar } from '@k-workspace/shared/ui';
const Page = ({ children }: FC) => {
  // const { newModal } = useModal();
  // const openModal = (type: string) => {
  //   newModal({
  //     type: 'custom',
  //     renderCustom: (setOpen) => (
  //       <LoginAndRegister type={type} setOpen={setOpen} />
  //     ),
  //   });
  // };
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
