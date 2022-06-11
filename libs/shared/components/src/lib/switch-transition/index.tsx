import type { ReactNode } from 'react';
import { Transition } from '@headlessui/react';

interface SwitchTransitionProps<TPages> {
  currentPage: TPages;
  name: TPages;
  children?: ReactNode | undefined;
}

export const SwitchTransition = <TPages,>({
  name,
  currentPage,
  children,
}: SwitchTransitionProps<TPages>) => {
  return (
    <Transition
      show={currentPage === name}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};
