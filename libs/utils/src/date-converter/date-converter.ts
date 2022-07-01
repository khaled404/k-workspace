/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import type { TDay } from '@k-workspace/shared/hooks';

const dateLocales = (date: Date, options: Intl.DateTimeFormatOptions) => {
  return date.toLocaleDateString('en-us', options);
};

const getDayName = (date: Date) => {
  const newDate = dateLocales(date, {
    weekday: 'long',
  });
  return newDate;
};
const getMonthYearName = (date: Date) => {
  const newDate = dateLocales(date, {
    year: 'numeric',
    month: 'long',
  });
  return newDate;
};

const getDayOfWeek = (date: Date) => {
  const weekday = date.getDay();
  return (weekday + 1) % 7;
};

const getBeginOfWeek = (date: Date) => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate() - getDayOfWeek(date);
  return new Date(year, monthIndex, day);
};

const getDatesInRange = (startDate: Date, endDate: Date) => {
  if (!endDate) return [];
  const date = new Date(startDate.getTime());
  date.setDate(date.getDate() + 1);
  const dates = [];
  while (date < endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

const getStartOfWeek = (date: Date) => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const result = [];
  for (let index = 0; index < 7; index += 1) {
    const startDate = getBeginOfWeek(
      new Date(year, monthIndex, day + index * 7)
    );
    result.push({
      startDate,
      id: startDate.toLocaleDateString(),
    });
  }

  return result;
};

const convertToDayOptions = (currentDay: Date): TDay => {
  const date = new Date(currentDay);
  const currentDate = new Date();
  const day = date.getDate();
  const isCurrentMonth =
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();
  const isToday = isCurrentMonth && day === currentDate.getDate();
  return { date, isCurrentMonth, isToday, day, dayName: getDayName(date) };
};

export {
  getDayOfWeek,
  getBeginOfWeek,
  getDatesInRange,
  getStartOfWeek,
  convertToDayOptions,
  getDayName,
  getMonthYearName,
};
