import { classNames, idFromString } from '@k-workspace/utils';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface BlogNavigationProps {}
type TLinks =
  | {
      title: string;
      id: string;
      subLinks: { title: string; id: string }[];
    }[]
  | [];
const getNextItem = (item: Node) => {
  const h3list = [];
  let nextSibling = item.nextSibling;
  while (nextSibling) {
    if (nextSibling.nodeName === 'H3') {
      h3list.push(nextSibling);
    }
    if (nextSibling.nodeName === 'H2') {
      break;
    }
    nextSibling = nextSibling.nextSibling;
  }
  return h3list;
};
const getNodeHeadersLinks = (): TLinks => {
  const h2 = [...(document.querySelectorAll('article h2') as any)];
  const links = h2.map((item) => ({
    title: item.innerHTML,
    id: idFromString(item.innerHTML),
    subLinks: getNextItem(item).map((i: any) => ({
      title: i.innerHTML,
      id: idFromString(i.innerHTML),
    })),
  }));

  return links;
};

export function BlogNavigation(props: BlogNavigationProps) {
  const [links, setLinks] = useState<TLinks>([]);
  useLayoutEffect(() => {
    setLinks(getNodeHeadersLinks());
  }, []);

  return (
    <div className="hidden xl:sticky xl:top-[4.5rem] capitalize  w-full xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title ">
        <h2
          id="on-this-page-title"
          className="font-display text-sm font-medium text-mainText"
        >
          On this page
        </h2>
        <ol className="mt-4 space-y-3 text-sm">
          {links?.map((section) => (
            <li key={section.id}>
              <h3 className="font-normal text-slate-500 hover:text-slate-700 dark:text-darkText dark:hover:text-slate-300">
                <Link href={`#${section.id}`}>{section.title}</Link>
              </h3>
              {section.subLinks.length > 0 && (
                <ol className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                  {section.subLinks.map((subSection) => (
                    <li
                      key={subSection.id}
                      className="hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      <Link href={`#${subSection.id}`}>{subSection.title}</Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default BlogNavigation;
