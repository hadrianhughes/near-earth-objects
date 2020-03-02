import { SizeUnit } from './reducer';

export interface Action {
  type: string;
  payload?: any;
}

export const setQuery = (value: string): Action => ({
  type: 'SET_QUERY',
  payload: value
});

export const performSearch = (): Action => ({
  type: 'PERFORM_SEARCH'
});

export const setSizeUnit = (unit: SizeUnit): Action => ({
  type: 'SET_SIZE_UNIT',
  payload: unit
});
