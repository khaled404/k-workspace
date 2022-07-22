/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line */

import Link from 'next/link';

export type TArticle = {
  author: string;
  content: string;
  date: string;
  slug: string;
  tags: string[];
  title: string;
  description: string;
};

export interface IRenderBlogs {
  blogs: TArticle[];
}

export function RenderBlogs({ blogs }: IRenderBlogs) {
  return (
    <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {blogs.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white dark:bg-darkBoxBg p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-mainText capitalize">
                      {post.tags.join(' , ')}
                    </p>
                    <span className="block mt-2">
                      <p className="text-xl font-semibold text-lightText dark:text-darkText capitalize">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-lightText dark:text-darkText/80 capitalize">
                        {post.description}
                      </p>
                    </span>
                  </div>
                  <div className="mt-3 flex items-center capitalize">
                    <div className="flex space-x-1 text-sm text-lightText/70 dark:text-darkText/70">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
