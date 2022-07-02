/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, createContext, useMemo, useContext } from 'react';
import type { FC, TProvider } from '@k-workspace/types';
import {
  convertToDayOptions,
  getDatesInRange,
  getMonthYearName,
  getStartOfWeek,
} from '@k-workspace/utils';

export const CALENDAR_VIEWS = {
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY',
} as const;

export type TCalendarViews = keyof typeof CALENDAR_VIEWS;
export type TDay = {
  isCurrentMonth: boolean;
  isToday: boolean;
  date: Date;
  day: number;
  dayName: string;
};

export type TCalendarData = {
  days: TDay[];
  startDate: Date;
  id: number;
  isCurrentWeek: boolean;
  endDate: Date;
};

interface ICalendar {
  dates: TCalendarData[];
  week?: TCalendarData;
  currentMoth: string;
  currentView: TCalendarViews;
  nextMonthHandler: () => void;
  previousMonthHandler: () => void;
  currentMothHandler: () => void;
  changeCalendarView: (view: TCalendarViews) => void;
}
const CalendarContext = createContext<ICalendar | null>(null);
const CalendarProvider = ({ children }: FC): TProvider => {
  const [dates, setDates] = useState<TCalendarData[]>([]);
  const [week, setWeek] = useState<TCalendarData>();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<TCalendarViews>(
    CALENDAR_VIEWS.DAY
  );
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentMoth = getMonthYearName(currentDate);

  const getMothsDates = (date?: Date, cb?: (data: TCalendarData[]) => void) => {
    const cDate = date ? date : currentDate;

    if (date) {
      setCurrentDate(date);
    }
    const startOfWeek = getStartOfWeek(
      new Date(`${cDate.getMonth() + 1}/1/${cDate.getFullYear()}`)
    );

    const newStartOfWeek: any[] = [];

    startOfWeek.forEach((item, index) => {
      if (index === startOfWeek.length - 1) return;
      const days = [
        item.startDate,
        ...getDatesInRange(
          new Date(item.startDate),
          new Date(startOfWeek[index + 1]?.startDate as Date)
        ),
      ];

      newStartOfWeek.push({
        ...item,
        days,

        endDate: days[days.length - 1] as Date,
      });
    });
    const newDates = newStartOfWeek.map((item) => {
      const days = item.days.map(convertToDayOptions);
      const isCurrentWeek = days.some((item: TDay) => item.isToday);
      return { ...item, days, isCurrentWeek };
    });
    setDates(newDates);

    cb?.(newDates);
  };
  const handleNextMothWeek = (newDates: TCalendarData[]) => {
    const index = newDates.findIndex((weeks) => weeks.id === week?.id);
    setWeek(newDates[index !== -1 ? index + 1 : 0]);
  };
  const handlePreviousMothWeek = (newDates: TCalendarData[]) => {
    const index = newDates.findIndex((weeks) => weeks.id === week?.id);
    setWeek(newDates[index !== -1 ? index - 1 : 0]);
  };

  const nextMonthHandler = () => {
    switch (currentView) {
      case CALENDAR_VIEWS.MONTH:
        getMothsDates(new Date(currentYear, currentMonthIndex + 1, currentDay));
        break;
      case CALENDAR_VIEWS.WEEK:
        {
          const weekIndex = dates.findIndex((weeks) => weeks.id === week?.id);
          if (weekIndex === 5) {
            getMothsDates(
              new Date(currentYear, currentMonthIndex + 1, currentDay),
              handleNextMothWeek
            );
            return;
          }
          setWeek(dates[weekIndex + 1]);
        }

        break;

      default:
        break;
    }
  };

  const previousMonthHandler = () => {
    switch (currentView) {
      case CALENDAR_VIEWS.MONTH:
        getMothsDates(new Date(currentYear, currentMonthIndex - 1, currentDay));
        break;
      case CALENDAR_VIEWS.WEEK:
        {
          const weekIndex = dates.findIndex((weeks) => weeks.id === week?.id);
          if (weekIndex === 0) {
            getMothsDates(
              new Date(currentYear, currentMonthIndex - 1, currentDay),
              handlePreviousMothWeek
            );
            return;
          }
          setWeek(dates[weekIndex - 1]);
        }

        break;
      default:
        break;
    }
  };

  const currentMothHandler = () => {
    getMothsDates(new Date(), (newDates) => {
      setWeek(newDates.find((week) => week.isCurrentWeek));
    });
  };
  const changeCalendarView = (view: TCalendarViews) => {
    setCurrentView(view);
    currentMothHandler();
  };

  useEffect(() => {
    currentMothHandler();
  }, []);

  const value = useMemo(
    () => ({
      dates,
      week,
      currentMoth,
      nextMonthHandler,
      previousMonthHandler,
      currentMothHandler,
      changeCalendarView,
      currentView,
    }),
    [dates, currentMoth, currentView, week]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendar = (): ICalendar => {
  const context = useContext(CalendarContext);
  if (!context)
    throw Error('useCalendar should be used within <CalendarProvider />');
  return context;
};

export { useCalendar, CalendarProvider };
