import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';

describe('Layout component', () => {
  const component = shallow(<Layout />);

  it('Should always render a Grid', () => {
    expect(component.type()).toBe(Grid);
  });

  it('Should always render a ControlsColumn and DisplayColumn inside the Grid', () => {
    expect(component.children().length).toBe(2);
    expect(component.childAt(0).type()).toBe(ControlsColumn);
    expect(component.childAt(1).type()).toBe(DisplayColumn);
  });
});
