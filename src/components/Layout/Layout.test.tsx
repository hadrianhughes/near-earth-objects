import React from 'react';
import renderer from 'react-test-renderer';
import { dive } from '../../utils';
import Layout from './index';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';

describe('Layout component', () => {
  const component = renderer.create(<Layout />).root;

  it('Should always render a Grid', () => {
    expect(component.children.length).toBe(1);
    expect(dive(component).type).toBe(Grid);
  });

  it('Should always render a ControlsColumn and DisplayColumn inside the Grid', () => {
    const main = dive(component, 2);

    expect(main.children.length).toBe(2);
    expect(main.children[0].type).toBe(ControlsColumn);
    expect(main.children[1].type).toBe(DisplayColumn);
  });
});
