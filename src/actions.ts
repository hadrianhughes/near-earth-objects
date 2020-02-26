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
