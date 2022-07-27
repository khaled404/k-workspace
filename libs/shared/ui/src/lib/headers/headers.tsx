import { FC } from '@k-workspace/types';
import { idFromString } from '@k-workspace/utils';

const SectionHeaderLg = ({ children, className = '' }: FC) => {
  return (
    <h1
      id={idFromString(children as string)}
      className={`font-semibold mb-4 capitalize text-3xl md:text-4xl tracking-tight text-lightText dark:text-darkText ${className}`}
    >
      {children}
    </h1>
  );
};
const SectionHeaderBase = ({ children, className = '' }: FC) => {
  return (
    <h2
      id={idFromString(children as string)}
      className={`font-semibold mb-4  capitalize text-xl tracking-tight text-lightText/75 dark:text-darkText/75 ${className}`}
    >
      {children}
    </h2>
  );
};

const SectionHeaderSm = ({ children, className = '' }: FC) => {
  return (
    <h3
      id={idFromString(children as string)}
      className={`mb-3 text-sm font-medium text-mainTitle capitalize ${className}`}
    >
      {children}
    </h3>
  );
};

export { SectionHeaderLg, SectionHeaderBase, SectionHeaderSm };
