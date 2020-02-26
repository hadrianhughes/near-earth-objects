import reducer from '../reducer';

describe('reducer function', () => {
  it('Should accept a previous state and a SET_QUERY action with a valid ID and return the state with updated query', () => {
    const state = {
      query: ''
    };

    const action = {
      type: 'SET_QUERY',
      payload: '1234'
    };

    const expectedOutput = {
      query: '1234'
    };

    expect(reducer(state, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previous state and a SET_QUERY action with an ID containing numbers and other characters and only use the numbers', () => {
    const state = {
      query: ''
    };

    const action = {
      type: 'SET_QUERY',
      payload: '1a2b3c'
    };

    const expectedOutput = {
      query: '123'
    };

    expect(reducer(state, action)).toStrictEqual(expectedOutput);
  });
});
