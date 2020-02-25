import { breakpoints } from './settings';

export const minWidth = (key: string): string => `@media only screen and (min-width: ${breakpoints[key]}px)`;
