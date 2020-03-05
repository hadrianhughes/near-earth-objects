import { SizeUnit } from './types';

export const get = (path: Array<string>) => (source: object, defaultValue?: any): any => {
  const value = source[path[0]];

  if (path.length === 1) {
    return value === undefined ? defaultValue : value;
  }

  return get(path.slice(1))(value, defaultValue);
};

export const size = (unit: SizeUnit) => (value: number): string => {
  switch (unit) {
    case SizeUnit.feet:
      return `${value}ft`;
    case SizeUnit.miles:
      return `${value}mi`;
    case SizeUnit.kilometers:
      return `${value}km`;
    case SizeUnit.meters:
      return `${value}m`;
    default:
      return String(value);
  }
};

export const calculateAverageDiameter = (min: number, max: number): number => {
  if (min && max) return (min + max) / 2;
  if (min) return min;
  if (max) return max;
  return 0;
};

export const doubleDigit = (value: number): string => {
  if (value / 10 < 1) return '0' + value;
  return String(value);
};

export const formatDate = (date: Date): string => {
  const dateClone = new Date(date);

  const day = dateClone.getDate();
  const month = dateClone.getMonth() + 1;
  const year = dateClone.getFullYear();

  return `${year}-${doubleDigit(month)}-${doubleDigit(day)}`;
};

export const stringToDate = (dateString: string): Date => {
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(dateString)) {
    return null;
  }

  return new Date(dateString);
};

export const changeDateBy = (changeBy: number) => (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + changeBy);

  return newDate;
};

export const compose = (...fns: Array<Function>) => (value?: any) =>
  fns.reverse().reduce((acc, fn) => fn(acc), value);
