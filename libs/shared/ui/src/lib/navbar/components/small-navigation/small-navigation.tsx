/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, Transition } from '@headlessui/react';
import { MobileNavIcon } from '@k-workspace/shared/svg';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import navbar from '../../../../data/navbar';

export function MobileNavigation() {
  const { push } = useRouter();
  const renderIcon = (open: boolean) => {
    if (typeof document === 'object') {
      document.body.className = open ? 'overflow-hidden' : '';
    }
    return <MobileNavIcon open={open} />;
  };

  return (
    <div className="md:hidden">
      <Popover>
        <Popover.Button
          className="group flex outline-none  h-6 w-6 items-center justify-center  relative z-10  [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => renderIcon(open)}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 w-[100vw] h-[100vh] bg-lightBg/95 dark:bg-darkBg/95 backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-darkBg/75 [@supports(backdrop-filter:blur(0))]:bg-lightBg/75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="divide-y divide-lightBorder dark:divide-darkIcon fixed inset-x-0 mt-4 flex origin-top flex-col rounded-2xl bg-white text-lightText dark:text-darkText dark:bg-darkBg p-4 text-lg tracking-tight shadow-xl ring-1 ring-darkBg/5 w-full"
            >
              {navbar.links
                .filter((item) => item.isActive)
                .map((item) => (
                  <Popover.Button key={item.name} as={Fragment}>
                    <span
                      className="py-2 text-base cursor-pointer"
                      onClick={() => {
                        push(item.href);
                      }}
                    >
                      {item.name}
                    </span>
                  </Popover.Button>
                ))}
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  );
}
export default MobileNavigation;
