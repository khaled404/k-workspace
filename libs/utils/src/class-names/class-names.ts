/* eslint-disable @typescript-eslint/no-explicit-any */
const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export { classNames };
