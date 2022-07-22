import { getBlogs } from '@k-workspace/markdown';
import { HomeHeader, IRenderBlogs, RenderBlogs } from '@k-workspace/shared/ui';
import { GetStaticProps } from 'next';

export function Index({ blogs }) {
  return (
    <>
      <HomeHeader />
      <RenderBlogs blogs={blogs} />
    </>
  );
}

export default Index;
export const getStaticProps: GetStaticProps<IRenderBlogs> = async () => {
  const blogs = getBlogs();
  return {
    props: { blogs },
  };
};
