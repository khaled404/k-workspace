/* eslint-disable jsx-a11y/anchor-is-valid */
import { classNames } from '@k-workspace/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import navbar from '../../data/navbar';
import MainSearch from './components/main-search/main-search';
import MobileNavigation from './components/small-navigation/small-navigation';
import ToggleTheme from './components/toggle-theme/toggle-theme';

export type TNavLink = { name: string; href: string };

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();
  const { links } = navbar;
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        ' sticky top-0 z-50  bg-lightBg px-4 py-5 shadow-md shadow-darkBg/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'bg-lightBg/95 dark:bg-darkBg/95 backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-darkBg/75 [@supports(backdrop-filter:blur(0))]:bg-lightBg/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" aria-label="Home">
            <a>
              <h1 className="font-bold font-sans uppercase dark:text-darkText text-2xl lg:block hidden">
                khaled
                <span className="inline bg-gradient-to-r from-indigo-200  via-sky-400 to-indigo-200 bg-clip-text tracking-tight text-transparent">
                  .
                </span>
              </h1>
              <h1 className="font-bold font-sans uppercase dark:text-darkText text-2xl lg:hidden block ">
                k
                <span className="inline bg-gradient-to-r from-indigo-200  via-sky-400 to-indigo-200 bg-clip-text tracking-tight text-transparent">
                  .
                </span>
              </h1>
            </a>
          </Link>
          <div className="hidden md:flex md:gap-x-6">
            {links
              .filter((item) => item.isActive)
              ?.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={classNames(
                      'inline-block transition-all rounded-lg py-1 px-2 text-sm dark:text-darkText text-lightText dark:hover:bg-slate-700 hover:bg-slate-300 hover:text-slate-900',
                      pathname === item.href &&
                        'dark:bg-slate-700 bg-slate-300 text-slate-900'
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
          </div>
        </div>

        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ToggleTheme />
          <MainSearch />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
