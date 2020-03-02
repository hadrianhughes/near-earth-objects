import { Action } from './actions';
import { Result } from './components/ResultsList';

export enum SizeUnit {
  feet = 'feet',
  miles = 'miles',
  kilometers = 'kilometers',
  meters = 'meters'
}

export interface State {
  query: string;
  results: Array<Result>;
  sizeUnit: SizeUnit;
}

export const initialState: State = {
  query: '',
  results: [],
  sizeUnit: SizeUnit.kilometers
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
    default:
      return state;
  }
}

export default reducer;
