import reducer, { initialState } from '../reducer';
import { SizeUnit } from '../types';

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

  it('Should accept a previous state and a SET_SIZE_UNIT action with a SizeUnit and return the state with updated unit', () => {
    const unit = SizeUnit.feet;

    const action = {
      type: 'SET_SIZE_UNIT',
      payload: unit
    };

    const expectedOutput = {
      ...initialState,
      sizeUnit: unit
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previous state and a SET_CONTROLS_OPEN action and return the state with updated isControlsOpen', () => {
    const isControlsOpen = true;

    const action = {
      type: 'SET_CONTROLS_OPEN',
      payload: isControlsOpen
    };

    const expectedOutput = {
      ...initialState,
      isControlsOpen
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });

  it('Should accept a previous state and a SET_DATE action and return the state with updated date', () => {
    const newDate = '31-01-2020';

    const action = {
      type: 'SET_DATE',
      payload: newDate
    };

    const expectedOutput = {
      ...initialState,
      date: newDate
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedOutput);
  });
});
