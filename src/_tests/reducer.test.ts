import reducer from '../reducer';

describe('reducer function', () => {
  const baseState = {
    query: '',
    results: []
  };

  it('Should accept a previous state and a SET_QUERY action with a valid ID and return the state with updated query', () => {
    const action = {
      type: 'SET_QUERY',
      payload: '1234'
    };

    const expectedOutput = {
      ...baseState,
      query: '1234'
    };

    expect(reducer(baseState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previous state and a SET_QUERY action with an ID containing numbers and other characters and only use the numbers', () => {
    const action = {
      type: 'SET_QUERY',
      payload: '1a2b3c'
    };

    const expectedOutput = {
      ...baseState,
      query: '123'
    };

    expect(reducer(baseState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previoius state and a SET_RESULTS action with an array and return the state with replaced results', () => {
    const action = {
      type: 'SET_RESULTS',
      payload: [{ foo: 'bar' }]
    };

    const expectedOutput = {
      ...baseState,
      results: [{ foo: 'bar' }]
    };

    expect(reducer(baseState, action)).toStrictEqual(expectedOutput);
  });
});
