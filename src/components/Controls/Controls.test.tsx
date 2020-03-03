import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import { SizeUnit } from '../../reducer';
import Controls from './index';
import { Wrapper, Input } from './styles';
import Button from '../Button';
import Radio from '../Radio';

describe('Controls component', () => {
  it('Should render a Fragment', () => {
    const component = shallow(
      <Controls
        query=""
        onChangeQuery={() => {}}
        onSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        sizeUnitOptions={[]}
        setSizeUnit={() => {}} />
    );

    expect(component.type()).toBe(Fragment);
  });

  it('Should render one `Wrapper` when results array is empty', () => {
    const component = shallow(
      <Controls
        query=""
        onChangeQuery={() => {}}
        onSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        sizeUnitOptions={[]}
        setSizeUnit={() => {}} />
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
      <Controls
        query=""
        onChangeQuery={() => {}}
        onSearch={() => {}}
        results={resultsData}
        sizeUnit={SizeUnit.feet}
        sizeUnitOptions={[]}
        setSizeUnit={() => {}} />
    );

    expect(component.find(Wrapper).length).toBe(2);
  });

  it('Should render an `Input`, `Button` and `Radio` component inside the first `Wrapper`', () => {
    const component = shallow(
      <Controls
        query=""
        onChangeQuery={() => {}}
        onSearch={() => {}}
        results={[]}
        sizeUnit={SizeUnit.feet}
        sizeUnitOptions={[]}
        setSizeUnit={() => {}} />
    );

    const wrapper = component.find(Wrapper);

    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Radio).length).toBe(1);
  });
});
