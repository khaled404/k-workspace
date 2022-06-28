/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FC } from '@k-workspace/types';
import NextHead from 'next/head';

export type TMeta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>;
interface IHead extends FC {
  title?: string;
  meta?: TMeta[];
}
export const Head = ({ children, title, meta }: IHead) => {
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
