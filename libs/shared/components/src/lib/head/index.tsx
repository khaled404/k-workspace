/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import NextHead from 'next/head';

type TMetaName = 'description' | 'author' | 'keywords' | 'revised';

export type TMeta = {
  name?: TMetaName;
  property?: 'og:image';
  content: string;
};
interface IHead {
  title?: string;
  meta?: TMeta[];
}
export const Head: FC<IHead> = ({ children, title, meta }) => {
  return (
    <NextHead>
      <title>{title}</title>
      {console.log(meta)}
      {meta?.map((item: any) => (
        <meta {...item} />
      ))}
      {children}
    </NextHead>
  );
};
