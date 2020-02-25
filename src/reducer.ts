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
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export default reducer;
