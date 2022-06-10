/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import NextHead from 'next/head';

export type TMeta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>;
interface IHead {
  title?: string;
  meta?: TMeta[];
}
export const Head: FC<IHead> = ({ children, title, meta }) => {
  return (
    <NextHead>
      <title>{title}</title>
      {meta?.map((item, index) => (
        <meta {...item} key={index} />
      ))}
      {children}
    </NextHead>
  );
};
