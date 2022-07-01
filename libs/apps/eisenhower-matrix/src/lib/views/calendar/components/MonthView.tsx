import { classNames } from '@k-workspace/utils';
import { useCalendar } from '@k-workspace/shared/hooks';
import { Fragment } from 'react';

const MonthView = () => {
  const { dates } = useCalendar();

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">Saturday</div>
          <div className="bg-white py-2">Sunday</div>
          <div className="bg-white py-2">Monday</div>
          <div className="bg-white py-2">Tuesday</div>
          <div className="bg-white py-2">Wednesday</div>
          <div className="bg-white py-2">Thursday</div>
          <div className="bg-white py-2">Friday</div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 flex-auto">
          <div className="w-full grid grid-cols-7 gap-px">
            {dates.map((date) => (
              <Fragment key={date.id}>
                {date.days.map((day) => (
                  <div
                    key={day.date.toISOString()}
                    className={classNames(
                      day.isCurrentMonth
                        ? 'bg-white'
                        : 'bg-gray-50 text-gray-500',
                      'relative py-2 px-3 h-36'
                    )}
                  >
                    <time
                      dateTime={day.date.toISOString()}
                      className={
                        day.isToday
                          ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                          : undefined
                      }
                    >
                      {day.day}
                    </time>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthView;
