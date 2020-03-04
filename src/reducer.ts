import { Action } from './actions';
import { formatDate } from './utils';
import { Result } from './components/ResultsList';
import { SizeUnit } from './types';

export interface State {
  query: string;
  results: Array<Result>;
  sizeUnit: SizeUnit;
  isControlsOpen: boolean;
  startDate: string;
  endDate: string;
}

export const initialState: State = {
  query: '',
  results: [],
  sizeUnit: SizeUnit.kilometers,
  isControlsOpen: false,
  startDate: formatDate(new Date(2000, 1, 1)),
  endDate: formatDate(new Date())
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'SET_QUERY':
      const newQuery = action.payload.replace(/[^0-9]/g, '');
      return { ...state, query: newQuery };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    case 'SET_SIZE_UNIT':
      return { ...state, sizeUnit: action.payload };
    case 'SET_CONTROLS_OPEN':
      return { ...state, isControlsOpen: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
}

export default reducer;
