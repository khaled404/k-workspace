import type { GetStaticProps, NextPage } from 'next';
import { getBlogs } from '@k-workspace/markdown';
import { RenderBlogs, IRenderBlogs } from '@k-workspace/shared/ui';

const Blogs: NextPage<IRenderBlogs> = ({ blogs }) => {
  return <RenderBlogs blogs={blogs} />;
};

export default Blogs;

export const getStaticProps: GetStaticProps<IRenderBlogs> = async () => {
  const blogs = getBlogs();
  return {
    props: { blogs },
  };
};
