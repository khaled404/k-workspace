import { TClassNames } from './class-names-types';

const classNames = (...classes: TClassNames) => {
  return classes.filter(Boolean).join(' ');
};

export { classNames };
