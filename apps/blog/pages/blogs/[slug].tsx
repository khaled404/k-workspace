import type { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import {
  CodeBox,
  ParagraphBase,
  SectionHeaderLg,
  SectionHeaderSm,
  SectionHeaderBase,
  Tags,
  TArticle,
  ListBase,
  ImageContainer,
  HrBase,
  BlogNavigation,
} from '@k-workspace/shared/ui';
import {
  getArticleBySlug,
  getBlogs,
  renderMarkdown,
} from '@k-workspace/markdown';

interface IArticle {
  article: TArticle;
  renderedHTML: any;
}

const components: import('mdx/types').MDXComponents = {
  code: CodeBox,
  h1: SectionHeaderLg,
  h2: SectionHeaderBase,
  h3: SectionHeaderSm,
  p: ParagraphBase,
  ul: ListBase,
  img: ImageContainer,
  hr: HrBase,
};

const ProjectDetails = ({ article, renderedHTML }: IArticle) => {
  return (
    <div className="container mx-auto grid xl:grid-cols-5 gap-7 scroll-smooth">
      <article className="py-7 xl:col-span-4 ">
        <SectionHeaderLg className="pb-2">{article.title}</SectionHeaderLg>
        <Tags data={article.tags} />
        <ParagraphBase className="border-b text-xs mb-6  pb-4 pt-4 border-lightBorder  dark:border-darkBorder">
          {article.date}
        </ParagraphBase>
        <MDXRemote {...renderedHTML} components={components} />
      </article>
      <BlogNavigation />
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
