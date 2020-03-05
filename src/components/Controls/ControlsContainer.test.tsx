import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-test-renderer';
import { SizeUnit } from '../../types';
import { ControlsContainer } from './ControlsContainer';
import Controls from './index';
import Button from '../Button';

describe('ControlsContainer component', () => {
  const basicProps = {
    query: '',
    setQuery: () => {},
    performSearch: () => {},
    results: [],
    sizeUnit: SizeUnit.feet,
    setSizeUnit: () => {},
    date: '',
    setDate: () => {}
  };

  it('Should accept a `query` prop and pass it to Controls with the same name', () => {
    const query = 'test query';
    const component = shallow(
      <ControlsContainer {...basicProps} query={query} />
    );

    expect(component.find(Controls).props().query).toBe(query);
  });

  it('Should accept an `setQuery` prop and pass a function called `onChangeQuery` to Controls which defers to it', () => {
    const setQuery = jest.fn();
    const component = shallow(
      <ControlsContainer {...basicProps} setQuery={setQuery} />
    );

    const controls = component.find(Controls);
    const expectedOutput = 'test output';

    act(() => {
      controls.props().onChangeQuery({
        target: {
          value: expectedOutput
        }
      });
    });

    expect(setQuery).toHaveBeenCalledWith(expectedOutput);
  });

  it('Should accept a performSearch prop and call it when the search button is pressed', () => {
    const performSearch = jest.fn();
    const component = shallow(
      <ControlsContainer {...basicProps} performSearch={performSearch} />
    );

    const searchButton = component.find(Controls).dive().find(Button);

    act(() => {
      searchButton.props().onClick({});
    });

    expect(performSearch).toHaveBeenCalled();
  });

  it('Should accept a `results` prop and a `sizeUnit` prop and return a version formatted for rendering', () => {
    const resultsData = [
      {
        id: '1',
        name: 'One',
        estimated_diameter: {
          feet: {
            estimated_diameter_min: 3,
            estimated_diameter_max: 6
          }
        }
      },
      {
        id: '2',
        name: 'Two',
        estimated_diameter: {
          feet: {
            estimated_diameter_min: 5,
            estimated_diameter_max: 10
          }
        }
      }
    ];

    const component = shallow(
      <ControlsContainer {...basicProps} results={resultsData} />
    );

    const controls = component.find(Controls);

    controls.props().results.forEach((result, index) => {
      expect(result.id).toBe(resultsData[index].id);
      expect(result.name).toBe(resultsData[index].name);
      expect(typeof result.diameter).toBe('number');
    });
  });

  it('Should accept a `setStartDate` prop and pass a prop by the same name to `Controls` which delegates to this function', () => {
    const setDate = jest.fn();

    const component = shallow(
      <ControlsContainer {...basicProps} setDate={setDate} />
    );

    const controls = component.find(Controls);

    const testValue = 'test value';

    act(() => {
      controls.props().setDate({
        target: {
          value: testValue
        }
      })
    });

    expect(setDate).toHaveBeenLastCalledWith(testValue);
  });
});
