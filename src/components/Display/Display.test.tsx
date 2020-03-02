import React from 'react';
import { shallow } from 'enzyme';
import Display from './index';
import { Canvas } from './styles';

describe('Display component', () => {
  it('Should render a `Canvas`', () => {
    const component = shallow(<Display />);

    expect(component.find(Canvas).length).toBe(1);
  })
});
