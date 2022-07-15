import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Router from 'next/router';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { FC } from '@k-workspace/types';

const docSearchConfig: any = process.env['searchConfig'];

function Hit({ hit, children }: { hit: { url: string } } & FC) {
  return <Link href={hit.url}>{children}</Link>;
}

function SearchIcon(props: FC) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  );
}

export function MainSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose });

  return (
    <>
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center "
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-lightIcon transition-all group-hover:fill-darkIcon dark:fill-darkIcon md:group-hover:fill-lightIcon" />
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl);
              },
            }}
          />,
          document.body
        )}
    </>
  );
}
export default MainSearch;
