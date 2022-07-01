import type { FC } from '@k-workspace/types';
import { Footer, LoginAndRegister, Navbar } from '@k-workspace/shared/ui';
import { useModal } from '@k-workspace/shared/components';
const Page = ({ children }: FC) => {
  const { newModal } = useModal();
  const openModal = (type: string) => {
    newModal({
      type: 'custom',
      renderCustom: (setOpen) => (
        <LoginAndRegister type={type} setOpen={setOpen} />
      ),
    });
  };
  return (
    <div>
      <Navbar onChange={openModal} />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
