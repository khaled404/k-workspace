import type { TArticle } from '@k-workspace/shared/ui';
import type { GetStaticProps, GetStaticPaths } from 'next';
import {
  getArticleBySlug,
  getBlogs,
  renderMarkdown,
} from '@k-workspace/markdown';
import { MDXRemote } from 'next-mdx-remote';

interface IArticle {
  article: TArticle;
  renderedHTML: any;
}
const ProjectDetails = ({ article, renderedHTML }: IArticle) => {
 
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          {article.title}
        </h1>
        <div className="mb-3">by {article.author}</div>
        <hr className="py-2" />

        <MDXRemote {...renderedHTML} />
      </article>
    </div>
  );
};
export default ProjectDetails;

export const getStaticProps: GetStaticProps<IArticle> = async ({ params }) => {
  const article = getArticleBySlug(params.slug as string);

  const renderedHTML = await renderMarkdown(article.content);

  return {
    props: { article, renderedHTML },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = getBlogs().map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
