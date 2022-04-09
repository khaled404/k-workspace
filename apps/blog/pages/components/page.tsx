import {
  Footer,
  FooterProps,
  Navbar,
  NavbarProps,
} from '@k-workspace/shared/ui';
import { getFileParser } from '../../utils/data-provider/data-provider';
import { GetStaticProps, NextPage } from 'next';

export interface PageProps {
  navbar?: NavbarProps;
  footer?: FooterProps;
}

const Page: NextPage<PageProps> = (props) => {
  const { children, navbar, footer } = props;
  return (
    <>
      <Navbar {...navbar} />
      {children}
      <Footer {...footer} />
    </>
  );
};

export default Page;
