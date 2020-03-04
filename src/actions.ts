import { SizeUnit } from './types';

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

export const setControlsOpen = (isOpen: boolean): Action => ({
  type: 'SET_CONTROLS_OPEN',
  payload: isOpen
});

export const setStartDate = (date: string): Action => ({
  type: 'SET_START_DATE',
  payload: date
});

export const setEndDate = (date: string): Action => ({
  type: 'SET_END_DATE',
  payload: date
});
