/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { getCurrentUser } from '@k-workspace/utils';
import Link from 'next/link';
import { Fragment } from 'react';
import navbar from '../../data/navbar';

export type TNavLink = { name: string; href: string };

export interface INavbar {
  onChange: (type: string) => void;
}

export function Navbar({ onChange }: INavbar) {
  const { links } = navbar;

  const user = getCurrentUser();

  return (
    <div className="relative bg-white overflow-hidden flex items-center justify-between container mx-auto">
      <div className="relative pt-6  pb-6">
        <Popover>
          <nav
            className="relative flex items-center justify-between container mx-auto"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:space-x-10">
                {links?.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {links?.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      {!user ? (
        <div className="flex items-center md:ml-12">
          <button
            onClick={() => onChange('login')}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </button>
          <button
            onClick={() => onChange('register')}
            className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </button>
        </div>
      ) : (
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 select-none">
          <span className="font-bold leading-none text-white font-mono">
            {user?.user?.name?.slice(0, 2)}
          </span>
        </span>
      )}
    </div>
  );
}

export default Navbar;
