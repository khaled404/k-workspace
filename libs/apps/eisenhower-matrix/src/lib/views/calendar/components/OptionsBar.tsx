/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import {
  useCalendar,
  CALENDAR_VIEWS,
  TCalendarViews,
} from '@k-workspace/shared/hooks';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@k-workspace/utils';

const calendarViews = Object.keys(CALENDAR_VIEWS).map(
  (view: TCalendarViews) => ({
    label: `${view.toLocaleLowerCase()} view`,
    value: view,
  })
);

const OptionsBar = () => {
  const {
    currentMoth,
    nextMonthHandler,
    previousMonthHandler,
    currentMothHandler,
    changeCalendarView,
    currentView,
  } = useCalendar();

  return (
    <header className=" relative z-50 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
      <h1 className="text-lg font-semibold text-gray-900">
        <time dateTime="2022-01">{currentMoth}</time>
      </h1>
      <div className="flex items-center">
        <div className="flex items-center rounded-md shadow-sm md:items-stretch">
          <button
            type="button"
            className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            onClick={nextMonthHandler}
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
            onClick={currentMothHandler}
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            onClick={previousMonthHandler}
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <Menu as="div" className="relative">
            <Menu.Button
              type="button"
              className="flex capitalize w-36 items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              {currentView.toLocaleLowerCase()} view
              <ChevronDownIcon
                className="ml-2 h-5 w-5 text-gray-400 ml-auto"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {calendarViews.map((item) => (
                    <Menu.Item key={item.value}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm w-full capitalize'
                          )}
                          onClick={() => {
                            changeCalendarView(item.value);
                          }}
                        >
                          {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="ml-6 h-6 w-px bg-gray-300" />
          <button
            type="button"
            className="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add event
          </button>
        </div>
      </div>
    </header>
  );
};

export default OptionsBar;
