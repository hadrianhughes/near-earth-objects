import { breakpoints, baseFontSize } from './settings';

export const minWidth = (key: string): string => `@media only screen and (min-width: ${breakpoints[key]}px)`;

export const rem = (...pxs: Array<number>) =>
  pxs.reduce((acc, px) => `${acc} ${px / baseFontSize}rem`, '');
