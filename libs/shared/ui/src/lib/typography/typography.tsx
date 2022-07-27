import type { FC } from '@k-workspace/types';

const ParagraphBase = ({ children, className = '' }: FC) => {
  return (
    <p
      className={`text-slate-600 dark:text-slate-400 text-base mb-4 ${className}`}
    >
      {children}
    </p>
  );
};

const ListBase = ({ children, className = '' }: FC) => {
  return (
    <ul
      className={`text-slate-600 dark:text-slate-400 text-base py-4 list-disc marker:text-mainText capitalize pl-4 ${className}`}
    >
      {children}
    </ul>
  );
};

const ImageContainer = ({ src, alt, className = '' }: FC) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full max-h-[400px] mb-4 ${className}`}
    />
  );
};
const HrBase = ({ className = '' }: FC) => {
  return (
    <span
      className={`my-4 border-b dark:border-darkBorder border-lightIcon block ${className}`}
    />
  );
};
export { ParagraphBase, ListBase, ImageContainer, HrBase };
