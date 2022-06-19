import type { NextPage } from 'next';
import { Footer, LoginAndRegister, Navbar } from '@k-workspace/shared/ui';
import { useModal } from '@k-workspace/shared/components';
const Page: NextPage = ({ children }) => {
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
    <div className="p-6">
      <Navbar onChange={openModal} />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
