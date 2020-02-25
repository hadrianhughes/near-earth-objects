import React from 'react';
import { create, act } from 'react-test-renderer';
import { dive } from '../../utils';
import ControlsContainer from './ControlsContainer';

describe('ControlsContainer component', () => {
  jest.doMock('./index', () => () => (
    <div />
  ));

  it('Should accept a `query` prop and pass it to Controls with the same name', () => {
    const query = 'test query';
    const component = create(
      <ControlsContainer
        query={query}
        onChangeQuery={() => {}} />
    ).root;

    expect(dive(component).props.query).toBe(query);
  });

  it('Should accept an `onChangeQuery` prop and pass it to Controls with the same name', () => {
    const onChangeQuery = jest.fn();
    const component = create(
      <ControlsContainer
        query={''}
        onChangeQuery={onChangeQuery} />
    ).root;

    const controls = dive(component);

    act(() => {
      controls.props.onChangeQuery();
    });

    expect(onChangeQuery).toHaveBeenCalled();
  });
});
