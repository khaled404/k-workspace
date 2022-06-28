/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  convertToDayOptions,
  getDatesInRange,
  getStartOfWeek,
} from '@k-workspace/utils';
import { useState, useEffect } from 'react';

export type TDay = {
  isCurrentMonth: boolean;
  isToday: boolean;
  date: Date;
  day: number;
};

export type TCalendarData = {
  days: TDay[];
  startDate: Date;
  id: number;
  endDate: Date;
};

export interface IUseCalendar {
  dates: TCalendarData[];
  currentMoth: string;
  nextMonthHandler: () => void;
  previousMonthHandler: () => void;
  currentMothHandler: () => void;
}

export const useCalendar = (): IUseCalendar => {
  const [dates, setDates] = useState<TCalendarData[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentMoth = currentDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
  });

  const getMothsDates = () => {
    const startOfWeek = getStartOfWeek(
      new Date(`${currentDate.getMonth() + 1}/1/${currentDate.getFullYear()}`)
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
    const newDates = newStartOfWeek.map((item) => ({
      ...item,
      days: item.days.map(convertToDayOptions),
    }));
    setDates(newDates);
  };

  const nextMonthHandler = () => {
    setCurrentDate(new Date(currentYear, currentMonthIndex + 1, currentDay));
  };

  const previousMonthHandler = () => {
    setCurrentDate(new Date(currentYear, currentMonthIndex - 1, currentDay));
  };

  const currentMothHandler = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    getMothsDates();
  }, [currentDate]);

  return {
    dates,
    currentMoth,
    nextMonthHandler,
    previousMonthHandler,
    currentMothHandler,
  };
};
