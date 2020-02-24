const initialState = {
  query: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export default reducer;
