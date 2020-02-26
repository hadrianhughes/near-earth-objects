import React from 'react';
import { create, act } from 'react-test-renderer';
import { dive } from '../../utils';
import { ControlsContainer } from './ControlsContainer';

describe('ControlsContainer component', () => {
  jest.doMock('./index', () => () => (
    <div />
  ));

  it('Should accept a `query` prop and pass it to Controls with the same name', () => {
    const query = 'test query';
    const component = create(
      <ControlsContainer
        query={query}
        setQuery={() => {}}
        performSearch={() => {}}
        results={[]} />
    ).root;

    expect(dive(component).props.query).toBe(query);
  });

  it('Should accept an `setQuery` prop and pass a function called `onChangeQuery` to Controls which defers to it', () => {
    const setQuery = jest.fn();
    const component = create(
      <ControlsContainer
        query={''}
        setQuery={setQuery}
        performSearch={() => {}}
        results={[]} />
    ).root;

    const controls = dive(component);
    const expectedOutput = 'test output';

    act(() => {
      controls.props.onChangeQuery({
        target: {
          value: expectedOutput
        }
      });
    });

    expect(setQuery).toHaveBeenCalledWith(expectedOutput);
  });

  it('Should accept a performSearch prop and call it when the search button is pressed', () => {
    const performSearch = jest.fn();
    const component = create(
      <ControlsContainer
        query={''}
        setQuery={() => {}}
        performSearch={performSearch}
        results={[]} />
    ).root;

    const searchButton = component.findAllByType('button')[0];

    act(() => {
      searchButton.props.onClick();
    });

    expect(performSearch).toHaveBeenCalled();
  });
});
