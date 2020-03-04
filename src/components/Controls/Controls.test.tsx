import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-test-renderer';
import { SizeUnit } from '../../types';
import Controls from './index';
import { Wrapper, StyledInput, DateInput } from './styles';
import Button from '../Button';
import Radio from '../Radio';

describe('Controls component', () => {
  const basicProps = {
    query: '',
    onChangeQuery: () => {},
    onSearch: () => {},
    results: [],
    sizeUnit: SizeUnit.feet,
    sizeUnitOptions: [],
    setSizeUnit: () => {},
    date: '',
    setDate: () => {}
  };

  it('Should render a Fragment', () => {
    const component = shallow(
      <Controls {...basicProps} />
    );

    expect(component.type()).toBe(Fragment);
  });

  it('Should render one `Wrapper` when results array is empty', () => {
    const component = shallow(
      <Controls {...basicProps} />
    );

    expect(component.find(Wrapper).length).toBe(1);
  });

  it('Should render two `Wrapper` when results array has length', () => {
    const resultsData = [
      {
        id: '1',
        name: 'One',
        diameter: 10
      }
    ];

    const component = shallow(
      <Controls {...basicProps} results={resultsData} />
    );

    expect(component.find(Wrapper).length).toBe(2);
  });

  it('Should render an `Input`, `Button`, `Radio` and a `DateInput` components inside the first `Wrapper`', () => {
    const component = shallow(
      <Controls {...basicProps} />
    );

    const wrapper = component.find(Wrapper);

    expect(wrapper.find(StyledInput).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(DateInput).length).toBe(1);
    expect(wrapper.find(Radio).length).toBe(1);
  });

  it('Should trigger the `setDate` prop when the date input is changed', () => {
    const setDate = jest.fn();

    const component = shallow(
      <Controls {...basicProps} setDate={setDate} />
    );

    act(() => {
      component.find(DateInput).simulate('change');
    });

    expect(setDate).toHaveBeenCalled();
  });
});
