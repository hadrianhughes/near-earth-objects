import { Action } from './actions';

export interface State {
  query: string;
  results: Array<object>;
}

const initialState: State = {
  query: '',
  results: []
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'SET_QUERY':
      const newQuery = action.payload.replace(/[^0-9]/g, '');
      return { ...state, query: newQuery };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    default:
      return state;
  }
}

export default reducer;
