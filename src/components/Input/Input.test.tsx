import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';
import {
  StyledInput,
  StyledLabel
} from './styles';

describe('Input component', () => {
  it('Should always render a `StyledInput`', () => {
    const component = shallow(
      <Input
        value=""
        onChange={() => {}} />
    );

    expect(component.find(StyledInput).length).toBe(1);
  });

  it('Should render the `StyledInput` and a `span` inside a `StyledLabel` when given the label prop', () => {
    const testLabel = 'test label';

    const component = shallow(
      <Input
        value=""
        onChange={() => {}}
        label={testLabel} />
    );

    const labelEl = component.find(StyledLabel);
    const textEl = labelEl.find('span');

    expect(labelEl.length).toBe(1);
    expect(textEl.length).toBe(1);
    expect(textEl.text()).toBe(testLabel);
    expect(labelEl.find(StyledInput).length).toBe(1);
  });

  it('Should not render a `label` when the label prop is not given', () => {
    const component = shallow(
      <Input
        value=""
        onChange={() => {}} />
    );

    expect(component.find('label').length).toBe(0);
  });
});
