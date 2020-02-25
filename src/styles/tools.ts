import { breakpoints, baseFontSize } from './settings';

export const minWidth = (key: string): string => `@media only screen and (min-width: ${breakpoints[key]}px)`;

export const rem = (px: number) => `${px / baseFontSize}rem`;
