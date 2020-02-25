import React from 'react';
import renderer from 'react-test-renderer';
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
    expect(component.children[0].type).toBe(Grid);
  });

  it('Should always render a ControlsColumn and DisplayColumn inside the Grid', () => {
    const main = component.children[0].children[0];

    expect(main.children.length).toBe(2);
    expect(main.children[0].type).toBe(ControlsColumn);
    expect(main.children[1].type).toBe(DisplayColumn);
  });
});
