import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-test-renderer';
import { SizeUnit } from '../../types';
import { ControlsContainer } from './ControlsContainer';
import Controls from './index';
import Button from '../Button';

describe('ControlsContainer component', () => {
  it('Should accept a `query` prop and pass it to Controls with the same name', () => {
    const query = 'test query';
    const component = shallow(
      <ControlsContainer
        query={query}
        setQuery={() => {}}
        performSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        setSizeUnit={() => {}}
        startDate=""
        endDate=""
        setStartDate={() => {}}
        setEndDate={() => {}} />
    );

    expect(component.find(Controls).props().query).toBe(query);
  });

  it('Should accept an `setQuery` prop and pass a function called `onChangeQuery` to Controls which defers to it', () => {
    const setQuery = jest.fn();
    const component = shallow(
      <ControlsContainer
        query=""
        setQuery={setQuery}
        performSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        setSizeUnit={() => {}}
        startDate=""
        endDate=""
        setStartDate={() => {}}
        setEndDate={() => {}} />
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
      <ControlsContainer
        query=""
        setQuery={() => {}}
        performSearch={performSearch}
        results={[]}
        sizeUnit={SizeUnit.feet}
        setSizeUnit={() => {}}
        startDate=""
        endDate=""
        setStartDate={() => {}}
        setEndDate={() => {}} />
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
            estimated_diameter_min: 5,
            estimated_diameter_max: 10
          }
        }
      },
      {
        id: '2',
        name: 'Two',
        estimated_diameter: {
          feet: {
            estimated_diameter_min: 3,
            estimated_diameter_max: 6
          }
        }
      }
    ];

    const component = shallow(
      <ControlsContainer
        query={''}
        setQuery={() => {}}
        performSearch={() => {}}
        results={resultsData}
        sizeUnit={SizeUnit.feet}
        setSizeUnit={() => {}}
        startDate=""
        endDate=""
        setStartDate={() => {}}
        setEndDate={() => {}} />
    );

    const controls = component.find(Controls);

    controls.props().results.forEach((result, index) => {
      expect(result.id).toBe(resultsData[index].id);
      expect(result.name).toBe(resultsData[index].name);
      expect(typeof result.diameter).toBe('number');
    });
  });

  it('Should accept a `setStartDate` prop and pass a prop by the same name to `Controls` which delegates to this function', () => {
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();

    const component = shallow(
      <ControlsContainer
        query={''}
        setQuery={() => {}}
        performSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        setSizeUnit={() => {}}
        startDate=""
        endDate=""
        setStartDate={setStartDate}
        setEndDate={setEndDate} />
    );

    const controls = component.find(Controls);

    const testValue = 'test value';

    act(() => {
      controls.props().setStartDate({
        target: {
          value: testValue
        }
      })

      controls.props().setEndDate({
        target: {
          value: testValue
        }
      });
    });

    expect(setStartDate).toHaveBeenLastCalledWith(testValue);
    expect(setEndDate).toHaveBeenLastCalledWith(testValue);
  });
});
