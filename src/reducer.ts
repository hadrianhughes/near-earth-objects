import { Action } from './actions';

export interface State {
  query: string
}

const initialState: State = {
  query: ''
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'SET_QUERY':
      const newQuery = action.payload.replace(/[^0-9]/g, '');
      return { ...state, query: newQuery };
    default:
      return state;
  }
}

export default reducer;
