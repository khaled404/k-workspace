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
};

export interface IRenderBlogs {
  blogs: TArticle[];
}

export function RenderBlogs({ blogs }: IRenderBlogs) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {blogs.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <span className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                    </span>

                    <p className="text-sm font-medium text-indigo-600">
                      [{post.tags.join(' , ')}]
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <span>{post.author}</span>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                      </div>
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
