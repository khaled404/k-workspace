import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { rootPath } from '@k-workspace/utils';
import { TArticle } from '@k-workspace/shared/ui';

const POSTS_PATH = rootPath('/articles');

type TArticles = TArticle[];

const getBlogs = (): TArticles => {
  const blogs: TArticles = [];

  const allFiles = fs
    .readdirSync(POSTS_PATH, {
      withFileTypes: true,
      encoding: 'utf8',
    })
    .map((item) => item.name);

  for (let index = 0; index < allFiles.length; index++) {
    const fileName = allFiles[index];

    const file = fs.readFileSync(`${POSTS_PATH}/${fileName}`);

    const { data, content }: any = matter(file, { parser: 'html' });

    blogs.push({
      ...data,
      content,
      slug: fileName.replace(/\.mdx?$/, ''),
      tags: data.tags.split(','),
    });
  }

  return blogs.filter(
    (item) => item.published || process.env.NODE_ENV === 'development'
  );
};

const getArticleBySlug = (slug: string): TArticle => {
  return getBlogs().filter((item) => item.slug === slug)[0];
};

const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};

export { getBlogs, getArticleBySlug, renderMarkdown };
