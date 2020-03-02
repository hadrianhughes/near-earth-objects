import reducer, { initialState } from '../reducer';

describe('reducer function', () => {

  it('Should accept a previous state and a SET_QUERY action with a valid ID and return the state with updated query', () => {
    const action = {
      type: 'SET_QUERY',
      payload: '1234'
    };

    const expectedOutput = {
      ...initialState,
      query: '1234'
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previous state and a SET_QUERY action with an ID containing numbers and other characters and only use the numbers', () => {
    const action = {
      type: 'SET_QUERY',
      payload: '1a2b3c'
    };

    const expectedOutput = {
      ...initialState,
      query: '123'
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previoius state and a SET_RESULTS action with an array and return the state with replaced results', () => {
    const action = {
      type: 'SET_RESULTS',
      payload: [{ foo: 'bar' }]
    };

    const expectedOutput = {
      ...initialState,
      results: [{ foo: 'bar' }]
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });
});
